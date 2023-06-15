// Class and Subclass

//class
class Person{
  constructor(name, age){
    this.name = name
    this.age = age
  }

  greet(){ //method in class
    return `hello ${this.name} who is ${this.age} Years Old`
  }
}

//subclass a.k.a inheritance
class Member extends Person {
  constructor(name, age, memberID){
    super(name, age)
    this.memberID = memberID
  }

  mentionID(){ //method in subclass
    return `hello ${this.name} your member ID is ${this.memberID}`
  }
}

// const budi = new Person("budi", 23)
const budi = new Member("Budi", 23, 21)

// console.log(budi.name)
// console.log(budi.greet())
console.log(budi.memberID)
console.log(budi.mentionID())