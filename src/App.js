
import styled from 'styled-components';
import Search from './Search';

const AppStyles = styled.div`
margin: 10px;
padding: 10px;
text-align: center;
`;

export default function App() {
  return (
    <AppStyles>
      <header>
      Hello Dictionary
      </header>
      <Search/>
    </AppStyles>
  );
}


