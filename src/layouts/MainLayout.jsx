import React from 'react'
import { useHistory } from "react-router-dom"
import { Navbar, Sidebar } from 'components'
import { Container, Content } from './styles'

export default function MainLayout(props) {
    const history = useHistory()
    
    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home', command: () => { history.push('/') }},
        {label: 'Systems', icon: 'pi pi-fw pi-th-large', command:()=>{ history.push('/about') }},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {
            label: 'Options',
            items: [
                {label: 'Users', icon: 'pi pi-fw pi-users'},
                {label: 'New User', icon: 'pi pi-fw pi-user-plus'},
                {label: 'Delete User', icon: 'pi pi-fw pi-user-minus'}
            ]
        },
        {
            label: 'Account',
            items: [
                {label: 'Options', icon: 'pi pi-fw pi-cog'},
                {label: 'Sign Out', icon: 'pi pi-fw pi-power-off', url: 'http://primetek.com.tr'}
            ]
        }
    ]

    return (
        <Container>
            <Navbar title="Logo" logo="https://react-material-kit.devias.io/static/logo.svg">
                {/*
                    <NavOptions>
                        <NavOption icon="icon_1" />
                        <NavOption icon="icon_2" />
                    </NavOptions>
                    <NavUserInfo image="user_image" title="Katarina Smith" /> 
                */}
            </Navbar>
            <Sidebar items={items} usuario="Katarina Smith" cargo="Sales Manager" imagem="https://react-material-kit.devias.io/static/images/avatars/avatar_6.png" />
            <Content>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {props.children}
                        </div>
                    </div>
                </div>
            </Content>
        </Container>
    )
}
