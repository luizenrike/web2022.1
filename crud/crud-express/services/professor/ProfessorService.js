const ProfessorModels = require("../../models/professor/ProfessorModels")

let professors = [
    {id: 0, name: "Marcos LaBanca Fiuza", university: "Università Ca' Foscari", degree: "Magistrado"},
    {id: 1, name: "Anthony Davenport", university: "University of Georgia", degree: "Doutorado"},
    {id: 2, name: "Alihajan Maquirosaqui", university: "Indian Institute of Technology Delhi", degree: "Pós-Doutorado"}
]

let id = 3

class ProfessorService{
    static list(){
        return professors
    }

    static create(data){
        let professor = new ProfessorModels(
            id++,
            data.name,
            data.university,
            data.degree
        );
        professors.push(professor)
        return true
    }

    static retrieve(id){
        for(let i = 0; i < professors.length; i++){
            if(professors[i].id == id){
                return professors[i]
            }
        }
        return {}
    }

    static update(id, data){
        for(let s of professors){
            if(s.id == id){
                s.name = data.name;
                s.university = data.university;
                s.degree = data.degree;
                return s;
            }
        }
        return false;
    }

    static delete(id){
        for(let i = 0; i < professors.length; i++){
            if(professors[i].id == id){
                professors.splice(i, 1)
                return true
            } 
        }
        return false;
    }
}

module.exports = ProfessorService;