import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    height: 65px;
    width: 100%;
    background-color: #3949ab; /* var(--primaryColor) */    
    padding: 0 30px;
    display: flex;
    z-index: 1000;
`;

export const Toggle = styled.div`
    .p-button {
        background-color: transparent;
        border: 0;
        display: none;
        @media (max-width:850px) {
            display: block;
            margin-right: 15px;
        }
    }
    
`;

export const Left = styled.div`
    width: 50%;
    height: 100%;
    /* border: 1px solid; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const Right = styled.div`
    width: 50%;
    height: 100%;
    /* border: 1px dashed red; */
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const Logo = styled.div`
    width: 40px;
    height: 40px;
    background: url('${props => props.src}') no-repeat center;
    background-size: contain;
    position: relative;
    &::after {
        content: '${props => props.title}';
        position: absolute;
        width: 175px;
        font-size: 20px;
        color: white;
        left: ${props => props.src ? '55px' : '0px'};
        top: 20%;
    }
`;
