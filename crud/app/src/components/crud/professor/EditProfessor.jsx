import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function EditProfessor() {
    
    const [name,setName] = useState("")
    const [university,setUniversity] = useState("")
    const [degree,setDegree] = useState("")
    const params = useParams()
    const navigate = useNavigate()

    useEffect(
        () => {
            axios.get("http://localhost:3002/crud/professors/retrieve/" + params.id)
            .then(
                (res) => {
                    setName(res.data.name)
                    setUniversity(res.data.university)
                    setDegree(res.data.degree)
                }
            )
            .catch(
                (error) => {
                    alert("Erro ao buscar para atualizar: " + error);
                }
            )
        }
        ,
        [params.id]
    )

    const handleSubmit = (event) => {
        event.preventDefault()
        const updateProfessor = {name: name, university: university, degree: degree}
        axios.put("http://localhost:3002/crud/professors/update/" + params.id, updateProfessor)
        .then(
            (res) => {
                alert("Professor: " + name + " atualizado.")
                navigate("/listProfessor")
            }
        )
        .catch(
            (error) => {
                alert("Erro ao atualizar: " + error)
            }
        )
    }

    return (
        <>
            <main>
                <h2>
                    Editar Professor
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text"
                            className="form-control"
                            value={(name == null || name === undefined) ? "" : name}
                            name="name"
                            onChange={(event) => { setName(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>University: </label>
                        <input type="text"
                            className="form-control"
                            value={university ?? ""}
                            name="university"
                            onChange={(event) => { setUniversity(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Degree: </label>
                        <input type="text"
                            className="form-control"
                            value={degree ?? ""}
                            name="degree"
                            onChange={(event) => { setDegree(event.target.value) }} />
                    </div>
                    <div className="form-group" style={{ paddingTop: 20 }}>
                        <input type="submit" value="Atualizar Professor" className="btn btn-primary" />
                    </div>
                </form>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default EditProfessor;