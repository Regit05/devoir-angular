import { Component, OnInit } from '@angular/core';
import {Account} from '../account';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

    account: Account = null;


    constructor() {
        this.account = new Account();
    }

    ngOnInit() {
    }


    submitForm(){
        console.log(this.account);
    }

}
