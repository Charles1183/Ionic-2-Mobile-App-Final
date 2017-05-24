
//Default import from Ionic page generation 
import { Component } from '@angular/core';
//Import needed for navigation controls.
import { NavController, ModalController, NavParams } from 'ionic-angular';
//added AuthProvider, needed for logout function
import { AuthProvider } from '../../providers/auth-provider';
//Page imports needed for navigation
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})

export class SettingsPage {

  //Constructor that create variables need for navigation and AuthProvider
  //all variables are injected with the constructor. 
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public auth: AuthProvider) {}

    //Page load log function, not needed for the app to function
  //left for error detection if needed.
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  //login function that take the user to the login and register page.
  goToLogin() {

    //Creates the modal view and presents the modal.
    let loginModal = this.modalCtrl.create(LoginPage);
    loginModal.present();
  }

  //function that is called to take the user back to the home page.
  //Settings page is only accessable from the home page. the home
  //button calls this same function to pop the settings page off the stack
  close() {

    //pops the settings page off the stack.
    this.navCtrl.pop();
  }

  //this function is called to log the user out
  logout(): void {

    //uses the authProvider logout funciton to log the user out.
    this.auth.logout();
    alert('User logged out');
    this.navCtrl.pop();
    
  }

}
