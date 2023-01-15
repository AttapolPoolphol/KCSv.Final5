import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../service/authentication.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild("user") mUsername;
  @ViewChild("pass") mPass;
  public name: string;
  validations_form: FormGroup;
  errorMessage: string = '';
  controls: any;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      password: new FormControl('', Validators.compose([Validators.minLength(5),Validators.required]))
    });
  }
  onRegis() {
    this.navCtrl.navigateForward('/regis');
  }
  onForget() {
    this.navCtrl.navigateForward('/forget');
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'กรุณาใส่อีเมล์' },
      { type: 'pattern', message: 'โปรดระบุอีเมล์ให้ถูกต้อง' }
    ],
    'password': [
      { type: 'required', message: 'กรุณาใส่รหัสผ่าน' },
      { type: 'minlength', message: 'รหัสผ่านต้องมีอย่างน้อย 5 ตัวขึ้นไป' }
    ]
  };

  loginUser(value) {
    if (value.email == "admin@ku.th" && value.password == "123456") {
      this.navCtrl.navigateForward('/admin');
    }
    else {
      this.authService.loginUser(value)
        .then(res => {
          /*this.loadingController.create({
            message: 'Loading',
            duration: 300
          }).then((res) => {
            res.present();
          });*/
          console.log(res);
          this.errorMessage = "";
          this.navCtrl.navigateForward(['/center', { name: this.mUsername.value }]);
          console.log(this.mUsername.value);
        }, async err => {
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'เข้าสู่ระบบผิดพลาด',
            subHeader: '',
            message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
            buttons: ['OK']
          });

          await alert.present();
        })
    }
    this.storage.set('email', this.mUsername.value);
  }

  goForget() {
    this.navCtrl.navigateForward('/forget');
  }
}