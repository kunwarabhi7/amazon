/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['www.citypng.com','fakestoreapi.com'],
  },
  env:{
    stripe_public_key : process.env.STRIPE_PUBLIC_KEY
  }
}