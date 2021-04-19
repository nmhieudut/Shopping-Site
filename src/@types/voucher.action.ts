import { Voucher } from "store/Vouchers/reducer";

export const FETCH_VOUCHERS = "FETCH_VOUCHERS";
export const SET_VOUCHERS = "SET_VOUCHERS";

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
