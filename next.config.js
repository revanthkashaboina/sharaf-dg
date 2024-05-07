/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
    dest: 'public'
  })
  
  const nextConfig = {};


// export default withPWA(nextConfig);

module.exports =  withPWA(nextConfig);

// module.exports = {
//   async headers() {
//     return [
//       {
//         source: '/:path*',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=0, must-revalidate',
//           },
//         ],
//       },
//     ];
//   },
// };

