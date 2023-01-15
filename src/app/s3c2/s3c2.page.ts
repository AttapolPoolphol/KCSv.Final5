import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { IonSlides, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-s3c2',
  templateUrl: './s3c2.page.html',
  styleUrls: ['./s3c2.page.scss'],
})
export class S3c2Page implements OnInit {
  items: Observable<any[]>;
  itemsRef: AngularFireList<any>;
  selectedSlide: IonSlides;
  segment=0;
  constructor(public navCtrl: NavController,
    private db: AngularFireDatabase
    ) { }
    async slideShanged(slides : IonSlides){
      this.selectedSlide = slides;
      slides.getActiveIndex().then(selectedIndex => {
        this.segment = selectedIndex;
      })
    }
    async segmentChanged(ev) {
      await this.selectedSlide.slideTo(this.segment);
    }
   
    ngOnInit() {
      this.showData();
    }

  goTransfer() {
    this.navCtrl.navigateForward(['/bank',{projectname:"โครงการห้องนอนอุปถัมภ์"}]);
  }

  option= {
    slidesPerView : 1.25,
    centeredSlides: true,
    loop : true,
    spaceBetween: 10,
    autoplay:true
  
  }

  goBack(){
    this.navCtrl.navigateBack('/center');
  }
  
  showData() {
    this.itemsRef = this.db.list('/');

    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  
  

}
