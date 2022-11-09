export class User{

    private name: String;
    private surname: String;
    private email: String;
    private username: String;
    private password: String;

    constructor(name: String, surname: String, email: String, username: String, password: String){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    public getName(): String {
        return this.name;
    }
    
    public setName(name: String): void {
        this.name = name;
    }

    public getSurname(): String {
        return this.surname;
    }
    
    public setSurname(surname: String): void {
        this.surname = surname;
    }

    public getEmail(): String {
        return this.email;
    }

    public setEmail(email: String): void {
        this.email = email;
    }

    public getUsername(): String {
        return this.username;
    }

    public setUsername(username: String): void{
        this.username = username;
    }

    public getPassword(): String {
        return this.password;
    }

    public setPassword(password: String): void {
        // Call the user service
    }

}
