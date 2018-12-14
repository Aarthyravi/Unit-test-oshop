import { TestBed, inject } from '@angular/core/testing';

import { CategoryService } from './category.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

describe('CategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AngularFireDatabaseModule,
                 AngularFireModule.initializeApp(environment.firebase)],
      providers: [CategoryService]
    });
  });

  it('should be created', inject([CategoryService], (service: CategoryService) => {
    expect(service).toBeTruthy();
  }));
});
