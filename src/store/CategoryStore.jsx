import { create } from "zustand";

const useCategoriesStore = create((set) => ({
  categories: [
    { id: 1, name: "All", isActive: true },
    { id: 2, name: "electronics", isActive: false },
    { id: 3, name: "jewelery", isActive: false },
    { id: 4, name: "men's clothing", isActive: false },
    { id: 5, name: "women's clothing", isActive: false },
  ],
  activeCategory: (categoryBtn) =>
    set((state) => ({
      categories: state.categories.map((el) =>
        el.id === categoryBtn
          ? { ...el, isActive: true }
          : { ...el, isActive: false }
      ),
    })),
  productSection: [
    { id: 1, name: "electronics", isActive: true },
    { id: 2, name: "jewelery", isActive: false },
    { id: 3, name: "men's clothing", isActive: false },
    { id: 4, name: "women's clothing", isActive: false },
  ],
  activeProductSection: (categoryBtn) =>
    set((state) => ({
      productSection: state.productSection.map((el) =>
        el.id === categoryBtn 
          ? { ...el, isActive: true }
          : { ...el, isActive: false }
      ),
    })),
    openProductSection: (currentSection)=> 
      set((state)=> ({
        categories: state.categories.map((el) =>
          el.name == currentSection
            ? { ...el, isActive: true }
            : { ...el, isActive: false }
        ),
      })),
}));

export default useCategoriesStore;
