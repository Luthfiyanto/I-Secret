import * as indexController from "./../controllers/index.js";
const root = (app) => {
  app.get("/", indexController.ping);
};

export default root;
