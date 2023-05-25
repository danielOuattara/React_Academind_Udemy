import { initStore } from "./useStore";

export default function configureProductsStore() {
  const actions = {
    TOGGLE_FAVORITE: (currentState, productId) => {
      const prodIndex = currentState.products.findIndex(
        (p) => p.id === productId,
      );
      const updatedProducts = [...currentState.products];
      updatedProducts[prodIndex] = {
        ...updatedProducts[prodIndex],
        isFavorite: !currentState.products[prodIndex].isFavorite,
      };

      return { products: updatedProducts };
    },
  };
  initStore(actions, {
    products: [
      {
        id: "p1",
        title: "Red Scarf",
        description: "A pretty red scarf.",
        isFavorite: false,
      },
      {
        id: "p2",
        title: "Blue T-Shirt",
        description: "A pretty blue t-shirt.",
        isFavorite: false,
      },
      {
        id: "p3",
        title: "Green Trousers",
        description: "A pair of lightly green trousers.",
        isFavorite: false,
      },
      {
        id: "p4",
        title: "Orange Hat",
        description: "Street style! An orange hat.",
        isFavorite: false,
      },
    ],
  });
}
