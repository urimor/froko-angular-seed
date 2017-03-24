import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

let TEST_PROVIDERS = [
  { provide: 'environment', useValue: 'Test' }
];

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [TEST_PROVIDERS]
    });

    this.fixture = TestBed.createComponent(AppComponent);
  });

  it('should display friendly greeter with component name', () => {
    this.fixture.detectChanges();

    let debugElement = this.fixture.debugElement.query(By.css('h2'));
    let nativeElement = debugElement.nativeElement;

    expect(nativeElement.textContent).toContain('Hi, I\'m AppComponent and I\'m running in Test mode!');
  });
});
