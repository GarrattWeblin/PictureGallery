import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})
export class LoginMenuComponent {

  username = "";
  userPassword = "";
  //@ViewChild('usernameInput') searchElement: ElementRef = {} as ElementRef;

  @ViewChild("myinput") myInputField: ElementRef = {} as ElementRef;

  menuOpened() {
    setTimeout(() => {
      this.myInputField.nativeElement.focus();
    }, 0);
  }

  userlogin() {

    this.authService.login(this.username, this.userPassword).subscribe( data => { 
      console.log("Is Login Success: " + data); 

    window.location.reload();

});

  }


  constructor(private authService: AuthService) { }


}
