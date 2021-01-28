import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSaveComponent } from './user-save/user-save.component';

const routes: Routes = [
  {
    path : 'user-edit', component : UserEditComponent
  },
  {
    path : '', component : UserListComponent
  },
  {
    path : 'user-save', component : UserSaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
