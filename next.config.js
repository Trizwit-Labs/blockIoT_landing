/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  env: {
    GOOGLE_CLIENT_ID : "690300101234-26hh008rrrkiurushvgo14n1r502tgt9.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET : "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",
    NEXTAUTH_SECRET :"openssl rand -base64 32",
  },
 
};

module.exports = nextConfig;
