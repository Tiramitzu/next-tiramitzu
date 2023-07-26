import { faCakeCandles, faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Page from "components/layout/Page";
import Image from "next/image";

const Profile = () => {
	return (
		<Page title="Tiramitzu's Profile" className="flex flex-col justify-center items-center mx-10 mt-24">
			<div className="flex flex-row items-start justify-start">
				<Image
					src="/static/favicon.ico"
					alt="Tiramitzu AKA Syah Warid Ghani Akram"
					height={256}
					width={256}
					className="rounded-full"
				/>
				<div className="flex flex-col ml-10 text-left text-quaternary dark:text-secondary">
					<div className="flex flex-row">
						<h1 className="text-tertiary font-bold text-xl dark:text-primary">Syah Warid Ghani Akram</h1>
						<p className="text-xs ml-1">aka Tiramitzu</p>
					</div>
					<p>Software Engineer</p>
					<p>
						<FontAwesomeIcon icon={faGlobeAsia} /> Bogor, Indonesia
					</p>
					<p>
						<FontAwesomeIcon icon={faCakeCandles} /> 28 July, 2006 ({curAge().toString()} years old)
					</p>
					<br />
					<p>Currently studying at SMK Negeri 1 Ciomas</p>
					<p>
						Also active partaking in{" "}
						<a href="https://clytage.org/" className="text-tertiary dark:text-primary" target="_blank" rel="noopener noreferrer">
							Clytage
						</a>
						{" "}as a Developer
					</p>
				</div>
			</div>
		</Page>
	);
};

function curAge() {
	const curDate = Date.now();
	const birthDate = new Date(2006, 7, 28).getTime();

	return Math.floor((curDate - birthDate) / 31557600000);
}

export default Profile;
