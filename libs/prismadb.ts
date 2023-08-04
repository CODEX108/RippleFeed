import { PrismaClient } from "@prisma/client";

declare global{
    var prisma: PrismaClient | undefined
}

// Hack : For next hot reloading, coz the nextJS can keep on hot reloading and create a bunch of new prisma client instances to avoid this
const client = globalThis.prisma || new PrismaClient()
if(process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
