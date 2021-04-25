import { Voucher } from "store/Vouchers/reducer";
import { FETCH_VOUCHERS, SET_VOUCHERS } from "constant/actions";

export interface FetchVouchersAction {
  type: typeof FETCH_VOUCHERS;
}

export interface SetVouchersAction {
  type: typeof SET_VOUCHERS;
  vouchers: Voucher[];
  isFetching: boolean;
  total: number;
}

export type VoucherActionType = FetchVouchersAction | SetVouchersAction;
