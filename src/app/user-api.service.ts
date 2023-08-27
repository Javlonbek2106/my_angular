import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './Models/IUser'; 
import { IPostUser } from './Models/IPostUser'; 


@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {}
  addUser(userPost: IPostUser): Observable<string> {
    return this.http.post<string>('http://localhost:5192/api/User/CreateUser', userPost);
  }
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`http://localhost:5192/api/User`);
  }  
  getUserById(Id: string): Observable<IUser>{
    return this.http.get<IUser>(`http://localhost:5192/api/user/Userbyid?Id=${Id}`);
  }
  deleteUserById(Id: string): Observable<any> {
    return this.http.delete<string>(`http://localhost:5192/api/User/delete?Id=${Id}`);
  }
  updateUserById(newUser: IUser): Observable<string>{
    return this.http.put<string>('http://localhost:5192/api/User/UpdateUser',newUser);
  }
}
