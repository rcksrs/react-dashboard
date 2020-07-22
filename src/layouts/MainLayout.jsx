import React from 'react'
import { Navbar, Sidebar } from 'components'
import { Container, Content } from './styles'

export default function MainLayout() {
    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Users', icon: 'pi pi-fw pi-users'},
        {label: 'Systems', icon: 'pi pi-fw pi-th-large'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {
            label: 'Options',
            items: [{label: 'New', icon: 'pi pi-fw pi-plus',command:()=>{ window.location.hash="/fileupload"; }},
                    {label: 'Delete', icon: 'pi pi-fw pi-trash', url: 'http://primetek.com.tr'}]
        },
        {
            label: 'Account',
            items: [{label: 'Options', icon: 'pi pi-fw pi-cog',command:()=>{ window.location.hash="/"; }},
                    {label: 'Sign Out', icon: 'pi pi-fw pi-power-off'} ]
        }
    ]

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
            <Sidebar items={items} usuario="Katarina Smith" cargo="Sales Manager" imagem="https://react-material-kit.devias.io/static/images/avatars/avatar_6.png" />
            <Content>Texto</Content>
        </Container>
    )
}
