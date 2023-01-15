import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-bank',
  templateUrl: './bank.page.html',
  styleUrls: ['./bank.page.scss'],
})
export class BankPage{
  copyp:string;
  pastt:string;
  projectname: string;



  constructor(public navCtrl: NavController, private route: ActivatedRoute,
    ) { 
      this.projectname = this.route.snapshot.paramMap.get("projectname");
    console.log(this.projectname);
    }


 
  goBack(){
    this.navCtrl.navigateBack('/center');
  }
  ScbBank(){
    this.navCtrl.navigateForward(['/transfer',{projectname:this.projectname,bank:'ไทยพาณิชย์'}]);
  }
  KBank(){
    this.navCtrl.navigateForward(['/transfer',{projectname:this.projectname,bank:'กสิกร'}]);
  }
}
