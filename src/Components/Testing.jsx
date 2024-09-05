import React from 'react'
import useGeneralStore from '../store/GeneralStore';

const Testing = () => {
    const { productsBox, setProductsBox } = useGeneralStore();

    return (
    <>
        <div className={` ${ productsBox ? " translate-y-0 opacity-100 duration-300" : "opacity-0 -translate-y-full duration-300"} fixed top-0 right-0 w-full h-screen bg-slate-100 backdrop-blur-sm bg-opacity-75 z-[999997]`}>
            <div className=' flex justify-center items-center mt-10'>
                <div className=' w-[800px] h-[500px] bg-slate-500'>
                    <button onClick={setProductsBox}>click</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Testing