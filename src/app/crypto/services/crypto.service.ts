import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CryptoInterface} from "../types/crypto.interface";
import {HttpClient} from "@angular/common/http";
import {cryptoUrl} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http: HttpClient) { }

  getCrypto():Observable<CryptoInterface[]> {
    return this.http.get<CryptoInterface[]>(cryptoUrl);
  }
}
