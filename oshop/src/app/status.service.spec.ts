import { TestBed, inject } from '@angular/core/testing';

import { StatusService } from './status.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

describe('StatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AngularFireDatabaseModule,
                 AngularFireModule.initializeApp(environment.firebase)],
      providers: [StatusService]
    });
  });

  it('should be created', inject([StatusService], (service: StatusService) => {
    expect(service).toBeTruthy();
  }));
});
