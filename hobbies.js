// let rs = require('readline-sync');

// //prompt name question
// //prompt favorite hobby
// //ask if there are more hobbies
// //add hobbies to list
// //store list of users hobbies
// //print the user hobby list at the end

// let hobbies = [];
// let areYouSure = false;
// let moreHobbies = 0;

// function getHobbyCount() {
//   moreHobbies = rs.questionInt('How many other hobbies do you have? ');
// }

// function addHobbies(numHobbies) {
//   let counter = 0;
//   while(counter < numHobbies) {
//     let input = rs.prompt();
//     hobbies.push(input);
//     counter++;

//     if (counter < moreHobbies) {
//       console.log('--Awesome! "' + input + '" is cool! What\'s the other ' + (numHobbies - counter) + '?')
//     } else {
//       console.log('I wish I could do ' + hobbies + '...but I\'m not even real');
//     }
//   }
// }

// const userName = rs.question('What is your name? ');
// const favHobby = rs.question('What is your favorite hobby? ');

// hobbies.push(favHobby);
// getHobbyCount();

// if (moreHobbies > 0) {
//   console.log('Cool what are they?')
//   addHobbies(moreHobbies);
// }else {
//   areYouSure = rs.keyInYN('Are you sure ' + hobbies[0] + ' is all you like to do? ')
// }

// if (!areYouSure && hobbies.length <= 1) {
//   getHobbyCount();
//   console.log('Cool what are they?')
//   addHobbies(moreHobbies);
//   //add hobbies  
// } else if (areYouSure) {
//   console.log(hobbies + ' is cool, good for you.');
// }