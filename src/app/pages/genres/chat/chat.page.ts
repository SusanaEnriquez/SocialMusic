import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  messages = [

    {
      user: 'Ale',
      createdAt: 1554090856000,
      msg: 'Hola, ¿Que tal?',

    },
    {
      user: 'Orlando',
      createdAt: 1554090856000,
      msg: 'Bien, bien',
    },
    {
      user: 'Ale',
      createdAt: 1554090856000,
      msg: 'Me alegro mucho',
    }
  ];

  currentUser = 'Ale';
  newMsg = '';

  sendMessage(){
    this.messages.push({
      user: 'Ale', 
      createdAt: new Date().getTime(),
      msg: this.newMsg

    });

    this.newMsg = '';
    
  
}

  constructor() { }

  ngOnInit() {
  }

}
