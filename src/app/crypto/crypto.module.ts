import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoRoutingModule } from './crypto-routing.module';
import { CryptoComponent } from './components/crypto/crypto.component';
import {CryptoService} from "./services/crypto.service";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {cryptoFeatureKey, reducers} from "./store/reducers";
import {CryptoEffects} from "./store/effects";


@NgModule({
  declarations: [
    CryptoComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(cryptoFeatureKey, reducers),
    EffectsModule.forFeature([CryptoEffects]),
    CryptoRoutingModule
  ],
  providers: [
    CryptoService
  ]
})
export class CryptoModule { }
