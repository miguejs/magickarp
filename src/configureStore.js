import {createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import stats from './reducers/stats';
import fetchLanguageStatsEpic from './epics/languageStats';

const epicMiddleware = createEpicMiddleware(fetchLanguageStatsEpic);

const configureStore = () => {
  const store = createStore(
    stats,
    applyMiddleware(epicMiddleware)
  );
  return store

}
export default configureStore;