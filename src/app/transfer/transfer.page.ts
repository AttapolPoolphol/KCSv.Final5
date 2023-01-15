import { Component, Input, ViewChild } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface MyData {
  filename: string;
  filepath: string;
  size: number;
  name: string;
  numberphone: string;
  email: string;
  AccountNumber: string;
  Volume: string;
  project: string;
  bank:string;
  ddate:string;
}
export interface Regis {
  name: string;
  birth: string;
  phone: string;
  email: string;
  pass: string;
}

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage {

  @ViewChild("NumBerOfBank") mBank;
  @ViewChild("Volume") mVolume;
  @ViewChild("tel") mTel;
  @ViewChild("Name") mName;
  @ViewChild("ddate") mDate;
  validations_form: FormGroup;
  errorMessage: string = '';
  controls: any;
  public data: FormGroup;

  bank:string;
  account: string;
  volume: string;

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  UploadedFileURL: Observable<string>;
  images: Observable<MyData[]>;
  fileName: string;
  fileSize: number;
  isUploading: boolean;
  isUploaded: boolean;

  OBank: string;
  Ovolume: string;
  telnum: string;
  NameC: string;
  Odate: string;

  UserName: string;
  NumberPhone: string;
  alert: string;
  bankac: string;
  ddate: string;
  private imageCollection: AngularFirestoreCollection<MyData>;

  imm: any;
  email: string;
  user: any = [];
  id: string;

  projectname: string
  public userDoc: AngularFirestoreDocument<Regis[]>;
  Otelnum: any;
  Oname: string;

  constructor(
    private storage: AngularFireStorage,
    private fireStore: AngularFirestore,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private emailstorage: Storage) {
    
    this.projectname = this.route.snapshot.paramMap.get("projectname");
    this.bank = this.route.snapshot.paramMap.get("bank");

    this.data = this.formBuilder.group({
      Pbank: ['', Validators.compose([Validators.minLength(4),Validators.required])],
      Pvolume: ['', Validators.required],
      Ptelnum: ['', Validators.required],
      Pname: ['', Validators.required],

    });

    this.projectname = this.route.snapshot.paramMap.get("projectname");
    console.log( this.projectname);
    emailstorage.get('email').then((val) => {
      this.email = val;
      this.userDoc = this.fireStore.collection('userProfile').doc(this.email);
      this.userDoc.valueChanges()
        .subscribe(data => {
          this.user = data;
          this.UserName = this.user.name,
            this.NumberPhone = this.user.phone,
            this.id = this.user.email;
        });
    });


    this.isUploading = false;
    this.isUploaded = false;
    //Set collection where our documents/ images info will save
    this.imageCollection = fireStore.collection<MyData>('slip');
    this.images = this.imageCollection.valueChanges();
  }

  choose(choose: FileList) {
    this.imm = choose.item(0);
  }
  uploadFile() {
    const file = this.imm;
    console.log(file);

    // Validation for Images Only
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ')
      return;
    }

    this.isUploading = true;
    this.isUploaded = false;
    this.fileName = file.name;

    this.OBank = this.mBank.value;
    this.Ovolume = this.mVolume.value;
    this.Otelnum = this.mTel.value;
    this.Oname = this.mName.value;
    this.Odate = this.mDate.value;
    // The storage path
    const path = `รูปภาพการโอนเงิน/${new Date().getTime()}_${file.name}`;
    const customMetadata = { app: 'Image' };
    const fileRef = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      finalize(() => {
        this.UploadedFileURL = fileRef.getDownloadURL();

        this.UploadedFileURL.subscribe(resp => {
          this.addImagetoDB({
            filename: file.name,
            filepath: resp,
            size: this.fileSize,
            email: this.user.email,
            name: this.Oname,
            numberphone: this.Otelnum,
            AccountNumber: this.OBank,
            Volume: this.Ovolume,
            project: this.projectname,
            bank: this.bank,
            ddate: this.Odate,
          });

          this.isUploading = false;
          this.isUploaded = true;
        }, error => {
          console.error(error);
          
        })
      }),
      tap(snap => {
        this.fileSize = snap.totalBytes;
      })
    )
  }

  addImagetoDB(image: MyData) {
    //Create an ID for document
    const id = this.fireStore.createId();
    this.imageCollection.doc(this.email).collection('ประวัติการโอน').doc(id).set(image).then(resp => {
    }).catch(error => {
      console.log("error " + error);
    });
  }

  goBack() {
    this.navCtrl.navigateBack(['/bank',{projectname:this.projectname}]);
  }
  goCenter(){
    this.navCtrl.navigateForward('/center');
  }
  
}
