import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth-provider';
import { HomePage } from '../home/home';
import { HelpPage } from '../help/help';
//Firebase import for uploading user sign id
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';
 
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signupForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  error: any;
 
  constructor(public navCtrl: NavController, 
    public modalCtrl: ModalController, 
    private forumBld: FormBuilder, 
    private auth: AuthProvider,
    angFire: AngularFire)
  {
    this.signupForm = this.forumBld.group({  
      'email': ['', Validators.compose([Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  
    this.email = this.signupForm.controls['email'];     
    this.password = this.signupForm.controls['password'];
  }
 
  submit(): void { 
    if(this.signupForm.valid) {
        var credentials = ({email: this.email.value, password: this.password.value});
        this.auth.registerUser(credentials).subscribe(registerData => {
            alert('You are registered and logged in.');
            this.navCtrl.setRoot(HomePage);
        }, registerError => {
          if (registerError.code === 'auth/weak-password' || registerError.code === 'auth/email-already-in-use')
          {
            alert(registerError.message);
          }
          this.error = registerError;
        });
    }else{
      alert("You must fillout all the fields correctly to signup.");
    }
  }

  home(){
  this.navCtrl.setRoot(HomePage);
  //let homeModal = this.modalCtrl.create(HomePage);
  //homeModal.present();
  } 

  help() {
    let helpModal = this.modalCtrl.create(HelpPage);
    helpModal.present();
  }
}
