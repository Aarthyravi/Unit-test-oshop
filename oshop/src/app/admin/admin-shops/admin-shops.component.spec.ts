import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTableModule } from 'angular5-data-table';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AdminShopsComponent } from './admin-shops.component';

describe('AdminShopsComponent', () => {
  let component: AdminShopsComponent;
  let fixture: ComponentFixture<AdminShopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataTableModule, RouterTestingModule,
               AngularFireDatabaseModule, 
               AngularFireModule.initializeApp(environment.firebase)],
      declarations: [ AdminShopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
