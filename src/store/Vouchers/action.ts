import {
  Voucher,
  FETCH_VOUCHERS,
  SET_VOUCHERS,
  VoucherActionType
} from "types";

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
