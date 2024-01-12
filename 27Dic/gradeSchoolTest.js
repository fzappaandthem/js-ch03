

const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});

class GradeSchool {

  
    constructor(){
      this.grades=new Array();
    }
    
    roster() {
        const gradesObj = {};
        this.grades.forEach((alumnos, grado)=>{
            gradesObj[grado]=Array.from(alumnos);
        });
        return gradesObj;
    }
  
    add(name, grade) {
        this.grades.forEach((alumnos, grado)=>{
            if(grado!==grade && Array.from(alumnos).includes(name))
            {
                console.log(`${name} está en el grado ${grado}, estoy intentando agregarlo al grado ${grade}`);
                alumnos.delete(name);
            }
        });
        if(this.grades[grade]){
            (this.grades[grade]).add(name);
            this.grades[grade]=new Set(Array.from(this.grades[grade]).sort());
        }
        else
        {
            this.grades[grade]=new Set();
            this.add(name, grade);
        }
    }
  
    grade(number) {
      if(this.grades[number]){
        return Array.from(this.grades[number]);
      }
      else
      {
        return [];
      }
    }
  }
  
  school = new GradeSchool();
//   school.add('Roco', 2);
//   school.add('Roco', 2);
//   school.add('Aimee', 2);
//   school.add('Rosco', 3);
//   school.add('Roco', 3);
//   school.grade(1);
//   console.log(school.grade(2));

school.add('Jennifer', 4);
school.add('Kareem', 6);
school.add('Christopher', 4);
school.add('Kyle', 3);

  console.log(school.roster());
//   console.log(school.grade(2));
//   console.log(school.grade(3));

