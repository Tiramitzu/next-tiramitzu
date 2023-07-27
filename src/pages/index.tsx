import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import Projects from "pages/projects";
import Profile from "pages/profile";
import MainPage from "pages/main";
import FAB from "components/FAB";

const Index = () => {
	return (
		<>
			<Header />
			<MainPage />
			<FAB />
			<Projects />
			<Profile />
			<Footer />
		</>
	);
};

export default Index;
