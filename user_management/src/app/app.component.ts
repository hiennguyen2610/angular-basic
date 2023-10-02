import { Component } from '@angular/core';
import { ListUser } from './list-user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user_management';

  users: ListUser[] = [
    {
      'id': 1,
      'avatar': 'link_avatar_1',
      'name': 'Người dùng 1',
      'email': 'user1@example.com',
      'birthday': new Date('2000-01-01'),
    },
    {
      'id': 2,
      'avatar': 'link_avatar_2',
      'name': 'Người dùng 2',
      'email': 'user2@example.com',
      'birthday': new Date('1995-05-15'),
    },
    {
      'id': 3,
      'avatar': 'link_avatar_3',
      'name': 'Người dùng 3',
      'email': 'user3@example.com',
      'birthday': new Date('1988-11-30'),
    },
  ];

}
