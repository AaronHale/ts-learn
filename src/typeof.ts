const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
];
type PersonArray = typeof MyArray;

let PersonArray: PersonArray = [
    {name: 'Alice', age: 15}
];

type Person = typeof MyArray[number];

let person: Person = {
    name: "Alice", 
    age: 15 
}

type Name = Person['name'];

let s = 'hello';

let n: typeof s;

type Preicate = (x: unknown) => boolean;

type K = ReturnType<Preicate>;

function f() {
    return { x: 10, y: 3 };
}

type P = ReturnType<typeof f>;



export {};

