import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {Component} from '@angular/core';

@Component({selector: 'product-quantity', template: ''})
class ProductQuantityStubComponent {}

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireDatabaseModule, 
                AngularFireModule.initializeApp(environment.firebase)],
      declarations: [ ProductCardComponent, ProductQuantityStubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
