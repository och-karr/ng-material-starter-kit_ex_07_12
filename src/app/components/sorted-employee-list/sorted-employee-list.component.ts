import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable, of} from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-sorted-employee-list',
  templateUrl: './sorted-employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortedEmployeeListComponent {
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public order$: Observable<string> = this._orderSubject.asObservable();
  public orders: Observable<string[]> = of(['asc', 'desc']);
  readonly employees$: Observable<EmployeeModel[]> = combineLatest([
    this._employeeService.getAll(),
    this.order$
  ]).pipe(
    map(([products, order]: [EmployeeModel[], string]) => {
      return products.sort((a, b) => {
        if(a.employee_salary > b.employee_salary) return order === 'asc' ? 1 : -1;
        if(a.employee_salary < b.employee_salary) return order === 'asc' ? -1 : 1;
        return 0;
      })
    })
  );

  constructor(private _employeeService: EmployeeService) {
  }

  sort(order: string): void {
    this._orderSubject.next(order);
  }

}
