import { PrismaClient } from "@prisma/client";

export let prisma: PrismaClient;

export function connectDb() {
  prisma = new PrismaClient();
}
