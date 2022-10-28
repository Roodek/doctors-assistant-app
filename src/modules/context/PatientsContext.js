import Builder from "crane-query-builder";
import React, { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import reducer, { PATIENT_ACTIONS } from "./PatientsContextReducer";
import { database, TABLES } from "../database/database";
import { PHYSICAL_EXAMINATION_ACTIONS } from "./PhysicalExaminationReducer";

export const PatientsContext = createContext({
  patients: [],
});

function PatientsContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    patients: [],
  });

  useEffect(() => {
    const refreshPatients = async () => {
      const patients = await database.getAllFromTable(TABLES.patients);
      try {
        // Get all diagnosis
        const builder = Builder()
          .table(TABLES.patients_diagnosis)
          .join(
            TABLES.diseases,
            `${TABLES.patients_diagnosis}.disease_id`,
            "=",
            `${TABLES.diseases}.id`
          );
        const allDiagnosis = await builder.get();
        const diagnosisByPatientId = {};

        // Divide diagnosis per patient
        allDiagnosis.forEach((diagnosis) => {
          const singlePatientDiagnosis =
            diagnosisByPatientId[diagnosis.patient_id] || [];
          singlePatientDiagnosis.push(diagnosis);
          diagnosisByPatientId[diagnosis.patient_id] = singlePatientDiagnosis;
        });

        // Assign diagnosis to each patient
        patients.forEach((patient, index) => {
          patients[index].diagnosis = diagnosisByPatientId[patient.id];
        }, patients);

        dispatch({
          type: PATIENT_ACTIONS.REFRESH,
          payload: { patients },
        });
      } catch (e) {
        console.log(`DB error get diagnosis ${e.message}`);
      }
    };

    refreshPatients();
  }, []);

  const addPatient = async (patient) => {
    const id = await database.insertObjectToTable(patient, TABLES.patients);
    if (id) {
      const patientWithId = patient;
      patientWithId.id = id;
      dispatch({
        type: PATIENT_ACTIONS.INSERT_OR_UPDATE,
        payload: { patient: patientWithId },
      });
    }
    return id;
  };

  const addNewDiagnosisResults = (diagnosisResults, patientId) => {
    dispatch({
      type: PATIENT_ACTIONS.ADD_NEW_DIAGNOSIS_RESULTS,
      payload: { diagnosisResults, patientId },
    });
  };

  const updatePatient = async (patient) => {
    const result = await database.updateObjectFromTable(
      patient,
      TABLES.patients
    );
    console.log(result);
    if (result) {
      dispatch({
        type: PATIENT_ACTIONS.INSERT_OR_UPDATE,
        payload: { patient },
      });
    }
    return result;
  };

  const getPatientById = (patientId) => {
    return state.patients.find((patient) => {
      return patient.id === patientId;
    });
  };
  const getRawPatientData = (patientId) => {
    const patient = JSON.parse(
      JSON.stringify(
        state.patients.find((rec) => {
          return rec.id === patientId;
        })
      )
    );
    delete patient.diagnosis;
    return patient;
  };
  const deletePatientFromAllTables = async (id) => {
    // eslint-disable-next-line no-useless-catch
    try {
      // eslint-disable-next-line radix
      const patientId = parseInt(id);
      const resultPatients = await Builder()
        .table(TABLES.patients)
        .where("id", "=", patientId)
        .delete();
      const resultBasicData = await Builder()
        .table(TABLES.patients_basic_data)
        .where("patient_id", "=", patientId)
        .delete();
      const resultPhysicalExamination = await Builder()
        .table(TABLES.physical_examination)
        .where("patient_id", "=", patientId)
        .delete();
      const resultPsychiatricAssessment = await Builder()
        .table(TABLES.psychiatric_assessment)
        .where("patient_id", "=", patientId)
        .delete();
      console.log(
        `Successfully delete object from ${TABLES.patients},
      ${TABLES.patients_basic_data},
      ${TABLES.physical_examination},
      ${TABLES.psychiatric_assessment} with id ${patientId}`
      );
      return (
        resultPatients &&
        resultBasicData &&
        resultPhysicalExamination &&
        resultPsychiatricAssessment
      );
    } catch (e) {
      throw e;
    }
  };
  const value = {
    ...state,
    addPatient,
    addNewDiagnosisResults,
    updatePatient,
    getPatientById,
    deletePatientFromAllTables,
    getRawPatientData,
  };

  return (
    <PatientsContext.Provider value={value}>
      {children}
    </PatientsContext.Provider>
  );
}

PatientsContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PatientsContextProvider;
