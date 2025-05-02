import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      isVerified: boolean;
      isAcceptingMessages: boolean;
      role: string; // for dashboard admin
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    username: string;
    isVerified: boolean;
    isAcceptingMessages: boolean;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    username: string;
    isVerified: boolean;
    isAcceptingMessages: boolean;
    role: string;
  }
}