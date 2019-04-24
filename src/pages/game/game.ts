 import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { Shake } from '@ionic-native/shake';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  displayUsername:string;
  random:number;

  constructor(public navCtrl: NavController, private platform: Platform, private shake: Shake, private storage: Storage) {
    
    this.storage.get('storeUser').then((val) =>{
      this.displayUsername = val;
    })
    
    this.platform.ready().then(() => {
      this.shake.startWatch().subscribe(data =>{
        this.random = Math.round((Math.random() * 6));
        alert(this.random);
      })
    })
  }
}
