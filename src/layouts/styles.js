import styled from 'styled-components'

export const Content = styled.div`
    width: 100%;
    min-height: 100%;
    padding: 105px 0 40px 260px;
    background-color: #f5f5f5;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    @media (max-width:850px) {
        ${Content} {
            padding-left: 0;
        }
    }
`;
