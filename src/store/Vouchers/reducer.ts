import { SET_VOUCHERS, VoucherActionType } from "@types";

export interface Voucher {
  id: string;
  url: string;
  legend: string;
}

export interface VoucherState {
  vouchers: Voucher[];
}
const initialState: VoucherState = {
  vouchers: []
};

export default function VouchersReducers(
  state = initialState,
  action: VoucherActionType
): VoucherState {
  switch (action.type) {
    case SET_VOUCHERS:
      return {
        ...state,
        vouchers: action.vouchers
      };
    default:
      return state;
  }
}
