import { Component, OnInit, resolveForwardRef, ViewChild } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AuthenticateService } from '../service/authentication.service';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';



export interface Regis {
  name: string;
  birth: string;
  phone: string;
  email: string;
  pass: string;
}
@Component({
  selector: 'app-regis',
  templateUrl: './regis.page.html',
  styleUrls: ['./regis.page.scss'],
})
export class RegisPage {

  public user: FormGroup
  public regis: FormGroup
  Email:string;
  Password:string;

  @ViewChild("Rname") Rname;
  @ViewChild("Rbirth") Rbirth;
  @ViewChild("Rphone") Rphone;
  @ViewChild("Remail") Remail;
  @ViewChild("Rpass") Rpass;

  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';



  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    public alertController: AlertController,
    private fireStore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {
    this.user = this.formBuilder.group({
      Cname: ['', [Validators.required]],
      Cbirth: ['', [Validators.required]],
      Cphone: ['', [Validators.required]],
      Cemail: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      Cpassword: ['', [Validators.required,Validators.minLength(5)]]
    });
  }
  
  tryRegister(value) {
    console.log(value);
    this.authService.registerUser(value)
      .then(async res => {
        console.log(res);
        this.errorMessage = "";
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'สมัครสมาชิกสำเร็จ',
          subHeader: '',
          message: 'สมัครสมาชิกเสร็จสิ้น โปรดเข้าสู่ระบบ',
          buttons: ['OK']
        });
        await alert.present();
        //this.SentData();
      }, async err => {
        console.log(err);
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'อีเมล์นี้เป็นสมาชิกอยู่แล้ว',
          subHeader: '',
          message: 'โปรดเปลี่ยนอีเมล์ หรือหากลืมรหัสผ่าน โปรดกดลืมรหัสผ่าน',
          buttons: ['OK']
        });
        await alert.present();
        this.successMessage = '';
      })
      console.log(this.user);
  }
  
  goLoginPage() {
    this.navCtrl.navigateBack('');
  }
  
  SentData() {
    this.fireStore.collection("userProfile").doc(this.Remail.value).set({
      name: this.Rname.value,
      birth: this.Rbirth.value,
      phone: this.Rphone.value,
      email: this.Remail.value,
      pass: this.Rpass.value
      // Other info you want to add here
    });
    return new Promise<any>(async (resolve, reject) => {

      this.afAuth.createUserWithEmailAndPassword(this.Remail.value, this.Rpass.value)
        .then(
          async res => {
            console.log(res);
            this.errorMessage = "";
            const alert = await this.alertController.create({
              cssClass: 'my-custom-class',
              header: 'สมัครสมาชิกสำเร็จ',
              subHeader: '',
              message: 'สมัครสมาชิกเสร็จสิ้น โปรดเข้าสู่ระบบ',
              buttons: ['OK']
            });
            firebase.auth().currentUser.sendEmailVerification();
            await alert.present();
            //this.SentData();
          },
          async err => {
            console.log(err);
            const alert = await this.alertController.create({
              cssClass: 'my-custom-class',
              header: 'อีเมล์นี้เป็นสมาชิกอยู่แล้ว',
              subHeader: '',
              message: 'โปรดเปลี่ยนอีเมล์ หรือหากลืมรหัสผ่าน โปรดกดลืมรหัสผ่าน',
              buttons: ['OK']
            });
            await alert.present();
            this.successMessage = '';
          })
    })
  }
}