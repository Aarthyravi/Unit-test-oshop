import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFilterComponent } from './products-filter.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoryService } from '../../category.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

describe('ProductsFilterComponent', () => {
  let component: ProductsFilterComponent;
  let fixture: ComponentFixture<ProductsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, AngularFireDatabaseModule,
                 AngularFireModule.initializeApp(environment.firebase)],
      declarations: [ ProductsFilterComponent ],
      providers: [ CategoryService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
