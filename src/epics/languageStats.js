import {FETCH_LANGUAGE_STATS, fetchLanguageStatsFinished } from '../actions/index';
import 'rxjs/add/operator/mergeMap';
import { ajax } from 'rxjs/observable/dom/ajax'
import 'rxjs/add/operator/map';

const  fetchLanguageStatsEpic = action$ =>
  action$.ofType(FETCH_LANGUAGE_STATS)
    .mergeMap(action =>
      ajax.getJSON(`https://wakatime.com/api/v1/users/current/stats/${action.payload}`, { 'Authorization': "Basic " + btoa('99c1f1de-2954-41d7-b76e-82cedf9c3fe2'), withCredentials: true})
        .map(response => fetchLanguageStatsFinished(response))
    );
export default fetchLanguageStatsEpic;


