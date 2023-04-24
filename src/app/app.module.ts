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
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { environment } from 'src/environments/environment';

//import { AngularFireModule } from 'angularfire2';
//import { AngularFireStorageModule } from 'angularfire2/storage';
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ImageTableComponent,
    CardElevationDirective,
    MiniaturePortfolioComponent,
    AboutComponent,
    LoginMenuComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(
      environment.firebase
     )),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    FormsModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule,
    // AngularFireStorageModule

  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
