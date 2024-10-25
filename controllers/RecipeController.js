const recipes = [
  {
    id: 1,
    name: "Biriyani",
    procedure: "cooking",
    ingredients: ["chicken", "rice", "vegitables", "water"],
    duration: "1hr",
  },
  {
    id: 2,
    name: "noodles",
    procedure: "cooking",
    ingredients: ["noodles", "mix-powder", "vegitables", "water"],
    duration: "10min",
  },
  {
    id: 3,
    name: "parrota",
    procedure: "cooking",
    ingredients: ["maida", "water", "salt", "conflowerpowder"],
    duration: "30min",
  },
];

// post method
export const createRecipe = (req, res) => {
  const { name, procedure, ingredients, duration } = req.body;
  const newRecipe = {
    id: recipes.length + 1,
    name: name,
    procedure: procedure,
    ingredients: ingredients,
    duration: duration,
  };

  recipes.push(newRecipe);

  res
    .status(200)
    .json({ message: "Create a new recipe successfully", data: recipes });
};

//get method

export const getAllRecipes = (req, res) => {
  res
    .status(200)
    .json({ message: "data geting succesfully", recipes: recipes });
};

//get method by id

export const getRecipeById = (req, res) => {
  const RecipeId = req.params.id;

  const recipesdetails = recipes.find((ele) => ele.id == RecipeId);
  if (!recipesdetails) {
    return res.status(401).json({ message: "Recipes Not found" });
  }

  res
    .status(200)
    .json({ message: "Retrieve a single recipe by ID", data: recipesdetails });
};

//update/put  method

export const updateRecipe = (req, res) => {
  const RecipeId = req.params.id;
  const { name, procedure, ingredients, duration } = req.body;
  const index = recipes.findIndex((ele) => ele.id == RecipeId);
  if (index === -1) {
    return res.status(404).json({ message: "Recipes Not Found" });
  }

  recipes[index].name = name;
  recipes[index].procedure = procedure;
  recipes[index].ingredients = ingredients;
  recipes[index].duration = duration;

  res
    .status(200)
    .json({
      message: "Recipes are updated successfully",
      data: recipes[index],
    });
};

//Delete method

export const deleteRecipe = (req, res) => {
  const RecipeId = req.params.id;
  const index = recipes.findIndex((ele) => ele.id == RecipeId);
  if(index === -1) {
    return res.status(404).json({ message: "Recipes not Found" });
  }

  recipes.splice(index, 1);
  res.status(200).json({ message: "Recipes deleted successfully" });
};
