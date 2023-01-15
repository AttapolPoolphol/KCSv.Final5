import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})

export class ForgetPage  {
  @ViewChild("email") mEmail;
  error = '';
 

  constructor(
    private navCtrl: NavController,
    private fireauth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) { }


  async openLoader() {
    const loading = await this.loadingController.create({
      message: 'Please Wait ...',
      duration: 2000
    });
    await loading.present();
  }
  async closeLoading() {
    return await this.loadingController.dismiss();
  }

  recover() {
    console.log(this.mEmail.value);
    this.fireauth.sendPasswordResetEmail(this.mEmail.value)
      .then(data => {
        this.presentToast('Password reset email sent',  'bottom', 1000); // this is toastController
        //this.router.navigateByUrl('/login');
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
  }

  async presentToast(message, position, duration) {
    const toast = await this.toastController.create({
      message,
      duration,
      position
    });
    toast.present();
  }

  y(){
    this.router.navigateByUrl(this.mEmail.value);
  }

  back(){
    this.navCtrl.navigateBack('/home');
  }

}
