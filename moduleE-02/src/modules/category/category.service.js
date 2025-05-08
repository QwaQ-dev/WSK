import { BadRequestError } from "../../utils/errors/bad-request.error.js";
import { ViolationError } from "../../utils/errors/violation.error.js";
import { CategoryEntity } from "./category.entity.js";

class CategoryService {


    getCategories () {
        return CategoryEntity.findAll({
            attributes: ['id', 'name'],
            raw: true
        })
    }

    async getCategory (categoryId = 0) {
        const category = await CategoryEntity.findOne({
            where: {
                id: categoryId
            }
        })

        if (!category)
            throw new BadRequestError({
                message: 'Category required',
                redirect_url: '/admin/categories'
            });

        return {
            id: category.id,
            name: category.name
        }
    }

    async editCategory (categoryId, name) {
        if (!categoryId)
            throw new BadRequestError({
                message: 'Category required',
                redirect_url: '/categories'
            })

        const category = await CategoryEntity.findOne({
            where: {
                id: categoryId
            }
        })

        if (!category)
            throw new BadRequestError({
                message: 'Category not found',
                redirect_url: '/admin/categories'
            })

        if (!name || name.length < 4 || name.length > 255)
            throw new ViolationError({
                errors: {
                    name: 'Минимальная длина 3 и максимальная 255 символов!'
                },
                 redirect_url: `/admin/categories/${categoryId}`
            })

       category.name = name;

       await category.save();

       return;
    }

    async createCategory (name) {
        if (!name || name.length < 4 || name.length > 255)
            throw new ViolationError({
                errors: {
                    name: 'Минимальная длина 3 и максимальная 255 символов!'
                },
                redirect_url: '/admin/categories/create'
            })
            

        const [category, isCreatedCategory] = await CategoryEntity.findOrCreate({
            where: {
                name
            }
        })

        if (!isCreatedCategory)
            throw new ViolationError({
                name: 'exists',
                redirect_url: '/admin/categories/create'
            })
    }

}

export const categoryService = new CategoryService();