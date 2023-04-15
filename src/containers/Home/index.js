import React, { useState, useRef } from "react";



import lixo from '../../assets/lixo.png'
import people from "../../assets/person.png"
import arou from "../../assets/arou.svg"
import H1 from "../../components/Title"

import ContainerItens from "../../components/ContainerItens";
import ContainerButton from "../../components/Button"

import { Container, Imagem, InputLabel, Input,Usser } from "./styles"



function App() {
    const [users, setUsers] = useState([])

    const inputName = useRef('')
    const inputAge = useRef('')

 
    async function addNewUser() {

        setUsers([...users, { id: Math.random(), name: inputName.current.value, age: inputAge.current.value }])

    
    }


    function deleteUser(userId) {

        const newUsers = users.filter((user) => user.id !== userId)
        setUsers(newUsers)
    }

    return (

        <Container>
            <Imagem alt="logo" src={people} />

            <ContainerItens>


                <H1>Olá!</H1>

                <InputLabel>Nomee</InputLabel>
                <Input ref={inputName} placeholder="nomes"></Input>

                <InputLabel>Idade</InputLabel>
                <Input ref={inputAge} placeholder="Idade"></Input>

                <ContainerButton onClick={addNewUser} >Cadastrar  <img alt="seta" src={arou} /></ContainerButton>



                <ul>
                {
                    users.map((user) => (
                        <Usser key={user.id}>
                            <p>{user.name}</p>  <p> {user.age}</p>
                            <button onClick={() => deleteUser(user.id)}>  <img alt="lixo" src={lixo} /> </button>
                        </Usser>
                    ))
                }
            </ul>

            </ContainerItens>
        </Container>



    )
}

export default App