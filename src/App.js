

import styled from 'styled-components';
import { useTheme, useThemeUpdate } from './context/ThemeContext';
import Search from './Search';
import { ReactComponent as Bulb } from './assets/bulb.svg';

const IconStyles = styled.button`
margin-top: 30px; 
background:  transparent;
border: none;
svg {
height: 80px;
margin: 20px;
fill: ${props => props.darkTheme ? '#ffd816' : 'black'};
transition: 1s ease-in-out;
animation: flickerAnimation 2s infinite;
}
svg:hover {
  
  cursor: pointer;
}

@keyframes flickerAnimation {
  0%   { opacity:1; }
  50%  { opacity:0.25; }
  100% { opacity:1; }
}
`;


export default function App() {

  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()

  const light = "#FFFFFF";
  const themeStyles = {
    backgroundColor: darkTheme ? "#202020" : light,
    color: darkTheme ? light : "#202020",
    textAlign: "center",
    height: "100%",
    overflow: "auto", // bg color expands with child height
   
    
    
  }

  return (
    <div style={themeStyles}>
      <IconStyles onClick={toggleTheme} darkTheme={darkTheme}>
      <Bulb />
      </IconStyles>
      <Search/>
    </div>
   
  );
}


