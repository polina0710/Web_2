import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeriodicalsModule } from './periodicals/periodicals.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PeriodicalsModule,
    BrowserModule,
    AppRoutingModule,
    PeriodicalsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
