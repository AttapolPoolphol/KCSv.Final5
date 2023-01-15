import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll, IonSlide, IonSlides, NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { AuthenticateService } from '../service/authentication.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
export interface Regis {
  name: string;
  birth: string;
  phone: string;
  email: string;
  pass: string;
}
@Component({
  selector: 'app-center',
  templateUrl: './center.page.html',
  styleUrls: ['./center.page.scss'],
})

export class CenterPage implements OnInit {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  username: string;
  userDoc: AngularFirestoreDocument<Regis[]>;
  user:Regis[] = [];
  id;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild('slides', { static: false }) slider: IonSlides;

  userDisplayName = '';
  selectedSlide: any;
  segment = 0;
  sliderOptions = {
    initialSlide: 0,
    slidesPerview: 1,
    speed: 400

  }
  email: string="";
  constructor(public navCtrl: NavController,
    private fireStore: AngularFirestore,
    private menu: MenuController,
    private route: ActivatedRoute,
    private authService: AuthenticateService,
    private db: AngularFireDatabase,
    private storage: Storage) {

      storage.get('email').then((val) => {
        this.email = val;
        this.userDoc = this.fireStore.collection('userProfile').doc(this.email);
        this.userDoc.valueChanges()
          .subscribe(data => {
            this.user = data;
            this.username = this.user["name"];
            
          });
      });

      //this.email = this.route.snapshot.paramMap.get('name');
  }

  async slideShanged(slides: IonSlides) {
    this.selectedSlide = slides;
    slides.getActiveIndex().then(selectedIndex => {
      this.segment = selectedIndex;
    })
  }
  async segmentChanged(ev) {
    await this.selectedSlide.slideTo(this.segment);
  }
  ngOnInit() {
    this.userDisplayName = sessionStorage.getItem('loggedUser');
    this.showData();
  }

  showData() {
    this.itemsRef = this.db.list('/Projects');

    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  goAccount() {
    this.navCtrl.navigateForward('/account');
  }

  onlogin() {
    this.navCtrl.navigateForward('/login');
  }

  goHome() {
    this.navCtrl.navigateForward('/center');
  }

  goTransfer() {
    this.navCtrl.navigateForward('/transfer');
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

  gos1c1(id) {
    this.id = id
    this.navCtrl.navigateForward(['/s1c1',{project_id : this.id}]);
    console.log(this.id);
  }

  gos2c1(id) {
    this.id = id
    this.navCtrl.navigateForward(['/s2c1',{project_id : this.id}]);
    console.log(this.id);
  }

  gos3c1(id) {
    this.id = id
    this.navCtrl.navigateForward(['/s3c1',{project_id : this.id}]);
    console.log(this.id);
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      if (CenterPage.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }
}

