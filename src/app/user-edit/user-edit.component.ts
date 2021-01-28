import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: Object;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {}

  ngOnInit() {
    const userId = localStorage.getItem('editUserId');
    if (!userId) {
      alert('Invalid action.');
      this.router.navigate(['']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      firstName: [],
      lastName: []
    });
    this.userService.getUserById(+userId).subscribe(data => {this.editForm.setValue(data); });
  }

  onSubmit() {
    this.userService.editUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['']);
        },
        error => {
          alert(error);
        });
  }
}
