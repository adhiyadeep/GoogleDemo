import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import firebase from 'firebase';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

export const firebaseconfig ={
    apiKey: "AIzaSyDc4rrIzrgxPd-SGL4TJwPt50-xM5gDcWc",
    authDomain: "goodaye-customer.firebaseapp.com",
    databaseURL: "https://goodaye-customer.firebaseio.com",
    projectId: "goodaye-customer",
    storageBucket: "goodaye-customer.appspot.com",
    messagingSenderId: "1055286123790"
}
firebase.initializeApp(firebaseconfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),AngularFireModule.initializeApp(firebaseconfig),AngularFireAuthModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},GooglePlus
  ]
})
export class AppModule {
  
}

