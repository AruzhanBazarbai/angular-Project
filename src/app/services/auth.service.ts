import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const LOCALE_DATA_FILE_PATH = "../../assets/data/users.json";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // users: User[] | undefined;

  constructor(private httpClient: HttpClient) { }
   getMessage() { 
        return this.httpClient.get( 
            'http://localhost:3000/api/login'); 
  } 
  login(email: string, password: string) {
    return this.httpClient.post('http://localhost:3000/api/login', {email, password})
  }

  // login(email:string, password:string ) {
  //       return this.httpClient.post<User>('/api/login', {email, password})
  //           // this is just the HTTP call, 
  //           // we still need to handle the reception of the token
  //           .shareReplay();
  //   }

  // getAllUsers(): Observable<any> {
  //   return this.httpClient.get(LOCALE_DATA_FILE_PATH);
  // }

  // checkUserIfExists(name: string, password: string): boolean {
  //   this.getAllUsers().subscribe((data) => {
  //     console.log(data);
  //     this.users = data.users;
  //   })
  //   const currentUser = this.users?.filter((user) => user.name === name && user.password === password)
    

  //   if (currentUser) {
  //     localStorage.setItem("userId", currentUser[0].id)
  //     return true;
  //   } else {
  //     console.log("user doesn't exists")
  //     return false;
  //   }

    
  // }
}
