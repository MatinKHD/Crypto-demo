import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CryptoComponent} from "./crypto.component";
import {CryptoListComponent} from "./components/crypto-list/crypto-list.component";

const routes: Routes = [
  {
    path: '',
    component: CryptoComponent,
    children: [
      {
        path: 'crypto-list',
        component: CryptoListComponent,
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoRoutingModule {
}
