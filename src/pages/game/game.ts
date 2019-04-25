 import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { Shake } from '@ionic-native/shake';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  displayUsername:string;
  random:number;
  bet:any;
  numGuess: number;
  totalCash:any = 500;
  imgName:string = "../../assets/imgs/QuestionMark.jpg";
  imgNum:string;
  imgPath:string = "../../assets/imgs/";
  imgExt:string = ".jpg";
  highScore:number = 500;

  constructor(public navCtrl: NavController, private platform: Platform, private shake: Shake, private storage: Storage) {
    
    
  }

  ionViewDidEnter() {
    this.imgName = "../../assets/imgs/QuestionMark.jpg";
    
    this.storage.get('storeUser').then((val) =>{
      this.displayUsername = val;
    })

    this.platform.ready().then(() => {
      this.shake.startWatch(30).subscribe(data =>{
        //Checking if guess and random num are equal
        this.random = Math.round((Math.random() * 5) + 1);
        if(this.random == this.numGuess){
          alert("Congratulations! You guessed correctly and recieved " + this.bet + " cash. Choose your guess again!");
          this.totalCash += this.bet;
          this.numGuess = undefined;
          this.bet = 0;
          if(this.totalCash > this.highScore){
            this.highScore = this.totalCash;
            this.storage.set('highest', this.highScore);
          }
        } else if(this.random != this.numGuess){
          alert("Unlucky! You guessed incorrectly and lost " + (this.bet / 2) + " cash.  Choose your guess again!");
          this.totalCash -= (this.bet / 2);
          this.numGuess = undefined;
          this.bet = 0;
          if(this.totalCash < 5) {
            alert("You're bankrupt! Hit ok to reset and start a new game!");
            this.totalCash = 500;
            this.imgName = "../../assets/imgs/QuestionMark.jpg";
            this.bet = 0;
            this.navCtrl.push(WelcomePage);
          }
        }

        //Getting image path
        this.imgName = "";
        this.imgNum = (this.random).toString();
        this.imgName = this.imgPath.concat(this.imgNum);
        this.imgName = this.imgName.concat(this.imgExt);

      })
    })
    
  }

  rollGuess(guess: number) {
    switch(guess){
      case 1:
      this.numGuess = 1;
      alert("Your guess is 1!");
      break;
      case 2:
      this.numGuess = 2;
      alert("Your guess is 2!");
      break;
      case 3:
      this.numGuess = 3;
      alert("Your guess is 3!");
      break;
      case 4:
      this.numGuess = 4;
      alert("Your guess is 4!");
      break;
      case 5:
      this.numGuess = 5;
      alert("Your guess is 5!");
      break;
      case 6:
      this.numGuess = 6;
      alert("Your guess is 6!");
      break;
    }
  }
}
