import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})

export class UsersPage {

  constructor(private userService: UserServiceProvider, public navCtrl: NavController) {
 
  }

  users:any = [];
  ionViewWillEnter() {
    this.userService.getUsers().subscribe((data) => 
    {
      this.users = data.results; 
    });
  }

}
