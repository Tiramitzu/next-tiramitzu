import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import Projects from "pages/projects";
import Profile from "pages/profile";
import FAB from "components/FAB";

const Index = () => {
	return (
		<>
			<Header />
			<FAB />
			<Profile />
			<Projects />
			<Footer />
		</>
	);
};

export default Index;
