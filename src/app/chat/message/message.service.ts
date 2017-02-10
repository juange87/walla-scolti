import {Injectable, Input} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import Any = jasmine.Any;

@Injectable()
export class MessageService {

  constructor(private af: AngularFire) {
  }

  public loadMessages(): FirebaseListObservable<any> {
    return this.af.database.list("messages");
  }

  public insertMessage(message) {
    return this.af.database.list("messages").push({
      text: message
    });
  }
}
