import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTableModule } from 'angular5-data-table';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from '../../product.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminProductsComponent } from './admin-products.component';

describe('AdminProductsComponent', () => {
  let component: AdminProductsComponent;
  let fixture: ComponentFixture<AdminProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataTableModule, RouterTestingModule,
                AngularFireDatabaseModule,
                AngularFireModule.initializeApp(environment.firebase)],
      declarations: [ AdminProductsComponent ],
      providers: [ProductService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
