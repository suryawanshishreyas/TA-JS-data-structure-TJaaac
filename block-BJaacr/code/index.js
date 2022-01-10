/*
Game of Thrones : Houses And People's Name
Try to first understand how Array in Objects & Objects in Array are arranged in this example.
Only when you don't get it by yourself, comeback again and read the hint
*/

// Write code for the following problems:
console.log(got);

// You have access to a variable named `got`. Which comes from `data.js` file

/*
Hint: (Structure of got variable)
  - got variable is an Object which has one key: `houses`
  - `houses` is an array of multiple house
  - Each house is an Object which has two keys: "name" and "people"
  - people is an array of all persons living in that particular house
  - And, each person is an object with "name" and "description" properties
*/

// 1. Log the value of key "houses"
console.log(got.houses);
// 2. Log the length of the "houses" key
console.log(got.houses.length);
// 3. Log the name of all houses in got one by one
console.log(got.houses[0].name);
console.log(got.houses[1].name);

// 4. Log the name of all the people in house Starks (index 0) one by one
console.log(got.houses[0].people[0].name);
console.log(got.houses[0].people[1].name);
console.log(got.houses[0].people[2].name);
console.log(got.houses[0].people[3].name);
console.log(got.houses[0].people[4].name);
console.log(got.houses[0].people[5].name);
console.log(got.houses[0].people[6].name);
console.log(got.houses[0].people[7].name);
// 5. Log the name of all the people in house Lannisters (index 1) one by one
console.log(got.houses[1].people[0].name);
console.log(got.houses[1].people[1].name);
console.log(got.houses[1].people[2].name);
console.log(got.houses[1].people[3].name);
// 6. Log the description of all the people in house Lannisters (index 1) one by one
console.log(got.houses[1].people[0].description);
console.log(got.houses[1].people[1].description);
console.log(got.houses[1].people[2].description);
console.log(got.houses[1].people[3].description);
// 7. Log the name and description of all the people in house Lannisters (index 1) one by one like `I am [name] and my bio is [description]`
console.log(`I am ${got.houses[1].people[0].name} and my bio is ${got.houses[0].people[0].description}`);
console.log(`I am ${got.houses[1].people[1].name} and my bio is ${got.houses[0].people[1].description}`);
console.log(`I am ${got.houses[1].people[2].name} and my bio is ${got.houses[0].people[2].description}`);
console.log(`I am ${got.houses[1].people[3].name} and my bio is ${got.houses[0].people[3].description}`);
// 8. Log the name and description of all the people in house Starks (index 0) one by one like `I am [name] and my bio is [description]`
console.log(`I am ${got.houses[0].people[0].name} and my bio is ${got.houses[0].people[0].description}`);
console.log(`I am ${got.houses[0].people[1].name} and my bio is ${got.houses[0].people[1].description}`);
console.log(`I am ${got.houses[0].people[2].name} and my bio is ${got.houses[0].people[2].description}`);
console.log(`I am ${got.houses[0].people[3].name} and my bio is ${got.houses[0].people[3].description}`);
// 9. Log the name and description of the people in house Starks whose name is `Robb Stark`
console.log(` ${got.houses[0].people[2].name} ${got.houses[0].people[2].description}`);
// 10. Log the name and description of the people in house Lannisters whose name is `Tywin Lannister`
console.log(`${got.houses[1].people[0].name} ${got.houses[1].people[0].description}`);
// 11. Push the name of the houses in an array named `houseNames` and Log the array
let houseNames=[];
houseNames.push(got.houses[0].name);
houseNames.push(got.houses[1].name);
// 12. Log the size of people in Starks house
console.log(got.houses[0].people.length);
// 13. Log the size of people in Lannisters house
console.log(got.houses[1].people.length);
// 14. Add the name and size of people in an object like {Starks: 4, Lannisters: 6} and log the object
console.log(`${got.houses[0].name}: ${got.houses[0].people.length}, ${got.houses[1].name}: ${got.houses[1].people.length}`);
// 15. Log the name of all the people of all the houses in got one by one
console.log(got.houses[0].people[0].name);
console.log(got.houses[0].people[1].name);
console.log(got.houses[0].people[2].name);
console.log(got.houses[0].people[3].name);
console.log(got.houses[0].people[4].name);
console.log(got.houses[0].people[5].name);
console.log(got.houses[0].people[6].name);
console.log(got.houses[0].people[7].name);
console.log(got.houses[1].people[0].name);
console.log(got.houses[1].people[1].name);
console.log(got.houses[1].people[2].name);
console.log(got.houses[1].people[3].name);
// 16. Push all names into a new array named `allPeople` and log the value array.
let allPeople=[];
allPeople.push(got.houses[0].people[0].name,
   got.houses[0].people[1].name,
   got.houses[0].people[2].name,
   got.houses[0].people[3].name,
   got.houses[0].people[4].name,
   got.houses[0].people[5].name,
   got.houses[0].people[6].name,
   got.houses[0].people[7].name,
   got.houses[1].people[0].name,
   got.houses[1].people[1].name,
   got.houses[1].people[2].name,
   got.houses[1].people[3].name
   );
// 17. Log the value and length of `allPeople` array created above
console.log(`Value: ${allPeople} length: ${allPeople}`);
// 18. Push all descriptions into an array named `allDescription`
let allDescription=[];
allDescription.push(got.houses[0].people[0].description,
  got.houses[0].people[1].description,
  got.houses[0].people[2].description,
  got.houses[0].people[3].description,
  got.houses[0].people[4].description,
  got.houses[0].people[5].description,
  got.houses[0].people[6].description,
  got.houses[0].people[7].description,
  got.houses[1].people[0].description,
  got.houses[1].people[1].description,
  got.houses[1].people[2].description,
  got.houses[1].people[3].description,
  );
// 19. Log the value and length `allDescription`
console.log(`Value: ${allDescription} length: ${allDescription.length}`);
// 20. Only the the description whose length is more than 30. (use .length property on string to get the length)
for(i=0;i<12;i++){
  if(allDescription[i].length < 30){
    console.log(`description${i} is longer than 30`);
  }
}