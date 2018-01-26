import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Video} from '../video';
import {Account} from '../account';

@Injectable()
export class ApiService {

    private videos: Video[] = [];
    private token = null;


    constructor(
        private http: HttpClient
    ) { }

    public get() {
        return this.videos;
    }

    public fetch( token ) {
        return this.http.get('https://api.visio-nr.com/netflix/list?token=' + token);
    }

    public postLogin(post: Account) {
        return this.http.post('https://api.visio-nr.com/netflix/login', post);

    }
    public postSignup(post: Account) {
        return this.http.post('https://api.visio-nr.com/netflix/signup', post);
    }





}
