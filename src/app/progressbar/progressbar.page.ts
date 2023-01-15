import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.page.html',
  styleUrls: ['./progressbar.page.scss'],
})
export class ProgressbarPage implements OnInit {
  [x: string]: any;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  key: string;
  s1c1: string;
  s2c1: string;
  s2c2: string;
  s2c3: string;
  s3c1: string;
  s3c2: string;

  date1: string;
  date2: string;
  date3: string;
  date4: string;
  date5: string;
  date6: string;

  isToogle: boolean;
  isAdd: boolean;

  constructor(private db: AngularFireDatabase,private navCtrl: NavController,) { }

  ngOnInit() {
    this.isToogle = false;
    this.isAdd = true;
    this.s1c1= '';
    this.s2c1= '';
    this.s2c2= '';
    this.s2c3= '';
    this.s3c1= '';
    this.s3c2= '';

    this.date1 = new Date().toString();
    this.date2 = new Date().toString();
    this.date3 = new Date().toString();
    this.date4 = new Date().toString();
    this.date5 = new Date().toString();
    this.date6 = new Date().toString();

    this.showData();
  }

  // แสดงข้อมูลทั้งหมดจากฐานข้อมูล
  showData() {
    this.itemsRef = this.db.list('/');
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    //console.log(this.items);
  }

  // เลือก item พร้อมทั้งกำหนดค่าให้กับ input ฟอร์ม และเก็บ key ไว้ด้วยสำหรับการแก้ไข
  select(item: any) {
    // console.log(item);
    this.s1c1 = item.note.s1c1;
    this.s2c1 = item.note.s2c1;
    this.s2c2 = item.note.s2c2;
    this.s2c3 = item.note.s2c3;
    this.s3c1 = item.note.s3c1;
    this.s3c2 = item.note.s3c2;

    this.date1 = item.note.date1;
    this.date2 = item.note.date2;
    this.date3 = item.note.date3;
    this.date4 = item.note.date4;
    this.date5 = item.note.date5;
    this.date6 = item.note.date6;

    this.key = item.key;
    this.isToogle = !this.isToogle;
    this.isAdd = false;
  }

  // บันทึกข้อมูล เพิ่ม หรือ แก้ไข
  save(note: any) {
    console.log(note.topic);
    if (this.isAdd === true) {
      this.itemsRef.push({ note });
      this.isToogle = false;
    } else {
      if (this.key) {
        this.itemsRef.update(this.key, { note });
      }
      this.isAdd = false;
      this.isToogle = false;
    }

  }

  // ลบข้อมูลแต่ละรายการตาม key ที่เลือก
  /*delete(item: any) {
    this.itemsRef.remove(item.key);
    this.isToogle = false;

  }*/

  // เป็น method ที่มีไว้ซ่อนหรือแสดงฟอร์ม
  openForm() {
    this.isToogle = !this.isToogle;
    this.isAdd = true;
  }
  admin(){
    this.navCtrl.navigateForward('/admin');
  }


}