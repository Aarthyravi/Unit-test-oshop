import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OrderService } from '../../order.service';
import { AdminStatusComponent } from './admin-status.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

describe('AdminStatusComponent', () => {
  let component: AdminStatusComponent;
  let fixture: ComponentFixture<AdminStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,
                 AngularFireDatabaseModule,
                 AngularFireModule.initializeApp(environment.firebase)],
      declarations: [ AdminStatusComponent ],
      providers: [OrderService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
