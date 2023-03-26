"use strict"

const student= {
  name: '',
  lastName: '',
  tabel: {},
  getNameLastName() {
    this.name= prompt('Write your Name');
    this.lastName= prompt('Write your Last Name');
  },
  getTabel() {
    while (true) {
      let subject= prompt('Write a subject');
      if (subject=== null) {
        break;
      }
      student.tabel[subject]= +prompt(`Write a grade for a subject ${subject}`);
    };
},
  badGrades() { 
    for (let key in this.tabel) {
      if (this.tabel[key] < 4) {
        continue;
      } else {
        console.log("Student was transfered to the next course");
        break;
      }
    };
  },
  averageGrade() { 
    let averageGrade= 0;
    for (let key in this.tabel) {
      averageGrade += this.tabel[key];   
    };
    if (averageGrade > 7) {
      console.log("Grands was assigned for the student");
    }
  },
};

student.getNameLastName();
student.getTabel();
student.badGrades();
student.averageGrade();
console.log(student);
