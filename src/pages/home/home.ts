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
  public hideMe: boolean = false;

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
    if(this.displayUsername == undefined){
      this.usernameMsg = "Logged out";
    } else {
      this.hideMe = true;
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
  
        if (this.displayUsername == undefined){
          this.usernameMsg = "Logged out";
          this.displayUsername = null;
        } else {
          if(this.displayUsername == this.regUsername && this.password == this.regPassword){
            alert("Welcome " + this.regUsername);
            this.usernameMsg = "Logged in as: ";
            this.hideMe = true;
            this.displayUsername = this.regUsername;
          }
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