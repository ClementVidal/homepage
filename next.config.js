const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
});
