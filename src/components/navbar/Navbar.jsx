import React from 'react'
import { Container, Logo, Left, Right } from './styles'

export default function Navbar({title, logo}) {
    return (
        <Container>
            <Left>
                <Logo src={logo} title={title} />
            </Left>
            <Right>

            </Right>
        </Container>
    )
}
