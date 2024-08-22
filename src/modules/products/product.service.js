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
      //   const limit = query?.limit || 10;
      //   const offset = query?.page ? (query?.page - 1) * limit : 1;

      //   const excludedQueries = ["limit", "page"];
      //   excludedQueries.map((exl) => delete query[exl]);
      //   query = JSON.parse(
      //     JSON.stringify(query).replace(
      //       /\b(lt|lte|gt|gte)\b/g,
      //       (match) => `$${match}`
      //     )
      //   );

      //   const products = await this.#_model
      //     .find(query)
      //     .limit(Number(limit))
      //     .skip(Number(offset));
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
