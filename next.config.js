/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "opengraph.githubassets.com"
			}
		]
	}
};

module.exports = nextConfig;
