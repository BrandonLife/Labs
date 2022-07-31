function main(jSonStr) {

    let person = JSON.parse(jSonStr)

    for (let key in person) {
        console.log(`${key}: ${person[key]}`)
    }

}
main('{"name": "George", "age": 40, "town":"Atlanta"}')