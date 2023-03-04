import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {CryptoInterface} from "../../types/crypto.interface";
import {select, Store} from "@ngrx/store";
import {AppStateInterface} from "../../../types/appState.interface";
import {cryptoSelector, errorSelector, isLoadingSelector} from "../../store/selectors";
import * as CryptoActions from "../../store/actions";

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss']
})
export class CryptoListComponent {
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
