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

  /*
   * Subscribes to the user service and populates users array with data from the http get request.
   */
  users:any = [];
  ionViewWillEnter() {
    this.userService.getUsers().subscribe((data) => 
    {
      this.users = data.results; 
    });
  }

  /*
   * Simple LoadingController, displays upon page entry. Shows for 2 seconds and then dismisses.
   */
  presentLoading() {
    const loader = this.loading.create({
      content: "Please wait...",
      duration: 2000,
      showBackdrop: true
    });
    loader.present();
  }

}
