import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { IonSlides, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-s2c1',
  templateUrl: './s2c1.page.html',
  styleUrls: ['./s2c1.page.scss'],
})
export class S2c1Page implements OnInit {
  items: Observable<any[]>;
  itemsRef: AngularFireList<any>;
  selectedSlide: IonSlides;
  project_id: string;
  segment=0;
  constructor(public navCtrl: NavController,
    private db: AngularFireDatabase,
    private route: ActivatedRoute
    ) {
      this.project_id = this.route.snapshot.paramMap.get("project_id");
      console.log(this.project_id);
     }
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
    this.navCtrl.navigateForward(['/bank',{projectname:"โครงการ เกษตรตัวน้อยปันรักเพื่อน้อง"}]);
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
    this.itemsRef = this.db.list('/Projects');
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  
}
