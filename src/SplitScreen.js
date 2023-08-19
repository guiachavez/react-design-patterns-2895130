
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Pane = styled.div`
    flex: ${props => props.weight};
`
// passing as props
// export const SplitScreen = ({
//     left: Left, 
//     right: Right,
//     leftWeight = 1,
//     rightWeight = 1
// }) => {
//     return (
//         <Container>
//             <Pane weight={leftWeight}>
//                 <Left />
//             </Pane>
//             <Pane weight={rightWeight}>
//                 <Right />
//             </Pane>
//         </Container>
//     );
// }


export const SplitScreen = ({
    children,
    leftWeight = 1,
    rightWeight = 1,
    sideWeight=1
}) => {
    const [left, right, side] = children
    return (
        <Container>
            <Pane weight={leftWeight}>
                {left}
            </Pane>
            <Pane weight={rightWeight}>
                {right}
            </Pane>
            <Pane weight={sideWeight}>
                {side}
            </Pane>
        </Container>
    );
}