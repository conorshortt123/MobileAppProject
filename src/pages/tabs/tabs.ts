import { Component } from '@angular/core';
import { GamePage } from '../game/game';
import { UsersPage } from '../contact/Users';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GamePage;
  tab3Root = UsersPage;

  constructor() {

  }
}
