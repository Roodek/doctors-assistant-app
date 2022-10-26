import React, { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import psychiatricAssessmentReducer, {
  PSYCHIATRIC_ASSESSMENT_ACTIONS,
} from "./PsychiatricAssessmentReducer";
//import patientsPsychiatricAssessment from "../../constants/data/patientsPsychiatricAssessment";
import { database, TABLES } from "../database/database";
import basicDataReducer from "./BasicDataContextReducer";

export const PsychiatricAssessmentContext = createContext({
  patientsPsychiatricAssessment: [],
});

//const initialState = { patientsPsychiatricAssessment };

function PsychiatricAssessmentProvider({ children }) {
  const [state, dispatch] = useReducer(psychiatricAssessmentReducer, {
    psychiatricAssessments: [],
  });
  useEffect(() => {
    const refreshPsychiatricAssessment = async () => {
      const psychiatricAssessments = await database.getAllFromTable(
        TABLES.psychiatric_assessment
      );
      dispatch({
        type: PSYCHIATRIC_ASSESSMENT_ACTIONS.REFRESH,
        payload: { psychiatricAssessments },
      });
    };

    refreshPsychiatricAssessment();
  }, []);

  const setPsychiatricAssessment = async (psychiatricAssessment) => {
    const id = await database.insertObjectToTable(
      psychiatricAssessment,
      TABLES.psychiatric_assessment
    );
    if (id) {
      const assessmentWithId = psychiatricAssessment;
      assessmentWithId.id = id;
      dispatch({
        type: PSYCHIATRIC_ASSESSMENT_ACTIONS.INSERT_OR_UPDATE,
        payload: { psychiatricAssessment: assessmentWithId },
      });
    }
    return id;
  };

  const updatePsychiatricAssessment = async (psychiatricAssessment) => {
    const result = await database.updateObjectFromTable(
      psychiatricAssessment,
      TABLES.psychiatric_assessment
    );
    if (result) {
      dispatch({
        type: PSYCHIATRIC_ASSESSMENT_ACTIONS.INSERT_OR_UPDATE,
        payload: { psychiatricAssessment },
      });
    }
    return result;
  };

  const value = {
    ...state,
    setPsychiatricAssessment,
    updatePsychiatricAssessment,
  };

  return (
    <PsychiatricAssessmentContext.Provider value={value}>
      {children}
    </PsychiatricAssessmentContext.Provider>
  );
}

PsychiatricAssessmentProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PsychiatricAssessmentProvider;
