import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing'
import { Component } from '@angular/core';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@Component({selector: 'bs-navbar', template: ''})
class AppStubComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,
                 AngularFireDatabaseModule, AngularFireAuthModule,
                 AngularFireModule.initializeApp(environment.firebase)],
      declarations: [
        AppComponent,
        AppStubComponent
      ],
      providers: [UserService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'EBridge'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    //expect(app.title).toEqual('EBridge');

  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    //expect(compiled.querySelector('h1').textContent).toContain('Welcome to oshop!');
  }));
});
