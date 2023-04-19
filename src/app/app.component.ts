import { Component, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  
  firestore: Firestore = inject(Firestore);

  isUserLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    let storeData = localStorage.getItem("isUserLoggedIn");
    console.log("StoreData: " + storeData);

    if( storeData != null && storeData == "true")
       this.isUserLoggedIn = true;
    else


       this.isUserLoggedIn = false;
  }


}
