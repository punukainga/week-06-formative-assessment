const Book = (props) => {
  return (
    <>
      <p>{props.name}</p>
      <p>${props.price}</p>
      <button
        onClick={() =>
          props.addToCart({
            id: props.id,
            name: props.name,
            price: props.price,
          })
        }
        data-testid={`add-to-cart-${props.id}`}
      >
        Add to cart
      </button>
    </>
  );
};

export default Book;
