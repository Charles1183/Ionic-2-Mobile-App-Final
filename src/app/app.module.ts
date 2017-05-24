import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//Angularfire module imports
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { AngularFireModule } from 'angularfire2';
//Added AuthProvider
import { AuthProvider} from '../providers/auth-provider';
import { EventData } from '../providers/event-data';
//Pages
import { HomePage } from '../pages/home/home';
import { TakePhotoPage } from '../pages/take-photo/take-photo';
import { UploadPhotoPage } from '../pages/upload-photo/upload-photo';
import { ObservationsPage } from '../pages/observations/observations';
import { LoginPage } from '../pages/login/login';
import { RecordPagePage } from '../pages/record-page/record-page';
import { SignupPage } from '../pages/signup/signup';
import { SettingsPage } from '../pages/settings/settings';
import { HelpPage } from '../pages/help/help';
import { DetailObservationPage } from '../pages/detail-observation/detail-observation';
import { AddTextPage } from '../pages/add-text/add-text';
//Cloudinary
import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular';
import * as cloudinary from 'cloudinary';
//Media plugin
import { MediaPlugin, MediaObject } from '@ionic-native/media';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'aafebad1'
  }
};

export const firebaseConfig ={
    //apiKey info for the testing database
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};

//EXAMPLE config code
cloudinary.config({
  cloud_name: '',
  api_key: '',
  api_secret: ''
});

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TakePhotoPage,
    UploadPhotoPage,
    ObservationsPage,
    LoginPage,
    RecordPagePage,
    SignupPage,
    DetailObservationPage,
    SettingsPage,
    HelpPage,
    AddTextPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
     //Initailizing the firebase using theconst variable above
    AngularFireModule.initializeApp(firebaseConfig),
     CloudinaryModule.forRoot({cloudinary}, { cloud_name: 'testnet' } as CloudinaryConfiguration),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TakePhotoPage,
    UploadPhotoPage,
    ObservationsPage,
    LoginPage,
    RecordPagePage,
    SignupPage,
    DetailObservationPage,
    SettingsPage,
    HelpPage,
    AddTextPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthProvider, EventData, MediaPlugin]
})
export class AppModule {}
