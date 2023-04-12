import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageTableComponent } from './image-table/image-table.component';
import { MatCardModule } from "@angular/material/card";
import { CardElevationDirective } from './card-elevation.directive';

@NgModule({
  declarations: [
    AppComponent,
    ImageTableComponent,
    CardElevationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
