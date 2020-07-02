export interface User {
    gender:string,
    name:{title:string,first:string,last:string}
    dob:{age:number,date:string}
    picture:{large:string,medium:string,thumbnail:string}
}