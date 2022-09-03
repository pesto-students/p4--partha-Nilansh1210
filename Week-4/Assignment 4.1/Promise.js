const getNumber = () => new Promise(function (resolve, reject) {
    let value = Math.floor(Math.random() * 1000);
    setTimeout(() => {
        if (value % 5 === 0) {
            return resolve(value)
        }
        else {
            return reject(value)
        }
    })
})
console.time()
getNumber(1000)
    .then(() => {
        // console.timeEnd();
        return console.log(`divisible by 5`)
    })
    
    .catch((num) => {
        // console.timeEnd();
        return console.log(`not divisible by 5 value= ${num}.`)
    })

    .finally(console.timeEnd());