import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from '../product.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsComponent } from './products.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Component } from '@angular/core';

@Component({selector: 'product-filter', template: ''})
class ProductFilterStubComponent {}

@Component({selector: 'product-card', template: ''})
class ProductCardStubComponent {}

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,
                 AngularFireDatabaseModule
                 AngularFireModule.initializeApp(environment.firebase)],
      declarations: [ ProductsComponent, ProductFilterStubComponent, ProductCardStubComponent ],
      providers: [ProductService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
