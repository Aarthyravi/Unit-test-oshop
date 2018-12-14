import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutComponent } from './check-out.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {Component} from '@angular/core';

@Component({selector: 'shipping-form', template: ''})
class ShippingStubComponent {}
@Component({selector: 'shopping-cart-summary', template: ''})
class ShoppingStubComponent {}

describe('CheckOutComponent', () => {
  let component: CheckOutComponent;
  let fixture: ComponentFixture<CheckOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AngularFireDatabaseModule, 
                 AngularFireModule.initializeApp(environment.firebase) ],
      declarations: [ CheckOutComponent,ShippingStubComponent, ShoppingStubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
