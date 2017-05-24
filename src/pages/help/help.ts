
//Default import for Ionic.
import { Component } from '@angular/core';
//Imports needed for navigation controls.
import { NavController, NavParams, ModalController } from 'ionic-angular';

//Page Imports needed to navigate to different pages. 
import { HomePage } from '../home/home';

@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class HelpPage {

  //Constructor that generates variables needed for navigation.
  constructor(public navCtrl: NavController, public navParams: NavParams,
        public modalCtrl: ModalController) {}

  //Page load log function, not needed for the app to function
  //left for error detection if needed.
  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

  //Close function that dimisses the current page by popping it off the stack.
  close(){
    //pops the current page off the stack takeing the user back to the previous page.
    this.navCtrl.pop();
  }

  //Home function that sends the user back to the home page
  home(){

    //Creates the modal and presents the page.
    let homeModel = this.modalCtrl.create(HomePage);
    homeModel.present();
  }

}
