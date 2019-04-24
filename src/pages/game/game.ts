import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Shake } from '@ionic-native/shake';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

  constructor(public navCtrl: NavController, private platform: Platform, private shake: Shake) {
    this.platform.ready().then(() => {
      this.shake.startWatch().subscribe(data =>{
        alert("shake!");
        console.log('shake!');
      })
    })
  }
}
