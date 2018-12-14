import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
//import { FirebaseApp } from 'angularfire2';

describe('AdminAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireDatabaseModule, AngularFireAuthModule,
                RouterTestingModule,
                AngularFireModule.initializeApp(environment.firebase)],
      providers: [AdminAuthGuardService, UserService]
    });
  });

  it('should be created', inject([AdminAuthGuardService], (service: AdminAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
