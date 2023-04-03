/** @type {import('next').NextConfig} */
const repo = "iffi-mockup";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
};

module.exports = nextConfig;
