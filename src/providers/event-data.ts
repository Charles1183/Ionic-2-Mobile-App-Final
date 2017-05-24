import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import * as firebase from 'firebase';

@Injectable()
export class EventData {

  constructor() {
  }

  getLimitedCategoryList(number): any {
    //return firebase.database().ref('/observations').limitToLast(number);//gets all observations
    return firebase.database().ref('/observations').orderByChild("activity").equalTo('NNK').limitToLast(number);//get only the NNK observations
  }

//Not implemented, is used to get the users form firebase for name retrieval
  getUserFromFirebase(uid){
    return firebase.database().ref('/users').equalTo(uid);
  }

}
