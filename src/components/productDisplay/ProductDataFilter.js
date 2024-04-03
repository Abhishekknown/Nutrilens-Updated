class ProductDataFilter {
  constructor(data) {
    this.d = data;
  }

  productDataThumbView() {
    return {
      name: this.d.product_name,
      thumb: this.d.image_thumb_url,
      score: this.d.nutrition_grades
    }
  }

  isUndefined(value) {
    return this.d[value] === undefined;
  }

  isPlantBased() {
    if (this.isUndefined('categories_tags')) {
      return undefined;
    }
    return this.d.categories_tags
      .filter(x => x === 'en:plant-based-foods-and-beverages' || x === 'en:plant-based-foods')
      .length > 0;
  }

  containsGluten() {
    if (this.isUndefined('allergens_tags')) {
      return false;
    }
    return this.d.allergens_tags
      .filter(x => x === 'en:gluten')
      .length > 0;
  }

  containsLactose() {
    if (this.isUndefined('allergens_tags')) {
      return false;
    }
    return this.d.allergens_tags
      .filter(x => x === 'en:milk')
      .length > 0;
  }

  // nutrientLevels() {
  //   if (this.isUndefined('nutrient_levels')) {
  //     return undefined;
  //   }

  //   return Object.keys(this.d.nutrient_levels).map(k => ({
  //     title: k.replace('-', ' '),
  //     value: this.d.nutrient_levels[k]
  //   }))
  // }

 
  
  nutriments() {
    if (this.isUndefined('nutriments')) {
      return undefined;
    }

    return Object.keys(this.d.nutriments).map(k => ({
      title: k.replace('-', ' '),
      value: this.d.nutriments[k]
    }))
  }
  
  packageItem() {
    if (this.isUndefined('Package')) {
      return undefined;
    }

    if (typeof this.d.packageItem === 'string') {
      return [{ title: this.d.packageItem.replace(':', ' '), value: this.d.nutriments[this.d.packageItem] }];
    }

    return Object.keys(this.d.packageItem).map(k => ({
      title: k.replace(':', ' '),
      value: this.d.nutriments[k]
    }));
}



  containsPalmOil() {
    if (!this.d.ingredients_from_palm_oil_n) {
      return false;
    }
    return this.d.ingredients_from_palm_oil_n === 1;
  }

  additives() {
    if (this.isUndefined('additives_tags')) {
      return undefined;
    }
    return this.d.additives_tags.map(x => x.split(':')[1]);
  }
}

export default ProductDataFilter;
