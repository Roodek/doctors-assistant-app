export const PHYSICAL_EXAMINATION_ACTIONS = {
  INSERT_OR_UPDATE: "INSERT_OR_UPDATE",
  REFRESH: "REFRESH",
};

const physicalExaminationReducer = (state, action) => {
  switch (action.type) {
    case PHYSICAL_EXAMINATION_ACTIONS.INSERT_OR_UPDATE: {
      const { physicalExamination: setPhysicalExamination } = action.payload;
      const { physicalExaminations } = state;

      const physicalExaminationIndex = state.physicalExaminations.findIndex(
        (physicalExamination) => {
          return physicalExamination.id === setPhysicalExamination.id;
        }
      );
      if (physicalExaminationIndex !== -1) {
        physicalExaminations[physicalExaminationIndex] = setPhysicalExamination;
      } else {
        physicalExaminations.push(setPhysicalExamination);
      }

      return {
        ...state,
        physicalExaminations,
      };
    }
    case PHYSICAL_EXAMINATION_ACTIONS.REFRESH: {
      const { physicalExaminations } = action.payload;
      return {
        ...state,
        physicalExaminations,
      };
    }
    default:
      return state;
  }
};

export default physicalExaminationReducer;
