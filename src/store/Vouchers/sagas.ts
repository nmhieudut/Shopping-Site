import { getAll } from "services";
import * as ActionTypes from "@types";
import { put, takeLatest } from "redux-saga/effects";

function* fetchVouchers(action: ActionTypes.FetchVouchersAction) {
  try {
    yield put({
      type: ActionTypes.SET_VOUCHERS,
      vouchers: []
    });
    const data = yield getAll();

    if (data.vouchers.length > 0) {
      yield put({
        type: ActionTypes.SET_VOUCHERS,
        vouchers: data.vouchers.map(voucher => ({
          id: voucher._id,
          url: voucher.url,
          legend: voucher.legend
        }))
      });
    } else {
      yield put({
        type: ActionTypes.SET_VOUCHERS,
        vouchers: []
      });
    }
  } catch (err) {
    console.log("err: ", err);
  }
}

function* watchedSagas() {
  yield takeLatest(ActionTypes.FETCH_VOUCHERS, fetchVouchers);
}

export default watchedSagas;
