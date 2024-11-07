import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 2px solid #FFFFFF;
    background-color: ${props => props.color || '#111111'};
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    
    &:hover {
        opacity: 0.6;
    }
`