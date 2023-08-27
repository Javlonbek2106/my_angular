import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-api.service';
import { IUser } from '../Models/IUser';
import { IPostUser } from '../Models/IPostUser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  newUser: IPostUser = {
    Username: '',
      Password: '',
      Email: '',
      Fullname: '',
      Phonenumber: '',
      Age: 0,
      CompanyId: '',
  };

  users: IUser[] = [];
  selectedUser: IUser | null = null;

  constructor(private userService: UserService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  createUser(userPost: IPostUser): void {
    this.userService.addUser(userPost).subscribe(
      () => {
        this.getUsers(); 
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }

  getUserDetails(id: string): void {
    this.userService.getUserById(id).subscribe(
      (data) => {
        this.selectedUser = data;
      }
    );
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      }
    );
  }

  deleteUser(id: string): void {
    this.userService.deleteUserById(id).subscribe(
      () => {
        this.getUsers();
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }

  resetForm(): void {
    this.newUser = {
      Username: '',
      Password: '',
      Email: '',
      Fullname: '',
      Phonenumber: '',
      Age: 0,
      CompanyId: '',
    };
  }
}
