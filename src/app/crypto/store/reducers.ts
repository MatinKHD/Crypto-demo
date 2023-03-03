import {CryptoInterface} from "../types/crypto.interface";
import * as CryptoActions from './actions'
import {on} from "cluster";
import {CryptoStateInterface} from "../types/cryptoState.interface";

export const cryptoFeatureKey = 'crypto';

export const initialState: CryptoStateInterface = {
  isLoading: false,
  crypto: [],
  error: null,
}

export const reducers = craeteReducer(
  initialState,
  on(CryptoActions.getCrypto, (state) => ({...state, isLoading: true})),
  on(
    CryptoActions.getCryptoSuccess,
    (state,action) => ({
      ...state,
      isLoading: false,
      crypto: action.crypto
    })),
  on(
    CryptoActions.getCryptoFailure,
    (state,action) => (
      {
        ...state,
        isLoading: false,
        error: action.error
      }
      ))

)
