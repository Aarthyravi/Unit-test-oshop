import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdersComponent } from './my-orders.component';
import { UserService } from './../user.service';
import { OrderService } from './../order.service';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

describe('MyOrdersComponent', () => {
  let component: MyOrdersComponent;
  let fixture: ComponentFixture<MyOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,
                AngularFireDatabaseModule, AngularFireAuthModule,
                AngularFireModule.initializeApp(environment.firebase)],
      declarations: [ MyOrdersComponent ],
      providers: [ UserService, OrderService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
