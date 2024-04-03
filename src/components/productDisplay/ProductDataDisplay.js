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
      <ProductDisplayTitle code={code} productName={product.product_name} thumb={product.image_thumb_url}/>
      <div className="productDisplay__scores">
        <NutriScore score={product.nutrition_grades} extraClass="nutriscore__detail" />
        <NovaGroup group={product.nova_group} tag={product.nova_groups_tags} />
        <EcoScore score={product.ecoscore_grade} />
        {
      window.botpressWebChat.init({
        "composerPlaceholder": "Chat with Nutri Asistent ",
        "botConversationDescription": "Im here to assist you  just say hi ",
        "botId": "7cfe4e41-832a-4112-9859-f60d11e61d0e",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "7cfe4e41-832a-4112-9859-f60d11e61d0e",
        "webhookId": "d149c281-fda4-45f8-8bcf-761b53b1db52",
        "lazySocket": true,
        "themeName": "prism",
        "botName": "Nutri Asistent ",
        "frontendVersion": "v1",
        "useSessionStorage": true,
        "enableConversationDeletion": true,
        "theme": "prism",
        "themeColor": "#2563eb"
      })
    }
      </div>
      {p !== undefined ?
        (<>
        <div className='productinfo '>
        <div className='layout'>
         <NutrientLevels product={p}/>
          <DietaryData product={p} />
         </div>
          <Additives product={p} />
          <Ingredients/>
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
