import {Component} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";
import {Auth} from "./auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public auth: Auth = null;

  constructor(private af: AngularFire) {
    this.af.auth.subscribe((auth) => {
      if (auth) {
        this.auth = new Auth(
          auth.auth.uid,
          auth.auth.displayName,
          auth.auth.email,
          auth.auth.photoURL
        )
      } else {
        this.auth = null;
      }
      console.log(this.auth)
    })
  }

  public login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  }

  public logout() {
    this.af.auth.logout();
  }

  public isLogged() {
    return this.auth != null;
  }
}
