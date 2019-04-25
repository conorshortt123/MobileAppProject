import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { GamePage } from '../pages/game/game';
import { UsersPage } from '../pages/contact/Users';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';

import { Vibration } from '@ionic-native/vibration';
import { Shake } from '@ionic-native/shake';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { IonicStorageModule } from '@ionic/storage';
import { UserServiceProvider } from '../providers/user-service/user-service';

@NgModule({
  declarations: [
    MyApp,
    GamePage,
    UsersPage,
    HomePage,
    TabsPage,
    RegisterPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GamePage,
    UsersPage,
    HomePage,
    TabsPage,
    RegisterPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Shake,
    Vibration,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider
  ]
})
export class AppModule {}