export const FETCH_LANGUAGE_STATS = 'FETCH_LANGUAGE_STATS';
export const LANGUAGE_STATS_FINISHED = 'LANGUAGE_STATS_FINISHED';

export const fetchLanguageStats = time => ({ type: FETCH_LANGUAGE_STATS, payload: time });
export const fetchLanguageStatsFinished = payload => ({ type: LANGUAGE_STATS_FINISHED, payload });