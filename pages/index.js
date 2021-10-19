import styled from "styled-components";
import ReactCursorPosition from "react-cursor-position";
import React, { useState } from "react";
import { Element } from "react-scroll";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme } from "../styles/Theme";
import Header from "../components/layouts/Header";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ExperiencesSection from "../components/sections/ExperienceSection";
import WorksSection from "../components/sections/WorksSection";
import BlogsSection from "../components/sections/BlogsSection";
import ContactSection from "../components/sections/ContactSection";
const HomepageStyledContainer = styled.div`
	display: flex;
	position: relative;
	width: 100vw;
`;
function Homepage() {
	const [toggleMenu, setToggleMenu] = useState(false);

	const headerToggler = (e) => {
		e.preventDefault();
		setToggleMenu(!toggleMenu);
	};

	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<HomepageStyledContainer>
				<Header
					logoSource='/images/logo.svg'
					toggleMenu={toggleMenu}
					headerToggler={headerToggler}
				/>
				<main className={toggleMenu ? "content open" : "content"}>
					<Element name='home-section'>
						<ReactCursorPosition>
							<HeroSection />
						</ReactCursorPosition>
					</Element>
					<Element name='about-section'>
						<AboutSection />
					</Element>
					<Element name='experiences-section'>
						<ExperiencesSection />
					</Element>
					<Element name='works-section'>
						<WorksSection />
					</Element>
					<Element name='blog-section'>
						<BlogsSection />
					</Element>
					<Element name='contact-section'>
						<ContactSection />
					</Element>
				</main>
			</HomepageStyledContainer>
		</ThemeProvider>
	);
}

export default Homepage;
