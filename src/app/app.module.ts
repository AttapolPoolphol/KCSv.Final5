import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage'

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SuperTabsModule } from '@ionic-super-tabs/angular';




export const config = {
  apiKey: "AIzaSyDAmC5P4Yz1AA1fsZs_vkFmOvkkRoU2u7Y",
    authDomain: "kcs-database.firebaseapp.com",
    databaseURL: "https://kcs-database.firebaseio.com",
    projectId: "kcs-database",
    storageBucket: "kcs-database.appspot.com",
    messagingSenderId: "942140079361",
    appId: "1:942140079361:web:d06709c7bafe9440c2ef00",
    measurementId: "G-63XXEQFVS1"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    SuperTabsModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
