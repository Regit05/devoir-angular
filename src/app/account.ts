export class Account {
    email: string = null;
    password: string = null;

    constructor(account: any = {}){
        this.email = account.email || null;
        this.password = account.password || null;
    }
}
