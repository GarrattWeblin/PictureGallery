import { Component } from '@angular/core';
import { FileUpload, FileUploadService } from '../services/file-upload.service';
import { Observable, map } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database'

export interface Image {
  id: string;
  name: string;
  description: string;
  image: string;
  isHovered: boolean;

  
}

@Component({
  selector: 'app-image-table',
  templateUrl: './image-table.component.html',
  styleUrls: ['./image-table.component.scss']
})
export class ImageTableComponent { 

  images: Image[] = []
  fileUploads?: any[];

  defaultElevation = 2;
  raisedElevation = 8;

  items: Observable<any[]>;

  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum lectus leo. Ut dictum dapibus est, quis cursus tortor pretium non. Aenean dictum mauris augue, vitae lacinia tortor ultrices a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Cras sit amet mattis ex. Nulla fringilla tortor consequat, egestas ipsum a, eleifend sapien. Fusce vehicula commodo diam, at lobortis sem viverra ut. Sed placerat nibh sit amet tellus facilisis commodo. Suspendisse eget felis vel ex iaculis congue eget a elit. Fusce pulvinar dolor eget risus porta mollis.";

  constructor( private uploadService: FileUploadService, db: AngularFireDatabase) {

    this.items = db.list('Miniatures').valueChanges();

    this.items.subscribe(e => {
      console.log(e);

      this.images = [];

      e.forEach((d: FileUpload) => {
        this.images.push({id: "", description: d.desc, image: d.url, name: d.name, isHovered: false})
      })
    
    });

  } 


  ngOnInit(): void {

    // this.uploadService.getFiles(6).snapshotChanges().pipe(
    //   map(changes =>
    //     // store the key
    //     changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    //   )
    // ).subscribe(fileUploads => {
    //   this.fileUploads = fileUploads;
    //   console.log(this.fileUploads);
    // });

    
  }


}
