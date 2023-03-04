import {AppStateInterface} from "../../types/appState.interface";
import {createSelector} from "@ngrx/store";


export const selectFeature = (state: AppStateInterface) => state.crypto;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const cryptoSelector = createSelector(
  selectFeature,
  (state) => state.crypto
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
)

