import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoRoutingModule } from './crypto-routing.module';
import { CryptoComponent } from './components/crypto/crypto.component';
import {CryptoService} from "./services/crypto.service";


@NgModule({
  declarations: [
    CryptoComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(postsFeatureKeys, crypto),
    EffectsModule.forFeature([PostEffects]),
    CryptoRoutingModule
  ],
  providers: [
    CryptoService
  ]
})
export class CryptoModule { }
