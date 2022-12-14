import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list-with-delete',
  templateUrl: './employee-list-with-delete.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EmployeeListWithDeleteComponent {
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  public refreshedList$: Observable<EmployeeModel[]> = this.refresh$.pipe(
    switchMap(() => this._employeeService.getAll())
  );

  constructor(private _employeeService: EmployeeService) {
  }

  remove(id: string): void {
    this._employeeService.delete(id).subscribe(
      () => this._refreshSubject.next()
    );
  }
}
