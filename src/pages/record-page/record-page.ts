
//Imports for ionic functions, and native plugins
import { Component } from '@angular/core';
//Imports for page navigation and the alert popup.
import { NavController, NavParams, ViewController, AlertController, ModalController } from 'ionic-angular';
import { MediaPlugin, MediaObject } from '@ionic-native/media';

//Page Navigation imports
import { HomePage } from '../home/home';
import { HelpPage } from '../help/help';

@Component({
  selector: 'page-record-page',
  templateUrl: 'record-page.html'
})
export class RecordPagePage {

  //Global variable used to make recording controls simple.
  fileRecorded: MediaObject;
  
  //Injected variables needed for functionality
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
  	public viewCtrl: ViewController, 
    public alertCtrl: AlertController,
    private media: MediaPlugin,
    public modalCtrl: ModalController) {}

  /*alert function to pass error messages to the user as needed. 
    TODO: Add error handling with this function, it is not 
    currently being used. */
  showAlert(message){

    //create alert with message passed from function call
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: message,
      buttons: ['OK']
    })

    //Shows the alert
    alert.present();
  }

  //Takes the use back to the home Page
  home() {

    //Creates the home page and presents the page. 
    let home = this.modalCtrl.create(HomePage);
    home.present();
  }

  //Start record function, this creates the file in the temp folder
  recordAudio(){

    //This creates teh media file labeled record.wav. 
   /*this.media.create('record.wav')
   .then((file: MediaObject) => {

        //file is a temporary referance to the recored file
        file.startRecord();
        //the referance of the file object is passed to fileRecorded 
        //This is to be used to alow for global access to the funcitons of MediaObject
        this.fileRecorded = file;
      });*/

  }

  //Stop Recording fucntion
  stopRecord(){

    //uses built in stop record function 
    this.fileRecorded.stopRecord();
  }

  //Play audio fucntion
  playAudio(){ 

    //uses built in play function.
    this.fileRecorded.play()
  }

  //Stop playback button 
  stopAudio(){

    //uses built in stop function to stop playback
    this.fileRecorded.stop(); 
  }

  //Cancel button sends the user back to the upload photo page.
  cancel(){

    if(this.fileRecorded != null){
      this.fileRecorded.release(); //Deletes Recorded File
    }
    this.navCtrl.pop(); //Removes this page from the stack
    //taking the user back to the Upload page.

  }

  //Save fucntion. 
  save(){

    //This pops the page off the stack and passes the MediaObject 
    //Back to the upload page
    this.viewCtrl.dismiss(this.fileRecorded);
  }

  //Help page fucntion to take the user to the help Page
  help() {

    //this creates the help page and presetens the page. 
    let helpModal = this.modalCtrl.create(HelpPage);
    helpModal.present();
  }

}
