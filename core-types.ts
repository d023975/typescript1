const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple
} = {
  name: "Carlos",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person.role.push("admin"); // push is still allowed for tuples
// person.role[1] = 10; //tuple avoids this

let favoriteActivities: string[];

favoriteActivities = ["Sports", "Cooking"]; // with type any it could become mixed strings and nubmers

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //console.log(hobby.map()); type inference results in an error
}

// JS 
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 1;

// TS alternative
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

enum Role2 {
    ADMIN = 5,
    READ_ONLY,
    AUTHOR,
  }

  enum Role3 {
    ADMIN = 'ADMIN',
    READ_ONLY = 2,
    AUTHOR,
  }

if(Role.ADMIN == 0 ){
    console.log('Hurray');
}

// any type