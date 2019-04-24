import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string;
  password:string;
  regUsername:string;
  regPassword:string;
  displayUsername:string;
  usernameMsg:string;
  continue: Boolean;

  constructor(public navCtrl: NavController, private storage: Storage) {
  
  }

  ionViewDidLoad() {

    this.storage.get('storeUser').then((val) =>{
      this.regUsername = val;
      console.log("local storage retrieved username: " + this.regUsername);
    })
    this.storage.get('storePass').then((val) =>{
      this.regPassword = val;
      console.log("local storage retrieved password: " + this.regPassword);
    })
    if(this.username == undefined){
      this.usernameMsg = "Logged out";
    } else {
      this.usernameMsg = "Logged in as: ";
    }

  } 

  login() {   
    this.storage.get('storeUser').then((val) =>{
      if(val == undefined){
        this.navCtrl.push(RegisterPage);
      } else {
        this.regUsername = val;
        console.log("local storage retrieved username: " + this.regUsername);
  
        this.storage.get('storePass').then((val) =>{
        this.regPassword = val;
        console.log("local storage retrieved password: " + this.regPassword);
        })
  
        if (this.username == undefined){
          this.usernameMsg = "Logged out";
        } else {
          this.usernameMsg = "Logged in as: ";
        }
    
        if(this.username == this.regUsername && this.password == this.regPassword){
          alert("Welcome " + this.regUsername);
          this.usernameMsg = "Logged in as: ";
          this.displayUsername = this.regUsername;
        }
      }
    }) 
  }

  logout() {
    this.regUsername = undefined;
    this.regPassword = undefined;
    this.usernameMsg = "Logged out";
  }

  gotoRegister() {
    this.navCtrl.push(RegisterPage);
  }

  clear() {
    this.storage.clear();
    this.navCtrl.pop();
  }
}