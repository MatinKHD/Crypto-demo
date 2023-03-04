import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppStateInterface} from "../types/appState.interface";
import {Observable} from "rxjs";
import {CryptoInterface} from "./types/crypto.interface";
import {cryptoSelector, errorSelector, isLoadingSelector} from "./store/selectors";
import * as CryptoActions from "./store/actions"


@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {
  isLoading!: Observable<boolean>;
  error$!: Observable<string | null>;
  crypto$!: Observable<CryptoInterface[]>

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading = this.store.pipe(select(isLoadingSelector));
    this.crypto$ = this.store.pipe(select(cryptoSelector));
    this.error$ = this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(CryptoActions.getCrypto());
  }

}
