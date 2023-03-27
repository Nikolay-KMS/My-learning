"use strict"

const obj= {
  firstLevel1: 1,
  firstLevel2: 2,
  firstLevel3: 3,
  secondObj: {
    secondLevel1: 4,
    secondLevel2: 5,
    thirdObj: {
      thirdLevel1: 6,
      thirdLevel2: 7,
      thirdLevel3: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      fourthdObj: {
        fourthLevel1: 8,
        fourthLevel2: 9,
        fifthdObj: {
          fifthLevel1: 10,
          fifthLevel2: 11,
        },
      },
    },    
  }, 
};
function clone(oldObject) {
  const newObject = {};
  for (let key in oldObject) {
    if (typeof oldObject[key] === "object") {
      newObject[key] = clone(oldObject[key]);
    } else {
      newObject[key] = oldObject[key];
    };
  };
  return newObject;
};
const obj2 = clone(obj);
obj2.secondObj.thirdObj.thirdLevel1 = "new 6";
obj2.secondObj.thirdObj.thirdLevel3[0].name = "new Name))";
console.log(obj);
console.log(obj2);


