import React from 'react'
import { Container, UserInfo, MenuArea } from './styles'
import { Menu } from 'primereact/menu';

export default function Sidebar({usuario, cargo, imagem, items}) {
    return (
        <Container>
            <UserInfo>
                <img src={imagem} alt="perfil"/>
                <p>{usuario}</p>
                <span>{cargo}</span>
            </UserInfo>
            <MenuArea>
                <Menu model={items}/>
            </MenuArea>
        </Container>
    )
}
