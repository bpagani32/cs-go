// 0(n^2)
// space 0(1)

const sumNum = arr => {
    let result = false
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.lenth; j++) {
            if(i !== j && arr[i] + arr[j] === 0) {
                return true
            }
        }
    }

return false

}

// 0(n^2)
// space 0(n)

const uniqChars = str => {
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; i++){
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true
}
// time 0(n)
// space  0(n)


const isPangram = str => {
    str = str.toLowerCase().replace(/([^a-z])+/g, '')
    let map = {}

    for(i = 0; i < str.length; i++){
        let letter = str[i]
        if(map[letter]){
            map[letter] += 1
        } else {
            map[letter] = 1
        }
    }
    let count = 0

    for(let key in map){
        count++
    }

    if(count >= 26){
        return true
    } else {
        return false
    }
}
// time 0(n)
// space 0(1)

const findLongestWord = arr => {
    let result = 0
    arr.forEach(word => {
        if(word.length > wordLength){
            wordLength = word.length
        }
    })

    return result
}
