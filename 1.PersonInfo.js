function main(firstName, lastName, age) {

    let person = {}
    person.firstName = firstName
    person.lastName = lastName
    person.age = age

    for (let data in person) {
        console.log(`${data}: ${person[data]}`)
    }

}
main("Peter", "Pan", "20")