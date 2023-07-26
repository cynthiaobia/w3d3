// There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.
// log the properties and test the methods (don't instantiate)

// base class
class Person {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    // methods
    introduction() {
        console.log(`Hi, my name is ${this.name}, I am ${this.age} years old, and I am from ${this.location}.`);
    }

    ageUp() {
        this.age++;
        console.log(`Today is ${this.name}'s birthday and they ${this.name} are ${this.age} years old.`);
    }

    greet(person) {
        console.log(`Hello, ${person.name}! My name is ${this.name}.`);
    }
}

// PostalWorker class
class PostalWorker extends Person {
    constructor(name, age, location, employeeId) {
        super(name, age, location);
        this.employeeId = employeeId;
    }

    //method
    deliverMail() {
        console.log(`Postal worker ${this.name} (ID: ${this.employeeId}) is delivering the mail.`);
    }
}

// Chef class
class Chef extends Person {
    constructor(name, age, location, specialty) {
        super(name, age, location);
        this.specialty = specialty;
    }

    //method
    prepareDish(dishName) {
        console.log(`${this.name}, the chef, is preparing ${dishName}.`);
    }
}

const postalWorker1 = new PostalWorker("John", 30, "New York City", "1234");
const postalWorker2 = new PostalWorker("Jane", 28, "Chicago", "5678");


postalWorker1.introduction();
postalWorker1.deliverMail();
postalWorker1.greet(postalWorker2);

postalWorker2.introduction();
postalWorker2.deliverMail();
postalWorker2.greet(postalWorker1);

// Chef class

const chef1 = new Chef("David", 35, "Los Angeles", "Italian");
const chef2 = new Chef("Mary", 40, "Dallas", "Mexican");

chef1.introduction();
chef1.prepareDish("Shrimp Alfredo");
chef1.greet(chef2);

chef2.introduction();
chef2.prepareDish("Arroz con pollo");
chef2.greet(chef1);


// Governor Class
class Governor extends Person {
    constructor(name, age, location, state) {
    
    super(name, age);
    this.state = state;
    }
}

const biden = new Governor('Biden', 80, 'DC', 'Delaware');
console.log(biden.name);
console.log(biden.age);
console.log(biden.location);
console.log(biden.state);