import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AuthenticateService } from '../service/authentication.service';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { Storage } from '@ionic/storage';
import { title } from 'process';

export interface Regis {
  name: string;
  birth: string;
  phone: string;
  email: string;
  pass: string;
}
@Component({
  selector: 'app-editpro',
  templateUrl: './editpro.page.html',
  styleUrls: ['./editpro.page.scss'],
})
export class EditproPage {

  public user: FormGroup;

  @ViewChild("Rname") Rname;
  @ViewChild("Rbirth") Rbirth;
  @ViewChild("Rphone") Rphone;

  email: string = "";

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    public alertController: AlertController,
    private fireStore: AngularFirestore,
    private storage: Storage,
  ) {
    this.user = this.formBuilder.group({
      Cname: ['', Validators.required],
      Cbirth: ['', Validators.required],
      Cphone: ['', Validators.required],
    });

    storage.get('email').then((val) => {
      this.email = val;
      console.log('Your email =', this.email);
    });
  }

  goLoginPage() {
    this.navCtrl.navigateBack('');
  }

  SentData() {
    this.fireStore.collection("userProfile").doc(this.email).update({
      name: this.Rname.value,
      birth: this.Rbirth.value,
      phone: this.Rphone.value,
      // Other info you want to add here
    });
    this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'เปลี่ยนแปลงข้อมูลสำเร็จ',
      buttons: ['ok']
    }).then(res => {
      res.present();
    });
  }

  goback() {
    this.navCtrl.navigateBack('/center');
  }
}