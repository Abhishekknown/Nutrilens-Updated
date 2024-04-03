import React from 'react';

const NutrientLevels = (props) => {
  const selectedKeys = ['energy', 'carbohydrates', 'fat', 'sodium', 'protien', 'fiber', 'salt', 'sugars']; // Example of selected keys

  return (
    <section className="productDisplay__section">
      <h3 className="productDisplay__sectionTitle">Nutrient Levels</h3>
      <hr />
      {props.product.nutriments().filter(item => selectedKeys.includes(item.title)).map(x =>
        <div className="productDisplay__list--item" key={x.title}>
          <span className="productDisplay__list--label">{x.title}</span>
          <span className={`productDisplay__list--value ${x.value}`}>{parseFloat(x.value).toFixed(2)}</span>
        </div>)
      }
    </section>
  );
};

export default NutrientLevels;