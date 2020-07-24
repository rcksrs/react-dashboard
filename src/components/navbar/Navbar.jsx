import React, { useRef } from 'react'
import { Menu } from 'primereact/menu'
import { Button } from 'primereact/button'

import { Container, Logo, Left, Right, Toggle } from './styles'

export default function Navbar({title, logo, items}) {
    const menu = useRef(null);

    return (
        <Container>
            <Left>
                {items && 
                    <Toggle>
                        <Menu model={items} popup={true} ref={menu} />
                        <Button icon="pi pi-bars" onClick={e => menu.current.toggle(e)}/>
                    </Toggle>
                }
                <Logo src={logo} title={title} />
            </Left>
            <Right>

            </Right>
        </Container>
    )
}
