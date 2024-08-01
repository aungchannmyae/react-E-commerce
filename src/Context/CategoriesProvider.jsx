import React, { createContext } from 'react'

export const CategoryContext = createContext()
const CategoriesProvider = ({children}) => {
    const categories = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing",
      ];
  return (
    <CategoryContext.Provider value={{categories}}>{children}</CategoryContext.Provider>
  )
}

export default CategoriesProvider