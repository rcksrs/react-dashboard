import React from 'react'
import { Navbar, Sidebar } from 'components'
import { Container, Content } from './styles'

export default function MainLayout() {
    return (
        <Container>
            <Navbar title="Logo" logo="https://react-material-kit.devias.io/static/logo.svg">
                {/* <NavItems>
                    <NavItem title="Item 1" />
                    <NavItem title="Item 2" />
                    <NavItem title="Item 3" />
                </NavItems>
                <NavOptions>
                    <NavOption icon="icon_1" />
                    <NavOption icon="icon_2" />
                </NavOptions>
                <NavUserInfo image="user_image" title="Katarina Smith" /> */}
            </Navbar>
            <Sidebar usuario="Katarina Smith" cargo="Sales Manager" imagem="https://react-material-kit.devias.io/static/images/avatars/avatar_6.png" />
            <Content>
                Texto
            </Content>
        </Container>
    )
}
