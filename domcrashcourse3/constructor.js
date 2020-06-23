// Objects Literals

const person = {
    firstName: 'Wire',
    age: 30,
    getNameSummary: function (){
        return `${this.firstName} was written by ${this.age} in ${this.age}`
    }
  }
console.log(person.getNameSummary());

//constructor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

    /*
    this.getSummary = function (){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
   */
//getSummary
    Book.prototype.getSummary = function (){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

//getAge
Book.prototype.getAge = function (){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${this.year} years old`;
}




//instantiate an object
const book1 = new Book('jay', 'ray', '1990');
const book2 = new Book('ay', 'ay', '1998');
console.log(book1.getSummary());
console.log(book2.getAge());


class Booker{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
 }

 getSummary1(){
    return `${this.title} was written by ${this.author} in ${this.year}`
 }
}

//instantiate
booker12 = new Booker("ray", "rayup", "1900")
console.log(booker12.getSummary1());

class Magazine extends Booker{
    constructor(title, author,year, month){
    super(title, author,year)
    this.month = month;

}
}

const mag1 = new Magazine("int", "why", "me","19099")
console.log(mag1.getSummary1());