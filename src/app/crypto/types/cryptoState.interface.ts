import {CryptoInterface} from "./crypto.interface";


export interface CryptoStateInterface {
  isLoading: boolean;
  crypto: CryptoInterface[],
  error: string | null
}
