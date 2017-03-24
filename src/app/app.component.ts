import { Component, Inject } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h2>Hi, I'm {{ name }} and I'm running in {{ environment }} mode!<h2>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;

  constructor(@Inject('environment') public environment: string) {
    this.name = 'AppComponent';
  }
}
