import styled from "styled-components";

const Button = styled.button`
    /* background-color: #0077cc; */
    background-color: ${props => props.$backgroundColor || "#0077cc"};
    color : #ffffff;
    font-size: 1rem;
    margin : 1rem;
    padding : 0.25em 1em;
    border : 2px solid #0077cc;
    border-radius: 3px;
`;

export default Button;