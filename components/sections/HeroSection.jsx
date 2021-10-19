import React from "react";
import styled from "styled-components";

const HeroSectionStyledContainer = styled.section`
	background: #353353;
	padding: 0;
	height: 100vh;
	min-height: 100vh;
	flex-grow: 1;
`;
export default function HeroSection() {
	return (
		<HeroSectionStyledContainer>
			this is hero section
		</HeroSectionStyledContainer>
	);
}
