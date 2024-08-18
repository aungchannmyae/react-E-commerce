import { create } from "zustand";

const useGeneralStore = create((set) => ({
  // const [cartDrawer, setCartDrawer] = useState(false);
  // const HandleCartDrawer = () => {
  //   setCartDrawer(!cartDrawer);
  //   //   console.log(cartDrawer);
  // };
  cartDrawer: false,
  setCartDrawer: () =>
    set((state) => ({
      cartDrawer: !state.cartDrawer,
    })),
  // const [productsBox, setProductsBox] = useState(false);
  // const HandleProductsBox = () => {
  //   setProductsBox(!productsBox);
  // };
  productsBox: false,
  setProductsBox: () =>
    set((state) => ({
      productsBox: !state.productsBox,
    })),
  // const [productsItemBox, setProductsItemBox] = useState(false);
  // const HandleProductsItemBox = () => {
  //   setProductsItemBox(!productsItemBox);
  //   //   console.log(productsItemBox);
  // };
  productsItemBox: false,
  setProductsItemBox: () =>
    set((state) => ({
      productsItemBox: !state.productsItemBox,
    })),
}));

export default useGeneralStore;