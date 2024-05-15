const categoriesDB=require("../models/categories")



// Get all categories sorted alphabetically
const getAllCategories = async (req, res) => {
  try {
      const categories= await categoriesDB.find();
      const sortedCategories = categories.toSorted((a,b)=>{
        return a.name.localeCompare(b.name) 
      });
    res.send(sortedCategories);
  } catch (err) {
    res.status(404).send("categories not found");
  }
};

// Get a single category by id
const getCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await categoriesDB.findById(categoryId)
    res.send(category);
  } catch (err) {
    res.status(404).send( 'category not found');
  }
};

// Create a category
const createCategory =  async (req, res) => {
  try {
    const newCaregory =new categoriesDB({name: req.body.name});
    await newCaregory.save();
    res.send( 'Category saved successfully' );
  } catch (error) {
    res.status(500).send( 'Error saving category' );
  }
};

// Update a category by name
const updateCategory = async (req, res) => {
  try {
        const categoryId = req.params.id
        await categoriesDB.findByIdAndUpdate(categoryId, { name: req.body.name })
        res.send('the category updated successfully');
  } catch (err) {
    res.status(404).send('Cannot update not found category  ' + err.message);
  }
};


// Delete a category by id
const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id
    await categoriesDB.findByIdAndDelete(categoryId)
    res.send('the category deleted successfully');

  } catch (err) {
    res.status(404).send('Cannot delete category ');
  }
};


module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
  };
