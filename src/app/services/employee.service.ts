import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<EmployeeModel[]>('http://localhost:3000/employees');
  }

  delete(id: string): Observable<EmployeeModel> {
    return this._httpClient.delete<EmployeeModel>(`https://dummy.restapiexample.com/api/v1/delete/${id}`);
  }
}
