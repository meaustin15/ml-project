import { Component, h, State } from '@stencil/core';
import { AuthService } from '../../services/Auth';

import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})

export class AppRoot {
@State()
  defaultProps:{
    auth: AuthService
    db?: any,
    session?: any
  } = {
    auth: new AuthService({
      firebase: {
        apiKey: "AIzaSyA6brMAwXogJ2xbEQFDPDR6dN_a5Tfcfl8",
        authDomain: "madness-manager-test.firebaseapp.com",
        databaseURL: "https://madness-manager-test.firebaseio.com",
        projectId: "madness-manager-test",
        storageBucket: "madness-manager-test.appspot.com",
        messagingSenderId: "337891052115",
      }
    })
  };

  componentDidLoad() {
    this.defaultProps.db = new DatabaseService();
    this.defaultProps.auth.onAuthChanged(session => {
      console.log(session);
      this.defaultProps.session = session;
      this.defaultProps = {...this.defaultProps};
    });
    this.defaultProps = {...this.defaultProps};
  }


  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" componentProps={{...this.defaultProps}}/>
          <ion-route url="/profile/:name" component="app-profile" componentProps={{...this.defaultProps}}  />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
