import React from 'react';

const Ingredients = ({ product }) => {
    const displayContent = product && product.length > 0 ? product : "None";

    return (
        <section className="productDisplay__section">
            <h3 className="productDisplay__sectionTitle">Ingredients</h3>
            <hr />
            <div className="productDisplay__paragraph--item">
                {displayContent}
            </div>
        </section>
    );
};

export default Ingredients;
