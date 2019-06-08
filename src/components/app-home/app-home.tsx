import { Component, h, Prop } from '@stencil/core';
import { AuthService } from '../../services/Auth';
import { DatabaseService} from '../../services/Database';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})

export class AppHome {

@Prop() db: DatabaseService;
@Prop() auth: AuthService;
@Prop() session: any;

async loginWithGithub(_event) {
  try {
    const result = await this.auth.withSocial('github');
  
    await this.db.add("users", { name: result.user.displayName }, result.user.uid);
    // const docRef = this.user.update(result.user.uid, {
    //  email: result.user.email,
    //  oldUser: true
    // });
    // console.log(docRef);
    console.log(result);
  } catch (error) {
    alert('There was an error logging in...');
    console.log(error);
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
    
        <ion-button onClick={(event) => this.loginWithGithub(event)} expand="block">Login with Github</ion-button>
      </ion-content>
    ];
  }
}
