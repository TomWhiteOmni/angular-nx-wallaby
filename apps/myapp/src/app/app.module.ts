import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { MylibModule } from '@myworkspacename/mylib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MylibModule, NxModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
