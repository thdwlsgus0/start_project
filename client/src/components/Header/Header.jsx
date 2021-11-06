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
	padding: 0 20px;
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

const Header = () => {
	return (
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
		</StyledMenuNav>
	)
};

export default Header;