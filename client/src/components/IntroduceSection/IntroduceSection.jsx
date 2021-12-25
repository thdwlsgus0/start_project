import React from 'react';
import styled from 'styled-components';
import KeyboardArrowRight from '@images/keyboard_arrow_right.svg';

const IntroduceSectionContainer = styled.div`
	text-align: center;
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

const AnnounceSection = styled.div`
	&:not(:first-child) {
		margin-top: 80px;
	}
`;

const AnnounceSectionContainer = styled.div`
	display: flex;
	padding-bottom: 10px;
`;

const AnnounceSectionTitle = styled.strong`
	font-size: 20px;
	letter-spacing: -0.8px;
	color: #dce384;
	display: block;
	flex: 1 1 auto;

	&:not(:last-child) {
		padding-top: 10px;
	}
`;

const AnnounceSectionLink = styled.a`
	font-size: 15px;
	color: #666;
	cursor: pointer;

	&:after {
		position: relative;
		top: 6px;
		content: '';
		display: inline-block;
		width: 24px;
		height: 24px;
		background: url(${(props) => props.image}) no-repeat;
	}
`;

const IntroContainer = styled.div`
	padding: 0 90px;

	&:not(:first-child) {
		margin-top: 80px;
	}
`;

const AnnounceItem = styled.div`
	display: flex;
	padding: 20px 0;

	&:not(:first-child) {
		border-top: 1px solid #A4A4A4;
	}
`;

const AnnounceItemData = styled.span`
	display: block;
	font-size: 15px;
	line-height: 22px;
	color: #999;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

const IntroduceSection = () => {
	return (
		<IntroContainer>
			<IntroduceSectionContainer>
				<IntroduceSectionTitle>아산대표 방문요양 • 노인성질환전문케어</IntroduceSectionTitle>
				<IntroduceSectionSubTitle> 방문요양 제공 / 국가지원 안내 / 코로나 검사시행 및 상시관리 기관</IntroduceSectionSubTitle>
			</IntroduceSectionContainer>
			<AnnounceSection>
				<AnnounceSectionContainer>
					<AnnounceSectionTitle>기관안내</AnnounceSectionTitle>
					<AnnounceSectionLink image={KeyboardArrowRight}>더보기</AnnounceSectionLink>
				</AnnounceSectionContainer>
				<AnnounceItem>
					<AnnounceItemData>아산재가복지센터 041-531-7877</AnnounceItemData>
				</AnnounceItem>
				<AnnounceItem>
					<AnnounceItemData>• 아산대표 방문요양 노인복지기관/ 대표: 김정남</AnnounceItemData>
				</AnnounceItem>
				<AnnounceItem>
					<AnnounceItemData>• 어르신댁에 요양보호사님을 보내드립니다.</AnnounceItemData>
				</AnnounceItem>
			</AnnounceSection>
		</IntroContainer>
	);
}

export default IntroduceSection;