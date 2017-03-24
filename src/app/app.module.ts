import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ENV_PROVIDERS } from '../environments/environment';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  providers: [ENV_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
