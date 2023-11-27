import express from "express";
import { json } from "express";
import cors from "cors";
import root from "./api/routes/index.js";

function main() {
  const app = express();
  const PORT = 8000;

  app.use(json(), cors());

  // Routes
  root(app);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

main();
