import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GooglePlus]
})
export class HomePage {

  constructor(public navCtrl: NavController, private googlePlus: GooglePlus,
    public afAuth: AngularFireAuth,private fb: Facebook) {

  }

  login() {

    this.googlePlus.login({})
     .then(res => {
      
        alert(res.displayName);
        alert(res.familyName);
        alert(res.userId);
        alert(res.email);

     })
     .catch(err => console.error(err));

 }

 fbLogin()
{
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider)
    .then(res =>{
      console.log(res);
    }, err=>{
      console.log(err);
    })

   

}

}
