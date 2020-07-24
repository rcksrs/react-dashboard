import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 65px;
    width: 260px;
    height: calc(100% - 65px);
    background-color: #fff;
    border-right: 1px solid rgba(0,0,0,0.12);
    display: flex;
    flex-direction: column;
    z-index: 500;
    @media (max-width:850px) {
        display: none;
    }
`;

export const UserInfo = styled.div`
    width: 100%;
    height: 150px;
    padding: 40px;
    border-bottom: 1px solid rgba(0,0,0,0.12);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 65px;
        height: 65px;
        border-radius: 50%;
    }
    p {
        margin-top: 12px;
        font-weight: bold;
    }
    span {
        margin-top: 3px;
        color: #546e7a;
        font-size: 14px;
    }
`;

export const MenuArea = styled.div`
    padding-top: 2px;
    width: 100%;
    height: 100%;
    max-height: 670px;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #aaa;
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;
