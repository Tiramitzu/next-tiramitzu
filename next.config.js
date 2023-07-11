/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['cdn.clytage.org', 'static.vecteezy.com']
	}
};

module.exports = nextConfig;
