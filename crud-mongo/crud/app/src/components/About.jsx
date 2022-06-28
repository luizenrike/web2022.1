import * as React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <main>
                <h3>Página About</h3>
            </main>
            <nav>
                <Link to="/">Voltar para Home</Link>
            </nav>
        </>
    );
}

export default About