import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { CryptoCurrencyMasterDetailsComponent } from './crypto-currency-master-details.component';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    MatGridListModule,
    MatListModule,
    NgForOf,
    AsyncPipe,
    CommonModule,
    MatButtonModule
  ],
  declarations: [CryptoCurrencyMasterDetailsComponent],
  providers: [],
  exports: [CryptoCurrencyMasterDetailsComponent]
})
export class CryptoCurrencyMasterDetailsComponentModule {
}
