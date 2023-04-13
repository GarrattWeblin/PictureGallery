import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageTableComponent } from './image-table/image-table.component';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from "@angular/material/button"
import { CardElevationDirective } from './card-elevation.directive';
import { MiniaturePortfolioComponent } from './miniature-portfolio/miniature-portfolio.component';
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from "@angular/material/menu"
import { AboutComponent } from './about/about.component';
import { LoginMenuComponent } from './login-menu/login-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageTableComponent,
    CardElevationDirective,
    MiniaturePortfolioComponent,
    AboutComponent,
    LoginMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
