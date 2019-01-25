import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

var firebase = {
  apiKey: "AIzaSyC-si0D4MrPgfGqJtVPeRuyzXdChQJJkYI",
  authDomain: "ionic3firebase-chat.firebaseapp.com",
  databaseURL: "https://ionic3firebase-chat.firebaseio.com",
  projectId: "ionic3firebase-chat",
  storageBucket: "ionic3firebase-chat.appspot.com",
  messagingSenderId: "1057738630078"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabase
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
