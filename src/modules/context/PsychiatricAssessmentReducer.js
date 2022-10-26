export const PSYCHIATRIC_ASSESSMENT_ACTIONS = {
  INSERT_OR_UPDATE: "INSERT_OR_UPDATE",
  REFRESH: "REFRESH",
};

const psychiatricAssessmentReducer = (state, action) => {
  switch (action.type) {
    case PSYCHIATRIC_ASSESSMENT_ACTIONS.INSERT_OR_UPDATE: {
      const {
        psychiatricAssessment: setPsychiatricAssessment,
      } = action.payload;
      const { psychiatricAssessments } = state;

      const psychiatricAssessmentIndex = state.psychiatricAssessments.findIndex(
        (psychiatricAssessment) => {
          return psychiatricAssessment.id === setPsychiatricAssessment.id;
        }
      );
      if (psychiatricAssessmentIndex !== -1) {
        psychiatricAssessments[
          psychiatricAssessmentIndex
        ] = setPsychiatricAssessment;
      } else {
        psychiatricAssessments.push(setPsychiatricAssessment);
      }

      return {
        ...state,
        psychiatricAssessments,
      };
    }
    case PSYCHIATRIC_ASSESSMENT_ACTIONS.REFRESH: {
      const { psychiatricAssessments } = action.payload;
      return {
        ...state,
        psychiatricAssessments,
      };
    }
    default:
      return state;
  }
};

export default psychiatricAssessmentReducer;
