import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CreateProfessor() {

    const [name,setName] = useState("")
    const [university,setUniversity] = useState("")
    const [degree,setDegree] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const newProfessor = {name, university, degree}
        axios.post('http://localhost:3002/crud/professors/create', newProfessor)
        .then(
            (res) => {
                alert('O professor(a) foi adicionado em nossa base de dados.')
                navigate("/listProfessor")
            }
        )
        .catch(
            (error) => {
                alert("Error: " + error)
            }
        )

        
    }

    return (
        <>
            <main>
                <h2>
                    Criar Professor
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text" 
                               className="form-control" 
                               value={(name==null || name===undefined)?"":name}
                               name="name" 
                               onChange={(event)=>{setName(event.target.value)}}/>
                    </div>
                    <div className="form-group">
                        <label>University: </label>
                        <input type="text" 
                               className="form-control"
                               value={university ?? ""}
                               name="university" 
                               onChange={(event)=>{setUniversity(event.target.value)}}/>
                    </div>
                    <div className="form-group">
                        <label>Degree: </label>
                        <input type="text" 
                               className="form-control"
                               value={degree ?? ""}
                               name="degree" 
                               onChange={(event)=>{setDegree(event.target.value)}}/>
                    </div>
                    <div className="form-group" style={{paddingTop:20}}>
                        <input type="submit" value="Criar Professor" className="btn btn-primary"/>
                    </div>
                </form>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default CreateProfessor;