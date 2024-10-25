import express from 'express'
import { getAllRecipes,createRecipe,getRecipeById, updateRecipe, deleteRecipe} from '../controllers/RecipeController.js';




const router =express.Router();

router.post("/adddata",createRecipe);
router.get("/getdata",getAllRecipes);
router.get("/getdata/:id",getRecipeById);
router.put("/update/:id",updateRecipe)
router.delete("/delete/:id",deleteRecipe)







export default router;