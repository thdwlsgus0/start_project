import React from 'react';
import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import CharacterCounter from './components/CharacterCounter';
import IntroduceSection from './components/IntroduceSection';

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
		<RecoilRoot>
			<GlobalStyle/>
			<Header></Header>
			<IntroduceSection />
			<CharacterCounter />
		</RecoilRoot>
	)
}

export default App;