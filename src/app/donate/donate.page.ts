import { Component, NgModule, VERSION } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Storage } from '@ionic/storage';

export interface MyData {
  name: string;
  filepath: string;
  size: number;
}
@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage {

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  UploadedFileURL: Observable<string>;
  slip: Observable<MyData[]>;
  fileName: string;
  fileSize: number;

  isUploading: boolean;
  isUploaded: boolean;

  email: string;
  

  private imageCollection: AngularFirestoreCollection<MyData>;
  constructor(public navCtrl: NavController, private fireStore: AngularFirestore, private storage: Storage) {

    this.isUploading = false;
    this.isUploaded = false;
    //Set collection where our documents/ images info will save
    storage.get('email').then((val) => {
      this.email = val;
      this.imageCollection = fireStore.collection<MyData>('slip').doc(this.email).collection('ประวัติการโอน');
      this.slip = this.imageCollection.valueChanges();
    });
    
    

  }
  goback() {
    this.navCtrl.navigateBack('/center');
  }
  goSlip(){
    this.navCtrl.navigateForward('/slip')
  }
}
