import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

export interface Regis {
  name: string;
  birth: string;
  phone: string;
  email: string;
  pass: string;
}
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {

  user:Regis[] = [];
  userDoc: AngularFirestoreDocument<Regis[]>;

  email: string;

  username: string;
  phone: string;
  birth: string;
  Nemail: string;

  constructor(private fireStore: AngularFirestore,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private storage: Storage) {
    storage.get('email').then((val) => {
      this.email = val;
      console.log('Your email =', this.email);
      this.userDoc = this.fireStore.collection('userProfile').doc(this.email);
      this.userDoc.valueChanges()
        .subscribe(data => {
          this.user = data;
          this.username = this.user["name"];
          this.phone = this.user["phone"];
          this.birth = this.user["birth"];
          this.Nemail = this.user["email"];
        });
    });
  }
  edit() {
    this.navCtrl.navigateRoot('/editpro');
  }
  goback() {
    this.navCtrl.navigateBack('/center');
  }
}
