import React from "react";
import "./Home.css";
import AnimateBar from "./AnimateBar/AnimateBar";
import Header from "./Header/Header";
import Content from "./Content/Content";
import BGImage from "./BGImage/BGImage";
import Footer from "./Footer/Footer";

const Home = () => {
	return (
		<React.Fragment>
			<AnimateBar />
			<Header />
			{/* <BGImage /> */}
			<Content />
			<Footer />
		</React.Fragment>
	);
};

export default Home;
