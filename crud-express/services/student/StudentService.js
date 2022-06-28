const StudentModel = require('../../models/student/StudentModel')

let students = [
    {_id: 0, name: "Henrique", course: "Engenharia Aeroespacial", ira: 8.7},
    {_id: 1, name: "José", course: "Agronomia", ira: 7.7}
]
let _id = 2

class StudentService{
    static list(){
        return students
    }

    static create(data){
        let student = new StudentModel(
            _id++,
            data.name,
            data.course,
            data.ira
        );
        students.push(student);
        return student;

    }

    static retrieve(_id){
        for(let i = 0; i < students.length; i++){
            if(students[i]._id == _id){
                return students[i];
            }
        }
        return {};
    }

    static update(_id, data){
        for(let s of students){
            if(s._id == _id){
                s.name = data.name
                s.course = data.course
                s.ira = data.ira
                return s;
            }
        }
        return false;
    }

    

    static delete(_id){
        for(let i = 0; i < students.length; i++){
            if(students[i]._id == _id){
                students.splice(i,1);
                return true;
            }
        }
        return false;
    }

    
}

module.exports = StudentService