import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserEdit} from './model/UserEdit';
import {UserList} from './model/UserList';
import {UserSave} from './model/UserSave';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUserUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<UserList[]>(this.baseUserUrl);
  }

  getUserById(id: number) {
    return this.http.get<UserEdit>(this.baseUserUrl + '/' + id);
  }

  saveUser(userSave: UserSave) {
    return this.http.post(this.baseUserUrl, userSave);
  }

  editUser(userEdit: UserEdit) {
    return this.http.put(this.baseUserUrl + '/' + userEdit.id, userEdit);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUserUrl + '/' + id);
  }
}
