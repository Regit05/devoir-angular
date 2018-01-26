export class Token {
    name: string = null;

    constructor(token: any = {}){
        this.name = token.name || null;
    }


    public setToken(token){
        this.name = token;
    }

    public getToken(){
        console.log(this.name);
    }
}
