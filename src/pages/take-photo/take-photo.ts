
//Imports for Cordova and native Ionic fuctions
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

//Page Imports for Navigation
import { Camera } from 'ionic-native';
import { HomePage } from '../home/home';
import { UploadPhotoPage } from '../upload-photo/upload-photo';
import { HelpPage } from '../help/help';


@Component({
  selector: 'page-take-photo',
  templateUrl: 'take-photo.html'
})
export class TakePhotoPage {

  //Varible that holds the photo data.
  public base64Image: string;

  //
  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public modalCtrl: ModalController) {}

  //function to take the user back to the home page
  home(){

    //pops this page from the stack since this page is only used from the
    //home page. 
    this.navCtrl.pop();
  }

  //Fuction to let the user take a photo when the photo 
  //button is clicked
  takePhoto(){
    //Camera function that uses the device camra to take a photo 
    /*Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
      //stores the photo in a varable to pass the information to the 
      //next page.
      let photoInfo = this.base64Image;
      //creates the next page and loads the page
      let uploadPhoto = this.modalCtrl.create(UploadPhotoPage, {photo: photoInfo});
      uploadPhoto.present();
    }, (err) => {
      console.log(err);
    });*/

    let uploadPhoto = this.modalCtrl.create(UploadPhotoPage);
    uploadPhoto.present();

  }

  //lets the user pick a photo from there gallery or photo library
  choosePhoto(){
   //Camera function that pulls a photo from the device library.  
   
   
   Camera.getPicture({
     //photo options, more options avalible if needed
     sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: Camera.DestinationType.DATA_URL
    }).then((imageData) => {
      //stores the photo into the base64Image varable 
      this.base64Image = 'data:image/jpeg;base64,'+ imageData;
      //stores the photo in a varable to pass the information to the 
      //next page.
      let photoInfo = this.base64Image;
      //creates the next page and loads the page
      let uploadPhoto = this.modalCtrl.create(UploadPhotoPage, {photo: photoInfo});
      uploadPhoto.present();
     }, (err) => {
       //Logs any errors the error can be sent to an alert if needed. 
      console.log(err);
    });


  }

  //This function creates the help page 
  help() {

    //creates the help page and presents it. 
    let helpModal = this.modalCtrl.create(HelpPage);
    helpModal.present();
  }

}
