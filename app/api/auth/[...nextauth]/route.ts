import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import AzureADProvider from 'next-auth/providers/azure-ad';
import jwt from 'jsonwebtoken'
import { redirect } from 'next/dist/server/api-utils';

const SECRET_KEY = 'my_secret_key';

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        phoneNumber: { label: 'Phone Number', type: 'text' },
        otp: { label: 'OTP', type: 'text' },
      },
      
      
      async authorize(credentials, req) {
        // Your logic to verify the OTP goes here
        // For now, we'll assume the OTP is always valid
        // console.log("credentials=============", credentials);
        const validOTP = '123456'; // Replace with your OTP verification logic

        if (credentials?.otp === validOTP) {
          // OTP is valid, generate a JWT token
          const token = jwt.sign(
            { phoneNumber: credentials.phoneNumber },
            SECRET_KEY,
            { expiresIn: '24h' }
          );

          // console.log("token======================", token);
          return {token: token, id: 'unique_user_id', name: 'User Name', email: 'user@example.com' };
        } else {
          // OTP is invalid
          return null;
        }
      },
    }),
    AzureADProvider({
      clientId: 'b336e970-4d32-47be-827d-17a7d9b3abaf',
      clientSecret: 'TY38Q~2nozzMFXl.KB9.1Io-OoaESOij3VXd6aya',
      tenantId: '15f3f076-a377-4718-8392-786455d47f81',
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.accessToken = user.token;
      }
      // console.log("token===================", token);
      // console.log("user====================", user);
      return token;
    },
    async session({ session, token }: any) {
      session.accessToken = token.accessToken;
      // console.log("session==================", session);
      // console.log("token====================", token);
      return session;
    },
    // async redirect({ url, baseUrl }: any) {
    //   // Redirect after successful authentication
    //   return '/request';
    // },
  },
};

const handler = NextAuth(options);
export { handler as GET, handler as POST };