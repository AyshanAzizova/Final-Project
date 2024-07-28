import Product from "../models/product.model.js";
import Color from "../models/color.model.js";
import Size from "../models/size.model.js";

//Get all products
export const getProducts = async (request, response) => {
  const products = await Product.find();
  if (!products)
    return response.status(404).send({ error: "Something Went wrong" });
  return response.status(200).send(products);
};

//get a single product
export const getSingleProduct = async (request, response) => {
  const { productId } = request.params;
  const singleproduct = await Product.findById(productId);
  if (!singleproduct)
    return response.status(404).send({ error: "Something went wrong" });
  return response.status(200).send(singleproduct);
};

 // Get products by category
 export const getProductsByCategory = async (req, res) => {
    const { categoryId } = req.params;
    try {
      const products = await Product.find({ category: categoryId });
      if (!products)
        return res
          .status(404)
          .send({ error: "No products found for this category" });
      return res.status(200).send(products);
    } catch (error) {
      return res.status(500).send({ error: "Server error" });
    }
  };

//add a single product
export const addSingleProduct = async (request, response) => {
  const {
    title,
    price,
    category,
    slug,
    sku,
    description,
    color,
    size,
    quantity,
  } = request.body;
  const { path } = request.file;
  //check empty values
  if (
    !title ||
    !price ||
    !category ||
    !slug ||
    !sku ||
    !description ||
    !color ||
    !size ||
    !quantity ||
    !path
  ) {
    return response
      .status(400)
      .send({ error: "Please fill all required fields" });
  }

 

  //check existing specific product
  const existingProduct = await Product.findOne({ sku })
    .populate("stock.color")
    .populate("stock.size");
  const givenColor = await Color.findById(color);
  const givenSize = await Size.findById(size);

  if (existingProduct) {
    const existingStockItem = existingProduct.stock.find(
      (stockItem) =>
        stockItem.color.name === givenColor.name &&
        stockItem.size.name == givenSize.name
    );
    if (existingStockItem) {
      existingStockItem.quantity += +quantity;
    } else {
      existingProduct.stock.push({ color, size, quantity });
    }
    await existingProduct.save();
    return response.status(existingStockItem ? 200 : 201).send(existingProduct);
  }

  const stock = [{ quantity, size, color }];
  const newProduct = await Product.create({
    title,
    price,
    category,
    slug,
    sku,
    description,
    stock,
    productPic: path,
  });
  response.status(201).send(newProduct);
};
