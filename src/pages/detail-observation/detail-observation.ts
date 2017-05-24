
//Ionic base imports for Ionic compenets
import { Component } from '@angular/core';
//Navigation control imports. 
import { NavController, NavParams, ModalController } from 'ionic-angular';

//Page imports needed for navigation. 
import { HomePage } from '../home/home';
import { HelpPage } from '../help/help';

@Component({
  selector: 'page-detail-observation',
  templateUrl: 'detail-observation.html'
})
export class DetailObservationPage {

  //Global variable that is used to hold the observation information that is passed.
  observation: any;

  //Construtor that has all Navigation variables needed. 
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    
    //This catches the information that is passed from the Observations page. 
    this.observation = navParams.get('observation');
  }

  //Function tht is caled when the home button is selected from the Nav Bar.
  //Sends the user back to the main home page
  home(){
    this.navCtrl.setRoot(HomePage);
  }

  //Default function that is added when the page is made that logs the page load logs.
  //This function is not needed for the app to work. Left for error detection
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailObservationPage');
  }

  //Function that is called when the Help button is selected from the Nav bar
  //Shows the user the defalt help page. 
  //Need to add dynamic help information that is relivant to this page.
  help() {
    let helpModal = this.modalCtrl.create(HelpPage);
    helpModal.present();
  }

}
