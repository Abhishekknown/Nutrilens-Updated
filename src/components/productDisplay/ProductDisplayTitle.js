import React from 'react';

const ProductDisplayTitle = ({productName, code, thumb , quantity ,  brand , packageItem}) => {

  const resultString = packageItem.map(obj => obj.material).join(' ');
  let result = resultString.replace(/en:/g, "").replace(/-/g, " ").replace(/:/g, " ");

  return(<div className="productDisplay__titleContainer">
    <div className="productDisplay__thumbContainer">
      {thumb ?
        <img src={thumb} alt="Product front" />
        :
        <div className="skeleton__image">
          Picture not found
        </div>
      }
    </div>
    <div className="productDisplay__textContainer">
      <h2 className="productDisplay__title">{productName}</h2>
      <p className="">Barcode : {code}</p>
      <p className="">quantity : {quantity}</p>
      <p className="">packaging : 
     { result}
      </p>
      <p className="">Brand : {brand}</p>
    </div>
  </div>)
 
    };

export default ProductDisplayTitle;