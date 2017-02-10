import {Component, OnInit} from '@angular/core';
import {MessageService} from "./message/message.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public messages = [];

  constructor(private messageService: MessageService) {

  }

  public loadMessages() {
    this.messageService.loadMessages().subscribe((messages) => {
      this.messages = messages;
    })
  }

  public insertMessage(inputElement) {
    let message = inputElement.value.trim();
    if(message !== ''){
      this.messageService.insertMessage(inputElement.value);
    }
    inputElement.value = '';
  }

  ngOnInit() {
  }
}
