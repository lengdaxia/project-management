/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jira-pm-s3-images.s3.ap-northeast-1.amazonaws.com",
        prot: "",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
