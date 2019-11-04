import { takeLatest, put } from "redux-saga/effects";
import { SET_LOCALE_LANG, SET_LOCALE_LANG_ASYNC } from "../actions/types";
import { campaignsData } from "../../assets/mockData/campaignsData";

function* setLangWorker(action) {
  yield put({ type: SET_LOCALE_LANG_ASYNC, payload: action.payload });
}

export function* setLangWatcher() {
  yield takeLatest(SET_LOCALE_LANG, setCampaignWorker);
}
