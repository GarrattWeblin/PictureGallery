
import { Component } from '@angular/core';
import { trigger, transition, animate, style, state } from "@angular/animations";
import { AuthService } from '../auth.service';
import { FileUpload, FileUploadService } from '../services/file-upload.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-miniature-portfolio',
  templateUrl: './miniature-portfolio.component.html',
  styleUrls: ['./miniature-portfolio.component.scss'],
  animations: [
    trigger('visibleHidden', [
      state(
        'visible',
        style({
          transform: 'translate(0%, 0%) scale(1)',
          opacity: 1,
        })
      ),
      state(
        'void, hidden',
        style({
          transform: 'translate(0%, 0%) scale(0.8)',
          opacity: 0,
        })
      ),
      transition('* => visible', animate('100ms')),
      transition('* => void, * => hidden', animate('100ms'))
    ]),
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(225deg)' })),
      transition('rotated => default', animate('200ms')),
      transition('default => rotated', animate('200ms'))
    ])
  ]
})
export class MiniaturePortfolioComponent {

  menuExpanded = false;
  fileName : string = '';
  state: string = 'default';

  currentFileUpload: FileUpload | undefined;

  percentage = 0;
  isUserLoggedIn = false;

  desc = "";
  title = "";

  constructor(private authService: AuthService, private uploadService: FileUploadService, private db: AngularFireDatabase) {}

  ngOnInit() {
    let storeData = localStorage.getItem("isUserLoggedIn");
    console.log("StoreData: " + storeData);

    if( storeData != null && storeData == "true")
       this.isUserLoggedIn = true;
    else
       this.isUserLoggedIn = false;
 }

  uploadClicked() {

    this.menuExpanded = !this.menuExpanded;
    this.state = (this.state === 'default' ? 'rotated' : 'default');
    console.log(this.menuExpanded);

  }

  upload(event:Event){

    const element = event.currentTarget as HTMLInputElement;

    this.fileName = element.files?.item(0)?.name!;
    
    this.currentFileUpload = new FileUpload(element.files?.item(0)!, this.title, this.desc);



 }

 uploadToDatabase() {
    this.uploadService.pushFileToStorage(this.currentFileUpload!).subscribe({
        
      next: (percentage) => this.percentage = Math.round(percentage ? percentage : 0),
      error: ((e) => console.error(e))

    });

    console.log("Upload");
 }

 

}
