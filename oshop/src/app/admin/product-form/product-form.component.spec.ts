import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';
import { ShopService } from '../../shop.service';
import { FormsModule }   from '@angular/forms';
import { ProductFormComponent } from './product-form.component';
import {Component} from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {RouterTestingModule} from '@angular/router/testing';

@Component({selector: 'product-card', template: ''})
class ProductCardStubComponent {}

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule,
                 AngularFireDatabaseModule,
                 AngularFireModule.initializeApp(environment.firebase)],
      declarations: [ ProductFormComponent, ProductCardStubComponent ],
      providers: [CategoryService, ProductService, ShopService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
