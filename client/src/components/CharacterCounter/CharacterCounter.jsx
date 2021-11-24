import React from 'react';
import styled from 'styled-components';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { textState, charCountState } from '../../store/store';

const TextInput = () => {
	const [text, setText] = useRecoilState(textState);

	const onChange = (event) => {
		setText(event.target.value);
	}

	return (
		<div>
			<input type="text" value={text} onChange={onChange}/>
			<br/>
			Echo: {text}
		</div>
	)
}

const CharacterCount = () => {
	const count = useRecoilValue(charCountState);

	return <>Character Count: {count} </>;
}

const CharacterCounter = () => {
	return (
		<div>
			<TextInput/>
			<CharacterCount/>
		</div>
	)
}

export default CharacterCounter;