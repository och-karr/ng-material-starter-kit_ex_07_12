import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductListWithDeleteComponent } from './product-list-with-delete.component';
import { AsyncPipe, NgForOf } from '@angular/common';

@NgModule({
  imports: [
    MatListModule,
    NgForOf,
    AsyncPipe,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [ProductListWithDeleteComponent],
  providers: [],
  exports: [ProductListWithDeleteComponent]
})
export class ProductListWithDeleteComponentModule {
}
