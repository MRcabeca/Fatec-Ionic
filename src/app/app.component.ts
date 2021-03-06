import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	rootPage:any = HomePage;

	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

		// firebase.initializeApp({
			//   apiKey: "AIzaSyBxPmlL0V90ip06DT-vWZSxX7bcofUNaBU",
			//   authDomain: "chamadapp.firebaseapp.com",
			//   databaseURL: "https://chatapp-3f829.firebaseio.com",
			//   projectId: "chamadapp",
			//   storageBucket: "chamadapp.appspot.com",
			//   messagingSenderId: "157465836336"
			// });

			firebase.initializeApp({
				apiKey: "AIzaSyCV1c_CTitRt-z_Kgr1YAsN_I0JK6g6iZM",
				authDomain: "chamadapp-1090481613026.firebaseapp.com",
				databaseURL: "https://chamadapp-1090481613026.firebaseio.com",
				projectId: "chamadapp-1090481613026",
				storageBucket: "chamadapp-1090481613026.appspot.com",
				messagingSenderId: "1040726306726"
			});



			platform.ready().then(() => {
				// Okay, so the platform is ready and our plugins are available.
				// Here you can do any higher level native things you might need.
				statusBar.styleDefault();
				splashScreen.hide();
			});
		}
	}

