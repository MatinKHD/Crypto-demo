import * as CryptoActions from './actions'
import {CryptoStateInterface} from "../types/cryptoState.interface";
import {createReducer, on} from "@ngrx/store";

export const cryptoFeatureKey = 'crypto';

export const initialState: CryptoStateInterface = {
  isLoading: false,
  crypto: [],
  error: null,
}

export const reducers = createReducer(
  initialState,
  on(CryptoActions.getCrypto, (state) => ({...state, isLoading: true})),
  on(
    CryptoActions.getCryptoSuccess,
    (state, action) => ({
      ...state,
      isLoading: false,
      crypto: action.crypto
    })),
  on(
    CryptoActions.getCryptoFailure,
    (state, action) => (
      {
        ...state,
        isLoading: false,
        error: action.error
      }
    ))
)
