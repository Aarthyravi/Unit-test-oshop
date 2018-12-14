import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsComponent } from './shops.component';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

describe('ShopsComponent', () => {
  let component: ShopsComponent;
  let fixture: ComponentFixture<ShopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,
                 AngularFireDatabaseModule,
                 AngularFireModule.initializeApp(environment.firebase) ],
      declarations: [ ShopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
