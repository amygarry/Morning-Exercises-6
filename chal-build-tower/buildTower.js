
function towerOfStars (num){
    let tower = []
    let count = 0

    while(num > 0 ){
        let number = num*2-1
        // let spaceNum = count
        let buildingBlocks = '*'
        let spaces = ' '
        let string = `${spaces.repeat(count)}`+`${buildingBlocks.repeat(number)}`+`${spaces.repeat(count)}`
        tower.push(string)
        num--
        count ++
    }
    tower.reverse()
console.log(tower)
}

towerOfStars(60)

