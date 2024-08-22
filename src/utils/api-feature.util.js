class GetDataFeature {
  #_query;
  #_queryString;
  constructor(query, queryString) {
    this.#_query = query;
    this.#_queryString = queryString;
  }

  // filtrlash
  filter() {
    const excludedQueries = ["limit", "page", "fields", "sort"];
    excludedQueries.map((exl) => delete this.#_queryString[exl]);
    this.#_queryString = JSON.parse(
      JSON.stringify(this.#_queryString).replace(
        /\b(lt|lte|gt|gte)\b/g,
        (match) => `$${match}`
      )
    );
    this.#_query = this.#_query.find(this.#_queryString);
    return this;
  }
  // filtrlash

  // sortlash
  sort(defaultSortField) {
    if (this.#_queryString?.sort) {
      const sortFields = this.#_queryString.sort.split(",").join(" ");
      this.#_query = this.#_query.sort(sortFields);
    } else {
      this.#_query = this.#_query.sort(defaultSortField);
    }
    return this;
  }
  // sortlash

  // pagination
  pagination() {
    const limit = this.#_queryString?.limit || 10;
    const offset = this.#_queryString?.page
      ? (this.#_queryString?.page - 1) * limit
      : 1;
    this.#_query = this.#_query.limit(Number(limit)).skip(Number(offset));
    return this;
  }
  // pagination

  // field limits
  fieldLimits() {
    if (this.#_queryString?.fields) {
      const fields = this.#_queryString.fields.split(",").join(" ");
      this.#_query = this.#_query.select(fields);
    }
    return this;
  }
  // field limits

  // get private result
  getQuery() {
    return this.#_query;
  }
  // get private result
}

export default GetDataFeature;
