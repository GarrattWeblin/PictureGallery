import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false;

  login(userName: string, password: string): Observable<any> {
    console.log(userName);
    console.log(password);
    if (userName == 'admin' && password == 'admin') {
      this.isUserLoggedIn = true;
    }
    
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 

  return of(this.isUserLoggedIn).pipe(
    // forced login delay
     delay(100),
     tap(val => { 
        console.log("Is User Authentication is successful: " + val); 
     })
  );
  
  }

  logout(): void {
  this.isUserLoggedIn = false;
     localStorage.removeItem('isUserLoggedIn'); 
     // Reload the page to force component update
     // TODO - Is there a better way that doesn't force an entire reload?
     window.location.reload();
  }

  constructor() { }
}
