import { prisma } from "./config/prisma";

async function main() {
  const employee = await prisma.users.create({
    data: {
      name: "Sudip Paul",
      email: "Developer@deevelopeer.com",
      password: "hIIIIIIIII"
    },
  });

  console.log(employee);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });