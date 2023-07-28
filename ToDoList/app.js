//DOM Elements
const studentForm = document.getElementById("studentForm")
const studentsContainer = document.querySelector('.students')
const nameInput = studentForm["name"]
const ageInput = studentForm["age"]
const rollInput = studentForm["roll"]


/* 
{
    name:'',
    age:number,
    roll:number
}

*/

const students = JSON.parse(localStorage.getItem("students")) || []
//key=students
//   ||[]==> 假如沒有 一個陣列則創造新的


const addStudent = (name, age, roll) => {
    students.push({
        name,
        age,
        roll
    });
    localStorage.setItem("students", JSON.stringify(students))
    //first students is the key

    return { name, age, roll };
};

const createStudentElement = ({ name, age, roll }) => {
    //create Elements
    const studentDiv = document.createElement('div');
    const studentName = document.createElement('h2');
    const studentAge = document.createElement('p');
    const studentRoll = document.createElement('p');
    //fill the content
    studentName.innerText = "Student name:" + name;
    studentAge.innerText = "Student age:" + age;
    studentRoll.innerText = "Student roll:" + roll;
    // add to the Dom
    studentDiv.append(studentName, studentAge, studentRoll);
    studentsContainer.appendChild(studentDiv);



    studentsContainer.style.display = students.length === 0 ? "none" : "flex";
};

studentsContainer.style.display = students.length === 0 ? "none" : "flex";
//if length ===0 then it's going to be none 
//else it's going to be flexed


students.forEach(createStudentElement)

studentForm.onsubmit = (e) => {
    e.preventDefault();
    const newStudent = addStudent(
        nameInput.value,
        ageInput.value,
        rollInput.value
    );
    createStudentElement(newStudent)

    nameInput.value = ""
    ageInput.value = ""
    rollInput.value = ""
};


