// The await keyword
// Most commonly use the await keyword inside of functions declared
// with async. 
// await will pause the execution of the function, waiting for a
// promise to be resolved. 

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color; 
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    //will be a resolved promise because I returned a value
    return "ALL DONE!"
}

// rainbow().then(() => console.log("END OF RAINBOW!"))
//Or

async function printRainbow() {
    await raindow();
    console.log("END OF RAINBOW!"))
}
printRainbow();