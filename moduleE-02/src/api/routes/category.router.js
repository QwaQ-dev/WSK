import e from "express";
import { privateRoute } from "../middlewares/auth/private-route.js";
import { wrapHandler } from "../../utils/wrap-handler.js";
import { CategoryController } from "../../modules/category/category.controller.js";

export const CategoryRouter = e.Router();

CategoryRouter.use(privateRoute);

CategoryRouter.get('/', wrapHandler(CategoryController.categoriesPage))
CategoryRouter.get('/create', wrapHandler(CategoryController.createCategoryPage))
CategoryRouter.get('/:categoryId', wrapHandler(CategoryController.categoryPage))

CategoryRouter.post('/:categoryId/edit', wrapHandler(CategoryController.editCategory))
CategoryRouter.post('/create', wrapHandler(CategoryController.createCategory))