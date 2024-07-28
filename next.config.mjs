/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "**.amazonaws.com",
      "bravo-web-site.s3.eu-north-1.amazonaws.com",
    ],
  },
};

export default nextConfig;
