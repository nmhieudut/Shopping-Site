import { VoucherActionType } from "@types";
import { FETCH_VOUCHERS, SET_VOUCHERS } from "constant/actions";
import { Voucher } from "store/Vouchers";

export function fetchVouchers(): VoucherActionType {
  return {
    type: FETCH_VOUCHERS
  };
}

export function setProducts(
  vouchers: Voucher[],
  isFetching: boolean,
  total: number
): VoucherActionType {
  return {
    type: SET_VOUCHERS,
    vouchers,
    isFetching,
    total
  };
}
