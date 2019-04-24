import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { GamePage } from '../pages/game/game';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';

import { Shake } from '@ionic-native/shake';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    GamePage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GamePage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Shake,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}