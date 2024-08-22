import { ConflictError } from "../../errors/conflict.error.js";
import productService from "./product.service.js";

class ProductController {
  #_service;
  constructor() {
    this.#_service = productService;
  }

  getProducts = async (req, res) => {
    try {
      const query = { ...req.query };
      const data = await this.#_service.getAllProducts(query);
      if (!data) {
        res.status(404).send({
          message: "Data not found",
        });
        return;
      }
      res.status(200).send({
        message: "success",
        dataCount: data.countData.length,
        limit:data.limit,
        page:data.page,
        data: data.products,
      });
    } catch (error) {
      throw new ConflictError("Error in controller while getting all products");
    }
  };
}

export default new ProductController();
