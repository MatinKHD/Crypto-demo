import {createAction, props} from '@ngrx/store';
import {CryptoInterface} from "../types/crypto.interface";


export const getCrypto = createAction('[Crypto] Get Crypto');
export const getCryptoSuccess = createAction(
  '[Crypto] Get Crypto Success',

  props<{ crypto: CryptoInterface[] }>()
);
export const getCryptoFailure = createAction(
  '[Crypto] Get Crypto Failure',
  props<{ error: string }>()
)
