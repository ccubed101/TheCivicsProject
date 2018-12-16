export class AuthorizationModel {

    // Construction

    constructor(
        private isAdmin?: boolean
    ) {
    }


    // Property accessors.

    public get IsAdmin(): boolean {
        return this.isAdmin;
    }
    public set IsAdmin(value: boolean) {
        this.isAdmin = value;
    }
}
