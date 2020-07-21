import React from 'react'
import { Container, UserInfo, MenuArea } from './styles'

export default function Sidebar({usuario, cargo, imagem}) {
    return (
        <Container>
            <UserInfo>
                <img src={imagem} alt="perfil"/>
                <p>{usuario}</p>
                <span>{cargo}</span>
            </UserInfo>
            <MenuArea>

            </MenuArea>
        </Container>
    )
}
