import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { Shake } from '@ionic-native/shake';
import { Vibration } from '@ionic-native/vibration';
import { WelcomePage } from '../welcome/welcome';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  displayUsername:string;
  random:number;
  bet:any;
  numGuess: any = '?';
  totalCash:any = 500;
  imgName:string = "../../assets/imgs/QuestionMark.jpg";
  imgNum:string;
  imgPath:string = "../../assets/imgs/";
  imgExt:string = ".jpg";
  highScore:number = 500;

  constructor(public navCtrl: NavController, private platform: Platform, 
              private shake: Shake, private storage: Storage, 
              private vibration: Vibration, private alertCtrl: AlertController) {}

  //Main code
  ionViewDidEnter() {
    //On entering the view, image is set to QuestionMark by default, and username is displayed on top left.
    this.imgName = "../../assets/imgs/QuestionMark.jpg";
    
    this.storage.get('storeUser').then((val) =>{
      this.displayUsername = val;
    })

    //Waits to see if device is shook, sensitivity set to 30 instead of default of 40.
    this.platform.ready().then(() => {
      this.shake.startWatch(30).subscribe(data =>{
        //Trigger vibration for 1 second when device is shook.
        this.vibration.vibrate(1000);
        /*  Checking if guess and random num are equal
         *  Random num generated and calls guessCorrect if it's right.
         *  Adds bet amount to total cash and resets guess & bet.
         */
        this.randomNum();
        if(this.random == this.numGuess){
          this.guessCorrect();
          //If totalCash exceeds high score then set high score to totalCash.
          if(this.totalCash > this.highScore){
            this.highScore = this.totalCash;
            this.storage.set('highest', this.highScore);
          }
        } 
        /*  Triggers if guess is incorrect
         *  Reduces total cash by half the bet amount. 
         *  If total cash drops below 5, game is reset
         */
        else if(this.random != this.numGuess){
          
          this.guessIncorrect();

          if(this.totalCash < 5) {
            this.resetGame();
          }
        }
        //Getting image path
        this.getImage();
      })
    })
  } //Main code

  //Methods
  guessCorrect() {
    alert("Congratulations! You guessed correctly and recieved " + this.bet + " cash. Choose your guess again!");
    this.totalCash += this.bet;
    this.numGuess = '?';
    this.bet = 0;
  }

  guessIncorrect() {
    alert("Unlucky! You guessed incorrectly and lost " + (this.bet / 2) + " cash.  Choose your guess again!");
    this.totalCash -= (this.bet / 2);
    this.numGuess = '?';
    this.bet = 0;
  }

  resetGame() {
    alert("You're bankrupt! Hit ok to reset and start a new game!");
    this.totalCash = 500;
    this.imgName = "../../assets/imgs/QuestionMark.jpg";
    this.bet = 0;
    this.navCtrl.push(WelcomePage);
  }

  randomNum() {
    this.random = Math.round((Math.random() * 5) + 1);
  }

  getImage () {
    this.imgName = "";
    this.imgNum = (this.random).toString();
    this.imgName = this.imgPath.concat(this.imgNum);
    this.imgName = this.imgName.concat(this.imgExt);
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

  badgeClick() {
    let alertCtrl = this.alertCtrl.create({
      title: 'Place bet',
      inputs: [
        {
          name: 'bet',
          placeholder: 'Bet'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enter',
          handler: data => {
            this.bet = data.bet;
          }
        }
      ]
    });
    alertCtrl.present();
  }
  //Methods
}
