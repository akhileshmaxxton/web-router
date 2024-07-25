import { Component } from '@angular/core';
import { IUser } from '../Interface/IUser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-fetch-api',
  templateUrl: './fetch-api.component.html',
  styleUrl: './fetch-api.component.css'
})
export class FetchApiComponent {
 // protected users$: Observable<IUser[]>;
 users$!: IUser[];
 constructor(public userservice: UserService) {}

 ngOnInit() {
   this.userservice.getUsers().subscribe(res => {
     this.users$ = res;
   });
 }

}
