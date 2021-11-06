import React from 'react';
import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
	  padding: 0;
	  margin: 0;
  }

  a {
	  text-decoration: none;
  }

  h1 {
	  margin: 0;
	  padding: 0;
  }
`;

const App = () => {
	return (
		<>
			<GlobalStyle/>
			<Header></Header>
		</>
	)
}

export default App;