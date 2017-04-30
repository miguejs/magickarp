import { LANGUAGE_STATS_FINISHED } from '../actions/index';

const stats = (state = { languages: [ {name: 'default', total_seconds: 0}] }, action) => {
  switch (action.type) {
    case LANGUAGE_STATS_FINISHED:
      return {
        ...state,
        languages: action.payload.data.languages
      };

    default:
      return state;
  }
};

export default stats;
