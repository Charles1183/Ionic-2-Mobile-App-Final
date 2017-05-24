//Default import from ionic page creation
import { Component } from '@angular/core';
//imports needed for page navigation.
import { NavController , ModalController, NavParams} from 'ionic-angular';
//Page imports needed for navigation 
import { TakePhotoPage } from '../take-photo/take-photo';
import { ObservationsPage } from '../observations/observations';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { SettingsPage } from '../settings/settings';
import { HelpPage } from '../help/help';
//added AuthProvider for login and account verification. 
import { AuthProvider } from '../../providers/auth-provider'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 //Consturctor injects all the veriables needed for app functionality. 
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController, 
    public navPrm: NavParams, 
    public auth: AuthProvider) {}
  
    //function that is called when the user clickes the add picture buttom
    takePhotoPage(){

      //checks to see if a user is logged in before the user can add a photo
      if(this.auth.currentUser!=''){
        //if the current user is not empty the user is sent to the take photos page
        //the modal is created and presented
        let photoModal = this.modalCtrl.create(TakePhotoPage);
        photoModal.present();
      }else{
        //if a user is not logged in the user is sent to the login page
        //the modal is created and presented. 
        let loginModal = this.modalCtrl.create(LoginPage);
        loginModal.present();
      }
    }

    //function that is called to take the user to the view observations page
    seeProjects(){

      //the modal is created and then presented. 
      let observationsModal = this.modalCtrl.create(ObservationsPage);
      observationsModal.present();

    } 

    //the fucntion that is called when the user needs to signup. 
    //this function may not be needed in this file.
    goToSignup(){

      //modal is created and presented.
      let signupModal = this.modalCtrl.create(SignupPage);
      signupModal.present();
    }

    //the function that is called when the user clicks the settings button
    settings(){

      //creates the modal then presents it
      let settingsModal = this.modalCtrl.create(SettingsPage);
      settingsModal.present()
    }

    //the function that is called when the user selects the help buttom 
    help(){

      //creates the modal and presents it. 
      let helpModal = this.modalCtrl.create(HelpPage);
      helpModal.present();
    }

}
