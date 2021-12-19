import React from 'react';
import styled from 'styled-components';

const IntroduceSectionContainer = styled.div`
	text-align: center;

	&:not(:first-child) {
		margin-top: 80px;
	}
`;

const IntroduceSectionTitle = styled.strong`
	display: block;
	font-size: 15px;
	font-weight: bold;
	color: #dce384;
	letter-spacing: -0.8px;
`;

const IntroduceSectionSubTitle = styled.span`
	display: block;
	font-size: 18px;
	font-weight: 300;
	line-height: 26px;
	word-break: break-all;

	&:not(:first-child) {
		margin-top: 8px;
	}
`;

const IntroduceSection = () => {
	return (
		<IntroduceSectionContainer>
			<IntroduceSectionTitle>아산대표 방문요양 • 노인성질환전문케어</IntroduceSectionTitle>
			<IntroduceSectionSubTitle> 방문요양 제공 / 국가지원 안내 / 코로나 검사시행 및 상시관리 기관</IntroduceSectionSubTitle>
		</IntroduceSectionContainer>
	);
}

export default IntroduceSection;