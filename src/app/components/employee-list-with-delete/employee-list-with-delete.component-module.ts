import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { EmployeeListWithDeleteComponent } from './employee-list-with-delete.component';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatCardModule, AsyncPipe, NgForOf, MatListModule, CommonModule, MatButtonModule],
  declarations: [EmployeeListWithDeleteComponent],
  providers: [],
  exports: [EmployeeListWithDeleteComponent]
})
export class EmployeeListWithDeleteComponentModule {
}
