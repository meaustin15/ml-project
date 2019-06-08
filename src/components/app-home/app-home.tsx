import { Component, h, Prop } from '@stencil/core';
import { AuthService } from '../../services/Auth';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})

export class AppHome {

@Prop() db: any;
@Prop() auth: AuthService;
@Prop() session: any;



async loginWithGithub(_event) {
  try {
    const result = await this.auth.withSocial('github');
   /* const docRef = this.user.update(result.user.uid, {
     email: result.user.email,
     oldUser: true
    });*/
     console.log(result);
  } catch (error) {
    alert('There was an error logging in...');
  }
    //const provider = new firebase.auth.GithubAuthProvider();
    //const result = await firebase.auth().signInWithPopup(provider);
    //console.log(result);
  

  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,
    <ion-content class="ion-padding">
    
        <ion-button onClick={(_event) => this.loginWithGithub.bind(event)} expand="block">Login with Github</ion-button>
      </ion-content>
    ];
  }
}
