import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as CryptoActions from "./actions"
import {catchError, map, mergeMap, of} from "rxjs";
import {CryptoService} from "../services/crypto.service";
@Injectable()
export class CryptoEffects {
  getCrypto$= createEffect( ()=>
    this.actions$.pipe(
      ofType(CryptoActions.getCrypto),
      mergeMap( ()=> {
        return this.cryptoService.getCrypto().pipe(
          map((crypto) => CryptoActions.getCryptoSuccess({crypto})),
          catchError( err => of(CryptoActions.getCryptoFailure({error: err.message})))
        )
      })
    )
  )
  constructor(
    private actions$: Actions,
    private cryptoService: CryptoService
  ) {
  }
}
