// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// module.exports = {
//     images: {
//       domains: ['asset.cloudinary.com'],
//     },
//   };
  
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ['asset.cloudinary.com', 'res.cloudinary.com', 'via.placeholder.com',  'images.unsplash.com'
//       ],
//     },
//   };
  
//   module.exports = nextConfig;
  

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'asset.cloudinary.com',
//           port: '',
//           pathname: '/**',
//         },
//         {
//           protocol: 'https',
//           hostname: 'res.cloudinary.com',
//           port: '',
//           pathname: '/**',
//         },
//         {
//           protocol: 'https',
//           hostname: 'via.placeholder.com',
//           port: '',
//           pathname: '/**',
//         },
//         {
//           protocol: 'https',
//           hostname: 'images.remotePatterns',
//           port: '',
//           pathname: '/**',
//         },
//       ],
//     },
//   };
  
//   module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'asset.cloudinary.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: 'instagram.fcmb3-2.fna.fbcdn.net',
            port: '',
            pathname: '/**',
          },
      ],
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
  };
  
  module.exports = nextConfig;
  