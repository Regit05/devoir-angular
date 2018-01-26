export class Account {
    email: string = null;
    motdepasse: string = null;

    constructor(account: any = {}){
        this.email = account.email || null;
        this.motdepasse = account.motdepasse || null;
    }
}
