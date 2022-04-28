import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProfessorTableRow = ({professor}) => {
    const {id, name,university,degree} = professor 
    
    function deleteProfessor(){
        if(window.confirm(`Deseja excluir o professor com numero de ID: ${id}?`)){
            axios.delete(`http://localhost:3002/crud/professors/delete/${id}`)
            //window.location.reload()
            .then(
                (res) => {
                    alert("Professor(a) removido.")
                    window.location.reload()
                    

                }
            )
            .catch(
                (error) => {
                    console.log(error.response.data)
                    alert("Erro ao deletar: " + error)

                }
            )
        }
    }

    return (
        <tr>
            <td>
                {id}
            </td>
            <td>
                {name}
            </td>
            <td>
                {university}
            </td>
            <td>
                {degree}
            </td>
            <td style={{textAlign:"center"}}>
                <Link to={`/editProfessor/${id}`} className="btn btn-primary">Editar</Link>
            </td>
            <td style={{textAlign:"center"}}>
                <button className="btn btn-danger" onClick={() => deleteProfessor()}>Apagar</button>
            </td>
        </tr>
    )
}

export default ProfessorTableRow;