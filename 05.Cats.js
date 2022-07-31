// function main(arrOfStr) {

//     let cats = []
//     class Cat {
//         constructor(name, age) {
//             this.name = name;
//             this.age = age;

//             function meow() {
//                 console.log('Meow')
//             }
//             meow()
//         }
//     }

//     for (let i = 0; i < arrOfStr.length; i++) {
//         let item = arrOfStr[i].split(' ')
//         let [name, age] = item
//         cats.push(new Cat(name, age))
//     }
//     for (let item of cats) {
//         console.log(`${item.name}, ${item.age} says ${meow()}`)
//     }


// }



////Patrick's way
class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.meow = function () {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
}

function main(arrayOfStrings) {
    let cats = []

    for (let catString of arrayOfStrings) {
        let [name, age] = catString.split(' ')
        age = Number(age)
        cats.push(new Cat(name, age))
    }
    //normally there's something to do here
    for (let cat of cats) {
        cat.meow()
    }
}
main(['Mellow 2', 'Tom 5'])