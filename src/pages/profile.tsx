import { faCakeCandles, faEnvelope, faGlobeAsia, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Page from "components/layout/Page";

const Profile = () => {
	return (
		<Page
			title="Tiramitzu's Profile"
			className="flex flex-col justify-center items-center"
			mainClassName=" items-center justify-center">
			<section id="profile" className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-4">
				<div className="pb-12 text-center">
					<h1 className="text-3xl font-bold md:text-4xl lg:text-5xl font-heading text-tertiary dark:text-primary">
						Tiramitzu&apos;s Profile
					</h1>
				</div>
				<div className="flex flex-row justify-center py-20 mb-60">
					<div className="mobile:hidden">
						<Image
							src="/static/favicon.ico"
							alt="Tiramitzu AKA Syah Warid Ghani Akram"
							height={256}
							width={256}
							className="rounded-full"
						/>
					</div>
					<div className="flex flex-col ml-10 text-left text-quaternary dark:text-secondary">
						<div className="flex flex-row">
							<h1 className="text-xl font-bold text-tertiary dark:text-primary">Syah Warid Ghani Akram</h1>
							<p className="ml-1 text-xs">aka Tiramitzu</p>
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
							<a
								href="https://clytage.org/"
								className="text-tertiary dark:text-primary"
								target="_blank"
								rel="noopener noreferrer">
								Clytage
							</a>{" "}
							as the Core Team
						</p>
						<br />
						<p>
							<FontAwesomeIcon icon={faEnvelope} /> E-Mail:{" "}
							<a
								href="mailto:syah@tira.my.id"
								className="text-tertiary dark:text-primary"
								target="_blank"
								rel="noopener noreferrer">
								syah@tira.my.id
							</a>
						</p>
						<p>
							<FontAwesomeIcon icon={faPhone} /> Phone:{" "}
							<a
								href="https://wa.me/+6285156958090"
								className="text-tertiary dark:text-primary"
								target="_blank"
								rel="noopener noreferrer">
								+62 851-5695-8090
							</a>
						</p>
					</div>
				</div>
			</section>
		</Page>
	);
};

function curAge() {
	const curDate = Date.now();
	const birthDate = new Date(2006, 7, 28).getTime();

	return Math.floor((curDate - birthDate) / 31557600000);
}

export default Profile;