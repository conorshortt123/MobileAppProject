import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})

export class UsersPage {

  constructor(private userService: UserServiceProvider, public navCtrl: NavController, private loading:LoadingController) {
    this.presentLoading();
  }

  users:any = [];
  ionViewWillEnter() {
    this.userService.getUsers().subscribe((data) => 
    {
      this.users = data.results; 
    });
  }

  presentLoading() {
    const loader = this.loading.create({
      content: "Please wait...",
      duration: 2000,
      showBackdrop: true
    });
    loader.present();
  }

}
