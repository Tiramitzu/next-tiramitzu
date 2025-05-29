/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "opengraph.githubassets.com"
			},
			{
				protocol: "https",
				hostname: "cdn.discordapp.com"
			}
		]
	}
};

module.exports = nextConfig;
