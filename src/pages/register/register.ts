import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  username:string;
  password:string;
  repass:string;
  ready: boolean;

  constructor(public navCtrl: NavController, private storage: Storage) {
  
  }

  register() {
    if(this.username==undefined || this.password==undefined || this.repass==undefined){
      alert("Please fill in all fields.");
    } else {
      this.ready = true;
    }
    if(this.password != this.repass){
      alert("Those passwords didn't match, try again.");
      this.ready = false;
    } else {
      this.ready = true;
    }
    if(this.ready == true){
      this.storage.set('storeUser', this.username);
      this.storage.set('storePass', this.password);
      alert("Registration complete. Log in using your details to continue.");
      this.navCtrl.pop();
    }
  }
}
