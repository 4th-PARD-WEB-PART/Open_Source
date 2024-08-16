import styled from "styled-components";

import Button from "./Button";
import DangerButton from "./DangerButton";

function StyledComponents() {

    return (
        <div>
            <Button>Click Me!</Button>
            <DangerButton>Danger Button</DangerButton>
            <Button $backgroundColor = "green">Green Button</Button>
        </div>
    )
}

// const Button = styled.button`
//     background-color: #0077cc;
//     color : #ffffff;
//     font-size: 1rem;
//     margin : 1rem;
//     padding : 0.25em 1em;
//     border : 2px solid #0077cc;
//     border-radius: 3px;
// `;

// const DangerButton = styled(Button)`
//     background-color: #ff0000;
//     border-color: #ff0000;

//     &:hover{
//         background: blue;
//     }
// `;


export default StyledComponents;