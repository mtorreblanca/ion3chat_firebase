import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  username: string = '';
  message: string = '';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public db: AngularFireDatabase,
    ) {
    this.username = this.navParams.get('username');
  }

  ionViewDidLoad() {
    this.db.list('/chat').push({
      username: this.username,
      message: this.message
    })
  }

}
