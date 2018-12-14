import { TestBed, inject } from '@angular/core/testing';

import { ShoppingCartService } from './shopping-cart.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

describe('ShoppingCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AngularFireDatabaseModule, 
                 AngularFireModule.initializeApp(environment.firebase) ],
      providers: [ShoppingCartService]
    });
  });

  it('should be created', inject([ShoppingCartService], (service: ShoppingCartService) => {
    expect(service).toBeTruthy();
  }));
});
