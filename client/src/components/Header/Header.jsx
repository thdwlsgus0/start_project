import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	padding: 28px 0;
`;

const StyledMenuLink = styled.a`
	display: inline-block;
	padding: 0 10px;
	color: #333;
	font-size: 16px;
	line-height: 19px;
	text-decoration: none;
	
	&:not(:first-child) {
		margin-left: 10px;
	}
`;

const StyledMenuNav = styled.div`
	display: flex;
	padding: 10px 20px;
	border-bottom: 1px solid #e9e9e9;
`;

const StyledMenuHeading = styled.h1`
	padding: 28px 0; 
`;

const StyledHeadingLink = styled.a`
	display: block;
	position: relative;
	padding: 0 10px;
	font-size: 16px;
	line-height: 19px;
	letter-spacing: -1px;
	color: #dce384;
`;

const StyledRightMenu = styled.div`
	padding: 18px 0;
	
	&:not(:first-child) {
		margin-left: auto;
	}

`;

const StyledRightButton = styled.button`
	padding: 10px;
	font-size: 16px;
	border: none;
	background-color: #fff;
	cursor: pointer;
`;

const StyledRightLink = styled.a`
	display: inline-block;
	padding: 10px;
	cursor: pointer; 

	&:not(:first-child) {
		margin-left: 10px;
	}
`;

const StyledBanner = styled.div.attrs((props) => ({
	'aria-label': "서로 기대어, 더 웃고 살아요. 어르신 돌봄 및 및 노인성 질환 - 치매 전문케어기관"
}))`
	position: relative;
	background-image: url('https://modo-phinf.pstatic.net/20210105_132/1609834067564leBrg_JPEG/mosaJE3S2M.jpeg');
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 400px;
`;

const StyledBannerContainer = styled.div`
	display: flex;
	position: absolute;
	top: 50%;
	left: 5%;
	transform: translate(-5%, -50%);
`;

const StyledBannerLogo = styled.span.attrs((props) => ({
	'aria-label': '아산재가 복지센터'
}))`
	position: relative;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background-image: url('https://modo-phinf.pstatic.net/20210218_183/16136498065316CSkg_JPEG/mosas0RUJ8.jpeg?type=f320_320');
	background-position: 50% 50%;
	background-size: cover;
	background-repeat: no-repeat;

	&:after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border: 1px solid rgba(0, 0, 0, 0.08);
		border-radius: 50%;
	}

	&:not(:last-child) {
		margin-right: 20px;
	}
`;

const StyledBannerTitleContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

const StyledBannerTitle = styled.strong`
	display: block;
	font-size: 20px;
	line-height: 29px;
	font-weight: 300;
	padding-top: 6px;
`;

const StyledBannerDescription = styled.span`
	display: block;

	&:not(:first-child) {
		margin-top: 6px;
	}
`

const Header = () => {
	return (
		<>
			<StyledMenuNav>
				<StyledMenuHeading>
					<StyledHeadingLink href="#">아산방문요양 기관</StyledHeadingLink>
				</StyledMenuHeading>
				<StyledContainer>
					<StyledMenuLink href="#">기관안내</StyledMenuLink>
					<StyledMenuLink href="#">오시는길</StyledMenuLink>
					<StyledMenuLink href="#">게시판</StyledMenuLink>
					<StyledMenuLink href="#">활동안내</StyledMenuLink>
				</StyledContainer>
				<StyledRightMenu>
					<StyledRightButton>전체보기</StyledRightButton>
					<StyledRightLink>로그인</StyledRightLink>
				</StyledRightMenu>
			</StyledMenuNav>
			<StyledBanner>
				<StyledBannerContainer>
					<StyledBannerLogo></StyledBannerLogo>
					<StyledBannerTitleContainer>
						<StyledBannerTitle>아산재가복지센터</StyledBannerTitle>
						<StyledBannerDescription>아산방문요양기관 - 노인성질환 전문케어 기관</StyledBannerDescription>
					</StyledBannerTitleContainer>
				</StyledBannerContainer>
			</StyledBanner>
		</>
	)
};

export default Header;