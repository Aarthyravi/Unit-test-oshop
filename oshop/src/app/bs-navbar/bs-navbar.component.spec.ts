import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { BsNavbarComponent } from './bs-navbar.component';
import {RouterTestingModule} from '@angular/router/testing';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

describe('BsNavbarComponent', () => {
  let component: BsNavbarComponent;
  let fixture: ComponentFixture<BsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
                AngularFireDatabaseModule, AngularFireAuthModule,
                AngularFireModule.initializeApp(environment.firebase)],
      declarations: [ BsNavbarComponent ],
      providers: [AuthService, UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
