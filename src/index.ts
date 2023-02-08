// 我们可以使用索引访问类型来查找另一个类型上的特定属性
// type Person = { age: number; name: string; alive: boolean };
// type Age = Person["age"];
// type I1 = Person["age" | "name"];
// type AliveOrName = "alive" | "name";
// type I3 = Person[AliveOrName];

const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
];
   
type Person = typeof MyArray[number];
type Age = typeof MyArray[number]["age"];
// Or
type Age2 = Person["age"]

export {};