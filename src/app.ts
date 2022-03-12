//khai b
// type User = {
//     id :number;
//     name : string;
// }
interface User {
    id:number;
    name : string;
}
const b: number = 30;
const myName: string = "nguyen tien manh";
const myAge : number = 20;
const startus : boolean = true;
const myDB : User = {id :1,name: "manh"}

type Product = {
    id: number,
    name : string
}
const getProduct = <T extends Product>(products: T[] ) => {
    const result = products.map(item => `<div>${item.name}</div>`)
}
getProduct([{id:1, name:"manh"}, {id:2, name:"tien"}])


