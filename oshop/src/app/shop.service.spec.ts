import { TestBed, inject } from '@angular/core/testing';

import { ShopService } from './shop.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

describe('ShopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AngularFireDatabaseModule,
                 AngularFireModule.initializeApp(environment.firebase) ],
      providers: [ShopService]
    });
  });

  it('should be created', inject([ShopService], (service: ShopService) => {
    expect(service).toBeTruthy();
  }));
});
