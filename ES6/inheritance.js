// to inherite the all method from parent class 

class Car { 
    constructor(name){
        this.brand = name
    }
    parent(){
        return "I have  a " + this.brand
    }
}

// now create  a child  class which  will able to access  this parent method 

class CarModel extends Car{
    constructor(name , model ){
        super(name)
        this.model = model
    }
    showCar(){
        // now use parent class
        return this.parent() + ', it is  a model' + this.model
    }
}

// now  name the obj of child  class 
const myNewCar = new CarModel('Ford' , 'mustang')

console.log(myNewCar.showCar())