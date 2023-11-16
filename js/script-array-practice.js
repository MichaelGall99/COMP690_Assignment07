// HELPER FUNCTION USED TO DISPLAY THE CONTENTS OF ANY ARRAY USING A FOR / OF LOOP
function listArray (inArray) {
    console.log('....................')
    for (let i of inArray) {
        console.log(i)
    }
    console.log('....................')
}


//STEP 1
// let moviesStringArray = ['A Few Good Men', 'Die Hard', 'The Fugitive', 'Rush Hour', 'National Treasure']
// console.log(moviesStringArray[1])


//STEP 2 -- Declare an array using the function construction method
// let movies = new Array(5)
// movies[0] = 'A Few Good Men'
// movies[1] = 'Die Hard'
// movies[2] = 'The Fugitive'
// movies[3] = 'Rush Hour'
// movies[4] = 'National Treasure'
// console.log(movies[0])


//STEP 3
// let movies = new Array(5)
// movies[0] = 'A Few Good Men'
// movies[1] = 'Die Hard'
// movies[2] = 'The Fugitive'
// movies[3] = 'Rush Hour'
// movies[4] = 'National Treasure'

// movies.splice(2,0,'The Godfather')

// // listArray(movies)

// console.log(movies.length)


//STEP 4 -- Declare an array using literal notation
// let movies = []
// movies[0] = 'A Few Good Men'
// movies[1] = 'Die Hard'
// movies[2] = 'The Fugitive'
// movies[3] = 'Rush Hour'
// movies[4] = 'National Treasure'

// delete movies[0]

// listArray(movies)


//STEP 5 -- for / in loop
// let movies = []
// movies[0] = 'A Few Good Men'
// movies[1] = 'Die Hard'
// movies[2] = 'The Fugitive'
// movies[3] = 'Rush Hour'
// movies[4] = 'National Treasure'
// movies[5] = 'Rudy'
// movies[6] = 'The Green Mile'

// for (let i in movies) {
//     console.log(movies[i])
// }


//STEP 6 -- for / of loop 
// let movies = []
// movies[0] = 'A Few Good Men'
// movies[1] = 'Die Hard'
// movies[2] = 'The Fugitive'
// movies[3] = 'Rush Hour'
// movies[4] = 'National Treasure'
// movies[5] = 'Rudy'
// movies[6] = 'The Green Mile'

// for (let i of movies) {
//     console.log(i)
// }


//STEP 7 -- for / of loop (sorted view)
// let movies = []
// movies[0] = 'A Few Good Men'
// movies[1] = 'Die Hard'
// movies[2] = 'The Fugitive'
// movies[3] = 'Rush Hour'
// movies[4] = 'National Treasure'
// movies[5] = 'Rudy'
// movies[6] = 'The Green Mile'

// movies.sort()

// for (let i of movies) {
//     console.log(i)
// }


//STEP 8
// let movies = []
// movies[0] = 'A Few Good Men'
// movies[1] = 'Die Hard'
// movies[2] = 'The Fugitive'
// movies[3] = 'Rush Hour'
// movies[4] = 'National Treasure'
// movies[5] = 'Rudy'
// movies[6] = 'The Green Mile'

// let leastFavoriteMovies = []
// leastFavoriteMovies[0] = 'Mamma Mia'
// leastFavoriteMovies[1] = 'Waterworld'
// leastFavoriteMovies[2] = 'Jersey Girl'

// console.log('Movies I like:')
// console.log('')
// for (let i of movies) {
//     console.log(i)
// }
// console.log('')
// console.log('Movies I regret watching:')
// console.log('')
// for (let i of leastFavoriteMovies) {
//     console.log(i)
// }


//STEP 9
// let movies = []
// movies[0] = 'A Few Good Men'
// movies[1] = 'Die Hard'
// movies[2] = 'The Fugitive'
// movies[3] = 'Rush Hour'
// movies[4] = 'National Treasure'
// movies[5] = 'Rudy'
// movies[6] = 'The Green Mile'

// let leastFavoriteMovies = []
// leastFavoriteMovies[0] = 'Mamma Mia'
// leastFavoriteMovies[1] = 'Waterworld'
// leastFavoriteMovies[2] = 'Jersey Girl'

// movies = movies.concat(leastFavoriteMovies)

// movies.reverse()

// for (let i of movies) {
//     console.log(i)
// }


//STEP 10
// let movies = []
// movies[0] = 'A Few Good Men'
// movies[1] = 'Die Hard'
// movies[2] = 'The Fugitive'
// movies[3] = 'Rush Hour'
// movies[4] = 'National Treasure'
// movies[5] = 'Rudy'
// movies[6] = 'The Green Mile'

// let leastFavoriteMovies = []
// leastFavoriteMovies[0] = 'Mamma Mia'
// leastFavoriteMovies[1] = 'Waterworld'
// leastFavoriteMovies[2] = 'Jersey Girl'

// movies = movies.concat(leastFavoriteMovies)

// movies.reverse()

// console.log(movies.pop())     // Removes the last element from the array and returns the element


//STEP 11
// let movies = []
// movies[0] = 'A Few Good Men'
// movies[1] = 'Die Hard'
// movies[2] = 'The Fugitive'
// movies[3] = 'Rush Hour'
// movies[4] = 'National Treasure'
// movies[5] = 'Rudy'
// movies[6] = 'The Green Mile'

// let leastFavoriteMovies = []
// leastFavoriteMovies[0] = 'Mamma Mia'
// leastFavoriteMovies[1] = 'Waterworld'
// leastFavoriteMovies[2] = 'Jersey Girl'

// movies = movies.concat(leastFavoriteMovies)

// movies.reverse()

// console.log(movies.shift())     // Removes the first element from the array and returns the element


//STEP 12
// let movies = []
// movies[0] = 'A Few Good Men'
// movies[1] = 'Die Hard'
// movies[2] = 'The Fugitive'
// movies[3] = 'Rush Hour'
// movies[4] = 'National Treasure'
// movies[5] = 'Rudy'
// movies[6] = 'The Green Mile'

// let leastFavoriteMovies = []
// leastFavoriteMovies[0] = 'Mamma Mia'
// leastFavoriteMovies[1] = 'Waterworld'
// leastFavoriteMovies[2] = 'Jersey Girl'

// movies = movies.concat(leastFavoriteMovies)

// movies.reverse()

// let leastFavoriteIndexes = []
// leastFavoriteIndexes[0] = movies.indexOf('Mamma Mia')
// leastFavoriteIndexes[1] = movies.indexOf('Waterworld')
// leastFavoriteIndexes[2] = movies.indexOf('Jersey Girl')

// movies[leastFavoriteIndexes[0]] = 'A Bronx Tale'
// movies[leastFavoriteIndexes[1]] = 'Goodfellas'
// movies[leastFavoriteIndexes[2]] = 'Rocky'


//STEP 13
// Using M8 Powerpoint slide #57 in combination with slide #43
// let movies = [
//     ['A Few Good Men', 1], 
//     ['Die Hard', 2],
//     ['The Fugitive', 3],
//     ['Rush Hour', 4],
//     ['National Treasure', 5]
// ]

// // listArray(movies)

// for (let m = 0; m < movies.length; m++) {
//     let movieNames = movies[m].filter((movie) => {
//         return typeof movie === 'string'
//     })
//     console.log(movieNames)
// }


//STEP 14
// let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally']

// const showEmployee = function(empArray) {          // Anonymous fuction
//     console.log('Employees:')
//     console.log('')
//     for (let e of employees) {
//         console.log(e.toUpperCase())
//     }
// }

// showEmployee(employees);


//STEP 15
// Using M8 Powerpoint slide #52 in combination with slide #43
// function filterValues(arrayIn) {
//     return arrayIn.filter( (item) => {
//         return (item != false && item != null && item != 0 && item != '')
//     })
// }

// console.log(filterValues([58, '', 'abcd', true, null, false, 0]))


// //STEP 16
// const getRandomNumFromArray = (inArray) => {

//     if (Array.isArray(inArray) && inArray.length > 0) {
//         let idx = Math.round(Math.floor(Math.random() * inArray.length))      // returns a random number 0 to Array Length-1
//         return inArray[idx]
//     }
//     else {
//         return 'Parameter is not an array or is an empty array.'
//     }
// }

// const numbers = [50, 10, 100, 60, 80, 30, 40, 90, 20, 70]
// console.log(getRandomNumFromArray(numbers))

// /**************************************************************
//  NOTE:  I also ran the following tests...

// const strings = ['monkey', 'cats', 'apes', 'lions', 'dogs', 'pigs', 'goats', 'chickens', 'ducks', 'horses']
// console.log(getRandomNumFromArray('Text is not an Array'))
// console.log(getRandomNumFromArray([]))
// console.log(getRandomNumFromArray(strings))
//  **************************************************************/


//STEP 17
/**************************************************************
 NOTE:  While I could have just used Math.max(...numbers)) for the numbers array, I didn't think that was what you wanted. 
        Plus, it doesn't support strings (so I created the anonymous function 'getLargest' to handle both numbers & strings)!

        console.log(Math.max(...numbers))   // returns 100
        console.log(Math.max(...strings))   // returns NaN
***************************************************************/
const getLargest = (inArray) => {

    if (Array.isArray(inArray) && inArray.length > 0) {
        let largest = inArray[0]
        
        for (let item of inArray) {
            if (item > largest) {
                largest = item
            }
        }

        return largest
    }
    else {
        return 'Parameter is not an array or is an empty array.'
    }
}

const numbers = [50, 10, 100, 60, 80, 30, 40, 90, 20, 70]
console.log(getLargest(numbers))

/**************************************************************
 NOTE:  I also ran the following tests...
        const strings = ['monkeys', 'cats', 'apes', 'zebras', 'dogs', 'pigs', 'goats', 'chickens', 'ducks', 'horses']

        console.log(getLargest('Text is not an Array'))
        console.log(getLargest([]))
        console.log(getLargest(strings))
**************************************************************/
 
