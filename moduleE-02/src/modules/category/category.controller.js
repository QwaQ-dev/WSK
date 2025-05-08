import { categoryService } from "./category.service.js"

export const CategoryController = {
    categoriesPage: async (req, res) => {
        const categories = await categoryService.getCategories();

        return res.render('pages/categories/list.ejs', {
            categories
        })
    },
    categoryPage: async (req, res) => {
        const category = await categoryService.getCategory(req.params.categoryId);

        return res.render('pages/categories/index.ejs', {
            category
        })
    },
    createCategoryPage: async (req, res) => {
        return res.render('pages/categories/create.ejs');
    },
    createCategory: async (req, res) => {
        await categoryService.createCategory(req.body.name);

        req.session.successMessage = 'Категория успешно создано!';

        return res.redirect('/admin/categories');
    },
    editCategory: async (req, res) => {
        await categoryService.editCategory(req.params.categoryId, req.body.name);

        req.session.successMessage = 'Категория успешно обновлена!';

        return res.redirect('/admin/categories');
    }
}