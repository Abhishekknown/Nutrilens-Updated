import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { HistoryHandler } from '../history';

import ProductDataFilter from './ProductDataFilter';
import ProductDisplayTitle from './ProductDisplayTitle';
import NutrientLevels from './NutrientLevels';
import DietaryData from './DietaryData';
import Additives from './additives';
import AddProductInfo from '../addProductInfo';
import NutriScore from '../nutriScore';
import NovaGroup from '../novaGroup';
import EcoScore from '../ecoScore';
import Ingredients from './Ingredients';
import PackagedItem from './PackagedItem'

const ProductDataDisplay = ({ data }) => {
  const { code, status, product } = data;
  const [p, setP] = useState(undefined);
console.log(data)
  useEffect(() => {
    if (status === 1) {
      const filteredProduct = new ProductDataFilter(product);
      setP(filteredProduct);
      HistoryHandler.addProduct(code, filteredProduct.productDataThumbView());
    }
  }, []);

  if (status !== 1) {
    return <Redirect
            to={{
              pathname: '/product/not-found',
              search: `?code=${code}`
            }}
            />;
  }

  return (
    <div className="productDisplay__container">
      <ProductDisplayTitle code={code} productName={product.product_name} thumb={product.image_thumb_url} quantity={product.quantity} packageItem={product.packagings} brand={product.brands} />
      <div className="productDisplay__scores">
        <NutriScore score={product.nutrition_grades} extraClass="nutriscore__detail" />
        <NovaGroup group={product.nova_group} tag={product.nova_groups_tags} />
        <EcoScore score={product.ecoscore_grade} />
      
      </div>
      {p !== undefined ?
        (<>
        <div className='productinfo '>
        <div className='layout'>
         <NutrientLevels product={p}/>
          <DietaryData product={p} />
         </div>
          <Additives product={p} />
          <Ingredients product={product.ingredients_text_en_ocr_1643128902}/>
          <PackagedItem/>
        </div>
        </>)
        :
        <> </>
      }
    </div>
    );
};

export default ProductDataDisplay;
