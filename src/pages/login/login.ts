//Default import from page creations
import { Component } from '@angular/core';
//imports for navigation control
import { NavController, ModalController } from 'ionic-angular';
//added AuthProvider used for login functions
import { AuthProvider } from '../../providers/auth-provider'; 
//Angular form builder
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
//Pages imported for page navigation
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { HelpPage } from '../help/help';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  //global variables to store information 
  loginForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  error: any;

  //constructor for variable injection needed for navigation and AuthProvider
  constructor(public navCtrl: NavController, 
  	public modalCtrl: ModalController,
  	private forumBld: FormBuilder,
  	public auth: AuthProvider) {

  	 this.loginForm = this.forumBld.group({  
            'email': ['', Validators.compose([Validators.required, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });
  
        this.email = this.loginForm.controls['email'];     
        this.password = this.loginForm.controls['password'];     
  }

  login(): void { 
    if(this.loginForm.valid) {
        var credentials = ({email: this.email.value, password: this.password.value}); //Added next lines
          this.auth.loginWithEmail(credentials).subscribe(data => { 
             //Displays in browser message for login succussful and then goes to home page
             if (data)
              {
                alert('Login Successful!!!');
                this.navCtrl.setRoot(HomePage);
               // let homeModal = this.modalCtrl.create(HomePage);
               // homeModal.present();
              }
            }, error=>{             //Added next lines for handling unknown users
            if (error.code == 'auth/user-not-found'){ alert('User Not Found'); }//user not found
            if (error.code == 'auth/wrong-password'){ alert('Incorrect Password'); }//incorrect password
          });
    }else{
      alert("You must fillout all the fields correctly to login.");
    }

}

  //when called takes the user to the signup page
  goToSignup(){

    //creates the modal and presents the page
    let signupModal = this.modalCtrl.create(SignupPage);
    signupModal.present();
  }

  //When called function takes the user to the home page 
  home(){

    //crates the modal and presents the page
    this.navCtrl.setRoot(HomePage);
    //let homeModal = this.modalCtrl.create(HomePage);
    //homeModal.present();
  }

  //Default function that logs the page load information 
  //Not needed for the app to function, was left for error tracing
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //when this funtion is called the user is taken to the help page
  help() {

    //the modal is created and presented 
    let helpModal = this.modalCtrl.create(HelpPage);
    helpModal.present();
  }

}
