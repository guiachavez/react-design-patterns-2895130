import { SplitScreen } from './SplitScreen';

const LeftHandComponent = ({ name }) => {
  return <h1 style={{backgroundColor: 'green'}}>{name}</h1>
}

const RightHandComponent = ({ message }) => {
  return <h1 style={{backgroundColor: 'red'}}>{message}</h1>
}

const SideHandComponent = () => {
  return <h1 style={{backgroundColor: 'yellow'}}>Side</h1>
}

function App() {
  return (
    // passing as props
    // <SplitScreen 
    //   left={LeftHandComponent}
    //   right={RightHandComponent}
    //   leftWeight={1}
    //   rightWeight={3}
    // />


    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="Shaun"/>
      <RightHandComponent message="hello"/>
      <SideHandComponent />
    </SplitScreen>
  );
}

export default App;
