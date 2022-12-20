import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-master-details',
  templateUrl: './employee-master-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeMasterDetailsComponent {
  readonly list$: Observable<EmployeeModel[]> = this._employeeService.getAll();
  private _detailsSubject: Subject<EmployeeModel> = new Subject<EmployeeModel>();
  public details$: Observable<EmployeeModel> = this._detailsSubject.asObservable();

  constructor(private _employeeService: EmployeeService) {
  }

  selectEmployee(item: EmployeeModel): void{
    this._detailsSubject.next(item);
  }
}
