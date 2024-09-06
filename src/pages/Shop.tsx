import React from "react";
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
                <React.Fragment>
                    {data!.products.map((shop) => (
                        <aside key={shop.id}>
                            <img 
                                src={shop.thumbnail} 
                                alt={shop.title} 
                            />
                            <h3>{shop.title}</h3>
                            <h2>{shop.price}</h2>
                        </aside>
                    ))}
                </React.Fragment>
            )}
        </React.Fragment>
    );
};



