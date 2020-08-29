import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
  private username: string;


  constructor (private _http: HttpClient) {
    this.username = 'DerickKinoti';
  }

  getUser() {
    return this._http.get<any[]>('http://api.github.com/users/' + this.username);
  }

  getRepos() {
      return this._http.get<any[]>('http://api.github.com/users/' + this.username + "/repos");
  }

  updateUser(username: string) {
      this.username = username;
  }

}