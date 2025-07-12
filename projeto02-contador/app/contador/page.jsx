"use client";
import { useState } from "react"

export default function contador() {

    const container = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    }

    const estiloValor = {
        fontSize: '32px',
        marginBottom: '20px',
    }

    const estiloBotao = {
        border: "2px solid black",
        borderRadius: "10px",
        padding: "10px 20px",
        fontSize: "16px",
        marginLeft: "10px",
    }

    const estiloTitulo = {
        position: "absolute",
        top: "30px",
        textAlign: "center",
        fontSize: "48px",
    }

    const arrayValor = useState(0)
    let valor = arrayValor[0]
    const alterarValor = arrayValor[1]


    function subtrairValor(){
        alterarValor(valor - 1)
    }
    function somarValor(){
        alterarValor(valor + 1)
    }


    return (
        <div style={container}>
            <h1 style={estiloTitulo}>Contador</h1>

            <div style={estiloValor}>Valor: {valor}</div>

            <div>
                <button style={estiloBotao} onClick={subtrairValor}>-</button>
                <button style={estiloBotao} onClick={somarValor}>+</button>
            </div>
        </div>
    )
}
