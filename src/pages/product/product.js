// @flow
import * as React from "react";
import "./product.css";

type Props = {
  match: {
    params: {
      id: string,
    }
  }
}

const ProductDetail = (props: Props): React.Node => {
  const url: string = `https://product-catalog-api.herokuapp.com/products/${
    props.match.params.id
  }`;
  
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(response => setData(response));
  });

  return (
    <div>
      {(function() {
        if (data !== null) {
          return (
            <React.Fragment>
              <div className="title-detail">
                <p>{data.productName}</p>
              </div>
              <div>
                <img
                  className="image-detail"
                  src={data.productImage}
                  alt={data.productName}
                />
              </div>
              <div className="price-detail">
                <p>{data.productPrice}</p>
              </div>
            </React.Fragment>
          )
        }
      })()}
    </div>
  )
};

export default ProductDetail;
