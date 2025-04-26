const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const user = await prisma.user.create({ data: req.body });
  res.json(user);
});

app.put("/users/:id", async (req, res) => {
  const user = await prisma.user.update({
    where: { id: parseInt(req.params.id) },
    data: req.body,
  });
  res.json(user);
});

app.delete("/users/:id", async (req, res) => {
  await prisma.user.delete({ where: { id: parseInt(req.params.id) } });
  res.json({ message: "User deleted" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
