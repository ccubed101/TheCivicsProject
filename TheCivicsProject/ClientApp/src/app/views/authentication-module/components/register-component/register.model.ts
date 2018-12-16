export class RegisterModel {

    // Construction

    constructor(
        private userName?: string
        , private password?: string
        , private retypePassword?: string
        , private isAdmin?: boolean
    ) {
    }


    // Property accessors.

    public get UserName(): string {
        return this.userName;
    }
    public set UserName(value: string) {
        this.userName = value;
    }

    public get Password(): string {
        return this.password;
    }
    public set Password(value: string) {
        this.password = value;
    }

    public get RetypePassword(): string {
        return this.retypePassword;
    }
    public set RetypePassword(value: string) {
        this.retypePassword = value;
    }

    public get IsAdmin(): boolean {
        return this.isAdmin;
    }
    public set IsAdmin(value: boolean) {
        this.isAdmin = value;
    }
}
