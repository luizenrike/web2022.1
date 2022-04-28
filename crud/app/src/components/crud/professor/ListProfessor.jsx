import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ProfessorTableRow from "./ProfessorTableRow";
import axios from "axios";

function ListProfessor() {
    const [professor, setProfessors] = useState([])

    useEffect(
        () => {
            axios.get("http://localhost:3002/crud/professors/list")
            .then(
                (res)=>{
                    setProfessors(res.data)
                }
            )
            .catch(
                (error) => {
                    alert("Error: " + error)
                }
            )
        },
        []
    )

    function generateTable() {
        if(!professor) return
        return professor.map(
            (professor,i) => {
                return <ProfessorTableRow professor={professor} key={i} />
            }
        )
    }

    return (
        <>
            <main>
                <h2>
                    Listar Professores
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Universidade</th>
                            <th>Titulo</th>
                            <th colSpan={4} style={{textAlign:"center"}}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generateTable()}
                    </tbody>
                </table>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default ListProfessor;