import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    height: 65px;
    width: 100%;
    background-color: #3949ab;
    padding: 0 30px;
    display: flex;
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
    border: 1px dashed red;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const Logo = styled.div`
    width: 50px;
    height: 50px;
    background: url('${props => props.src}') no-repeat center;
    background-size: contain;
    position: relative;
    &::after {
        content: '${props => props.title}';
        position: absolute;
        width: 175px;
        font-size: 22px;
        color: white;
        left: ${props => props.src ? '60px' : '0px'};
        top: 22%;
    }
`;
