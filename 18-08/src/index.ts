import { Animal } from "./Animal";
import { Crocodile } from "./Crocodile";
import { Dog } from "./Dog";
import { Owl } from "./Owl";
// Assim eu crio um objeto do tipo cachorro
const myDog:Dog = new Dog("Bob", 10)
const myOwl:Owl = new Owl("Edwiges", 2)
const myCrocodile:Crocodile = new Crocodile("Croc", 1000)
// Assim eu vejo o nome do cachorro
console.log(myDog.name)
// Assim eu vejo o peso do cachorro
console.log(myDog.weight)
// Assim eu chamo os dois métodos do cachorro
myDog.bark()
myDog.eat()
myOwl.fly()
myOwl.eat()
myCrocodile.eat()
myCrocodile.swim()

// Criar um array para todos os animais
const animals:Animal[] = [myDog, myOwl, myCrocodile]

for (const animal of animals) {
    animal.eat()
}
