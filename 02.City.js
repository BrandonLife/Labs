function main(name, area, population, country, zipCode) {

    let city = {}
    city.name = name
    city.area = area
    city.population = population
    city.country = country
    city.postCode = zipCode

    for (let items in city) {
        console.log(`${items} -> ${city[items]}`)
    }


}
main("Atlanta", "343", "416474", "USA", "404")