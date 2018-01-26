import { Component, OnInit } from '@angular/core';
import {Account} from '../account';
import {ApiService} from "../services/api.service";
import {Token} from "../token";

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

    account: Account = null;
    token: Token = null;


    constructor(
        private api: ApiService
    ) {
        this.account = new Account();
        this.token = new Token();

    }

    ngOnInit() {
    }


    submitForm()
{
    console.log(this.account);

    this.api.postLogin(this.account).subscribe((data: any) => {

        this.token.setToken(data.data.token);
    });

    this.token.getToken();

    /*if(data.data.success == 'true'){
        this.api.setToken(data.data.token);
    }
    console.log(this.api.getToken();
    }*/
}


}


