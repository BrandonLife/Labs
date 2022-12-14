class Song {
    constructor(typeList, name, time) {
        this.typeList = typeList;
        this.name = name;
        this.time = time;
    }
}

function main(songsArray) {

    let numofSongs = songsArray.shift()
    let typeToPlay = songsArray.pop()
    let songs = []
    for (let i = 0; i < numofSongs; i++) {
        let [typeList, name, time] = songsArray[i].split("_")
        songs.push(new Song(typeList, name, time))
    }
    if (typeToPlay === "all") {
        songs.forEach(song => {
            console.log(song.name)
        })
    } else {
        let songsOfType = songs.filter(song => {
            if (typeToPlay === song.typeList) {
                console.log(song.name)
            }
        })
    }

}

main([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])