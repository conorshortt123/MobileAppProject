import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { Storage } from '@ionic/storage';
import { WelcomePage } from '../welcome/welcome';

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
  highScore:number = 500;
  displayHighScore:number;

  constructor(public navCtrl: NavController, private storage: Storage) {
  
  }

  ionViewDidLoad() {

    //Retrieving data from local storage: username, password, and high score.
    this.storage.get('storeUser').then((val) =>{
      this.regUsername = val;
    })
    this.storage.get('storePass').then((val) =>{
      this.regPassword = val;
    })
    this.storage.get('highest').then((val) =>{
      if(val > this.highScore){
        this.highScore = val;
      }
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

        this.storage.get('storePass').then((val) =>{
        this.regPassword = val;
        })
  
        if (this.displayUsername == undefined){
          this.usernameMsg = "Logged out";
        } else {
          this.usernameMsg = "Logged in as: ";
        }
    
        if(this.displayUsername == this.regUsername && this.password == this.regPassword){
          alert("Welcome " + this.regUsername);
          this.usernameMsg = "Logged in as: ";
          this.displayUsername = this.regUsername;
          this.displayHighScore = this.highScore;
          this.hideMe = true;
        }
      }
    }) 
  }

  logout() {
    this.hideMe = false;
    this.usernameMsg = "Logged out";
  }

  gotoRegister() {
    this.navCtrl.push(RegisterPage);
  }

  clear() {
    this.storage.clear();
    this.navCtrl.push(WelcomePage);
  }
}