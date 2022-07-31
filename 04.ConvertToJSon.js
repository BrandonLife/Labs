function main(name, lastName, HairColor) {

    let person = {}

    person.firstName = name
    person.lastName = lastName
    person.hairColor = HairColor
    console.log(JSON.stringify(person))

}
main('George', 'Jones', 'Brown')