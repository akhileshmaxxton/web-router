import { Component } from '@angular/core';
import { IUser } from '../Interface/IUser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-axios-api',
  templateUrl: './axios-api.component.html',
  styleUrl: './axios-api.component.css'
})
export class AxiosApiComponent {

  constructor(private userService: UserService) {}

  UserList: IUser[] = [];
  ngOnInit() {
    this.userService.getAxiosUsers()
      .then(response => {
        this.UserList = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }

}
