import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AngularFireDatabaseModule,
                 AngularFireModule.initializeApp(environment.firebase)],
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
