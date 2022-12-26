import desktopProductImage from './images/image-product-desktop.jpg';
import mobileProductImage from './images/image-product-mobile.jpg';
import iconCart from './images/icon-cart.svg';
import './App.css';

function ProductImage(props) {
  return (
    <picture className='product-image'>
      <source media='(max-width: 650px)' srcSet={props.mobileImageSrc} />

      <img src={props.desktopImageSrc} alt='Product image' />
    </picture>
  );
};

function ProductInformations(props) {
  return (
    <section className='product-informations'>
      <h2 className='product-type'>{props.type}</h2>

      <h1 className='product-name'>{props.name}</h1>

      <p className='product-description'>{props.description}</p>

      <div className='product-price-informations'>
        <p className='product-current-price'>{props.currentPrice}</p>

        <p className='product-regular-price'><s>{props.regularPrice}</s></p>
      </div>

      <button className='buy-button' onClick={() => {
        alert('Thanks for the purchase!');
      }}>
        <img src={iconCart} alt='Cart icon' />

        <p>Add to Cart</p>
      </button>
    </section>
  );
};

function ProductCardComponent(props) {
  return (
    <main className='product-card-component'>
      <ProductImage
      mobileImageSrc={props.productMobileImageSrc}
      desktopImageSrc={props.productDesktopImageSrc}
      />

      <ProductInformations
      type={props.productType}
      name={props.productName}
      description={props.productDescription}
      currentPrice={props.productCurrentPrice}
      regularPrice={props.productRegularPrice}
      />
    </main>
  );
};

function App() {
  return (
    <>
      <ProductCardComponent
      productDesktopImageSrc={desktopProductImage}
      productMobileImageSrc={mobileProductImage}
      productType='perfume'
      productName='Gabrielle Essence Eau De Parfum'
      productDescription='
      A floral, solar and voluptuous interpretation
      composed by Olivier Polge, Perfumer-Creator
      for the House of CHANEL.'
      productCurrentPrice='$149.99'
      productRegularPrice='$169.99'
      />
    </>
  );
}

export default App;
