import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { Subject } from "rxjs/Subject";

import { EventData } from '../../providers/event-data';
import { HomePage } from '../home/home';
import { DetailObservationPage } from '../detail-observation/detail-observation';
import { HelpPage } from '../help/help';

//Angulrfire imports
import { AngularFire, FirebaseListObservable } from 'angularfire2';

//Cloudinary
import { CloudinaryModule } from '@cloudinary/angular';
import * as cloudinary from 'cloudinary';


@Component({
  selector: 'page-observations',
  templateUrl: 'observations.html'
})
export class ObservationsPage {

 public b: number=0;
 public observationsList: any[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private angFire: AngularFire,
    private loadingCtrl: LoadingController,
    public eventData: EventData) {
      
    //This function loads five observations at a time from firebase
    this.loadMoreObservations();

  }

      loadMoreObservations(){
        this.b+=3
         this.eventData.getLimitedCategoryList(this.b).on('value', snapshot => {
          let rawList1 = [];
          snapshot.forEach(snap => {
            //console.log("SNAP!! ",this.eventData.getUserFromFirebase(snap.val().observer));
            rawList1.unshift({
              text: snap.val().data.text,
              image_url: snap.val().data.image,
            });
          });
          this.observationsList = rawList1;
        });
      }


  doInfinite(infiniteScroll) {
    //console.log('Begin async operation');

    setTimeout(() => {
      this.loadMoreObservations();
      //console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 200);
  }

  viewSelectedObservation(observation){
    this.navCtrl.push(DetailObservationPage, {observation: observation});
  }

  home(){
    this.navCtrl.setRoot(HomePage);

  }

  help() {
    let helpModal = this.modalCtrl.create(HelpPage);
    helpModal.present();
  }

}
