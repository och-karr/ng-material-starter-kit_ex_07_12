import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-master-details',
  templateUrl: './product-master-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductMasterDetailsComponent {
  readonly list$: Observable<ProductModel[]> = this._productService.getAll();
  private _detailsSubject: Subject<ProductModel> = new Subject<ProductModel>();
  public details$: Observable<ProductModel> = this._detailsSubject.asObservable();
  // readonly list$: Observable<ProductModel[]> = this._productService.getAll();
  // private _selectedProductIdSubject: Subject<number> = new Subject<number>();
  // public selectedProductId$: Observable<number> = this._selectedProductIdSubject.asObservable();
  // readonly details$: Observable<ProductModel> = this.selectedProductId$.pipe(
  //   switchMap(data => this._productService.getOne(data)));

  constructor(private _productService: ProductService) {
  }

  selectProduct(product: ProductModel): void {
    // this._selectedProductIdSubject.next(id);
    this._detailsSubject.next(product);
  }
}
