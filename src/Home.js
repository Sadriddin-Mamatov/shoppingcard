import React from 'react'
import Itemcard from "./Itemcard";
import data from "./data";



const Home = () => {

    return (
        <div>
            <h1 className="text-center mt-3">All Items</h1>
            <section className="py-4 constainer">
                <div className="row justify-content-center">
                    {data.productData.map((item, index)=> {
                        return (
                            <Itemcard 
                            img={item.img} 
                            item={item} 
                            title={item.title} 
                            desc={item.desc}
                             price={item.price} 
                             key={index}/>

                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Home
