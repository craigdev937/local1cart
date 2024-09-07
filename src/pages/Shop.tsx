import React from "react";
import "./Shop.css";
import { ShopAPI } from "../global/ShopAPI";

export const Shop = () => {
    const { error, isLoading, data } = 
        ShopAPI.useShopQuery();

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error : 
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>
        } else {
            return <h1>{error.message}</h1>
        }
    };

    return (
        <React.Fragment>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <main>
                    {data!.products.map((shop) => (
                        <aside 
                            className="shop" 
                            key={shop.id}
                        >
                            <p>{shop.title}</p>
                            <img 
                                src={shop.thumbnail} 
                                alt={shop.title} 
                            />
                            <h3>${shop.price}</h3>
                        </aside>
                    ))}
                </main>
            )}
        </React.Fragment>
    );
};



