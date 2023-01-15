import { Component } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticateService } from './service/authentication.service';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticateService,
    private navCtrl : NavController,
    private menu: MenuController
  ) {
    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logoutUser() { 
      if (this.authService.logoutUser) {
        this.authService.logoutUser()
          .then(() => {
            console.log("LOG Out");
            this.navCtrl.navigateForward('/home');
          }).catch((error) => {
            
          });
      }
    
  }

  goAccount(){
    this.navCtrl.navigateForward('\account');
  }

  goDonate(){
    this.navCtrl.navigateForward('\donate');
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  goInfo(){
    this.navCtrl.navigateForward('/info');
  }

  edit(){
    this.navCtrl.navigateForward('/editpro');
  }

}
