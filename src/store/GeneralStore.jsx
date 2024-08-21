import { create } from "zustand";

const useGeneralStore = create((set) => ({
  cartDrawer: false,
  setCartDrawer: () =>
    set((state) => ({
      cartDrawer: !state.cartDrawer,
    })),

  productsBox: false,
  setProductsBox: () =>
    set((state) => ({
      productsBox: !state.productsBox,
    })),

  productsItemBox: false,
  setProductsItemBox: () =>
    set((state) => ({
      productsItemBox: !state.productsItemBox,
    })),
}));

export default useGeneralStore;