import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingFormComponent } from './shipping-form.component';
import { FormsModule }   from '@angular/forms';
import { UserService } from '../user.service';
import { OrderService } from '../order.service';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

describe('ShippingFormComponent', () => {
  let component: ShippingFormComponent;
  let fixture: ComponentFixture<ShippingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule,
                 AngularFireDatabaseModule, AngularFireAuthModule,
                 AngularFireModule.initializeApp(environment.firebase)],
      declarations: [ ShippingFormComponent ],
      providers: [ UserService, OrderService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
