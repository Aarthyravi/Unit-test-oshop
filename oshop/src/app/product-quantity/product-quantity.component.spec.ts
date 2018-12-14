import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQuantityComponent } from './product-quantity.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

describe('ProductQuantityComponent', () => {
  let component: ProductQuantityComponent;
  let fixture: ComponentFixture<ProductQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AngularFireDatabaseModule, 
                 AngularFireModule.initializeApp(environment.firebase) ],
      declarations: [ ProductQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
