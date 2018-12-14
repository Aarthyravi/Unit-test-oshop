import { TestBed, inject } from '@angular/core/testing';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AngularFireDatabaseModule, AngularFireAuthModule,
                RouterTestingModule,
                 AngularFireModule.initializeApp(environment.firebase)],
      providers: [AuthService, UserService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
