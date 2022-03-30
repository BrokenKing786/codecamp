let students = [{ name: 'abhinav', rollNo: 2 },
{ name: 'ananthu', rollNo: 19 }, { name: 'akash', rollNo: 9 }]


function enrollStudents(student,callback) {
    setTimeout(() => {
        students.push(student);
        console.log('student enrolled');
        callback();
    }, 3000);
}

function getStudents() {


    setTimeout(() => {
        let str = '';
        students.forEach(function (x) {
            str += `<li>${x.name}</li>`
            document.getElementById('hey').innerHTML = str;
        })
        console.log('student fetched');
    }, 1000);

}

enrollStudents({ name: 'ankit', rollNo: 69 },getStudents);
// getStudents();
