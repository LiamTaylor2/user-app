import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {UserList} from '../model/UserList';
import {UserEdit} from '../model/UserEdit';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: UserList[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => { this.users = data;
      });
  }

  deleteUser(user: UserList): void {
    this.userService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter(a => a !== user);
      });
  }

  editUser(user: UserEdit): void {
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', user.id.toString());
    this.router.navigate(['user-edit']);
  }

  saveUser(): void {
    this.router.navigate(['user-save']);
  }
}
