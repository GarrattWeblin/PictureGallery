import { Injectable } from '@angular/core';

import { Observable, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private basePath = '/Miniatures';

  // constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  // pushFileToStorage(fileUpload: FileUpload): Observable<number | undefined> {
  //   const filePath = `${this.basePath}/${fileUpload.file.name}`;
  //   const storageRef = this.storage.ref(filePath);
  //   const uploadTask = this.storage.upload(filePath, fileUpload.file);

  //   uploadTask.snapshotChanges().pipe(
  //     finalize(() => {
  //       storageRef.getDownloadURL().subscribe(downloadURL => {
  //         fileUpload.url = downloadURL;
  //         fileUpload.name = fileUpload.file.name;
  //         this.saveFileData(fileUpload);
  //       });
  //     })
  //   ).subscribe();

  //   return uploadTask.percentageChanges();
  // }

  // private saveFileData(fileUpload: FileUpload): void {
  //   this.db.list(this.basePath).push(fileUpload);
  // }

  // getFiles(numberItems: number): AngularFireList<FileUpload> {

  //   return this.db.list(this.basePath, ref =>
  //     ref.limitToLast(numberItems));
  // }

  // deleteFile(fileUpload: FileUpload): void {
  //   this.deleteFileDatabase(fileUpload.key)
  //     .then(() => {
  //       this.deleteFileStorage(fileUpload.name);
  //     })
  //     .catch(error => console.log(error));
  // }

  // private deleteFileDatabase(key: string): Promise<void> {
  //   return this.db.list(this.basePath).remove(key);
  // }

  // private deleteFileStorage(name: string): void {
  //   const storageRef = this.storage.ref(this.basePath);
  //   storageRef.child(name).delete();
  // }
}

export class FileUpload {
  key!: string;
  name!: string;
  url!: string;
  file: File;

  constructor(file: File) {
    this.file = file;
  }
}