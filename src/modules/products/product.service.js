import { ConflictError } from "../../errors/conflict.error.js";
import GetDataFeature from "../../utils/api-feature.util.js";
import { product } from "./product.schema.js";

class ProductService {
  #_model;
  constructor() {
    this.#_model = product;
  }

  // get all products
  async getAllProducts(query) {
    try {
      const limit = query?.limit || 10;
      const page = query?.page || 1;
      const products = await new GetDataFeature(this.#_model.find(), query)
        .sort("price")
        .pagination()
        .fieldLimits()
        .filter()
        .getQuery();
      const countData = await new GetDataFeature(this.#_model.find(), query)
        .filter()
        .getQuery();
      return { page, limit, countData, products };
    } catch (error) {
      throw new ConflictError("Error in service while getting products");
    }
  }
  // get all products
}

export default new ProductService();
