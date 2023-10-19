let greeting: string = 'Hello World';
let sales = 123_456_789;
let course = 'TypeScript';
let isPublished = true;

// types
let arr: [number, string, boolean, number] = [3, 'TypeScript', false, 67];

// enum
const small = 1;
const medium = 2;
const large = 3;

enum Size {Small = 1, Medium, Large}; // in enum, the first word starts with a bloody capital
let mySize: Size = Size.Medium;
console.log(mySize);

// function
function calcTax (income: number, taxYear = 2022): number{
    if (taxYear < 2022)
    return income * 1.2;
    return income * 1.3;
}
calcTax(10_000);

// objects and advanced types
type Employee ={
    readonly id: number, // readonly, id cannot be changed
    name: string
    retire: (date: Date) => void

}
let employee: Employee = {id: 1,
     name: '',
    retire: (date: Date) => {
        console.log(date);
    }};

employee.name = 'Blessing';

// union types
function kgToLbs(weight: number | string): number {
    // narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    }else{
        return parseInt(weight) * 2.2; // parseInt converting string to int
    }
}

kgToLbs(10);
kgToLbs('10kg');

// intersection types
type Draggable = {
    drag: () => void;
};

type Resizable = {
    resize: () => void;
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// literal types
type Quantity = 50 | 100; // literal integers
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch'; // literal strings

// nullable types
function greet(name: string | null | undefined){
    if (name)
    console.log(name.toUpperCase());
else
console.log('Hola');
}

greet('Hello muchacho');
greet(null);
greet(undefined);

// optional chaining
type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined{
    return id === 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(1);

console.log(customer?.birthday?.getFullYear());