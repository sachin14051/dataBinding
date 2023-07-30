import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './shared/components/databinding/databinding.component';
import { PropertyBindingComponent } from './shared/components/property-binding/property-binding.component';
import { EventBindingComponent } from './shared/components/event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
