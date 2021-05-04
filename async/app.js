// A keyword used to declare a function as an async function
// An async function will always return a promise
// async function hello() {
// }

// if the function returns a value, the promise will be resolved with that value
// if the function throws an exception, the promise will be rejected
// const sing = async () => {
//     throw "OH NO, PROBLEM!"
//     return "LA LA LA LA"
// }

// sing()
//     .then((data) => {
//         console.log("PROMISE RESOLVED WITH:", data)
//     })
//     .catch(err => {
//         console.log("PROMISE REJECTED!")
//         console.log(err)
//     })

const login = async (username, password) => {
    if(!username || !password) throw 'Missing Credentials'
    if(password === 'javascriptisgreat') return 'WELCOME!'
    throw 'Invalid Password'
}

login('akjashds', 'javascriptisgreat')
    .then(msg => {
        console.log('LOGGED IN!')
        console.log(msg)
    })
    .catch(err => {
        console.log("ERROR!")
        console.log(err)
    })

    