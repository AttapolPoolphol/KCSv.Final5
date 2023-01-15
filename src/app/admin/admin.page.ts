import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface MyData {
  name: string;
  filepath: string;
  size: number;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})

export class AdminPage {

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  UploadedFileURL: Observable<string>;
  slip: Observable<MyData[]>;
  fileName: string;
  fileSize: number;

  isUploading: boolean;
  isUploaded: boolean;

  private imageCollection: AngularFirestoreCollection<MyData>;
  constructor(private storage: AngularFireStorage, public navCtrl: NavController, private fireStore: AngularFirestore) {
    this.isUploading = false;
    this.isUploaded = false;
    //Set collection where our documents/ images info will save
    this.imageCollection = fireStore.collection<MyData>('slip').doc('tairat.n@ku.th').collection('ประวัติการโอน');
    this.slip = this.imageCollection.valueChanges();
  }

  progressbar(){
    this.navCtrl.navigateForward('/progressbar');
  }
  

}
