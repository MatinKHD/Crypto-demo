import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CryptoInterface} from "../types/crypto.interface";

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }

  getCrypto():Observable<CryptoInterface[]> {
    return
  }
}
