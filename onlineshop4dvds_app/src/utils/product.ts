export enum ProductType {
    Album,
    Movie,
    Game,
    All
}

export enum ProductOrder {
    Newest,
    PriceLowestToHighest,
    PriceHighestToLowest,
    TopRated,
    MostPopular
}

export const orderToString = (productOrder: ProductOrder): string => {
    switch (productOrder) {
        case ProductOrder.Newest || 0:
            return "Newest";
        case ProductOrder.PriceLowestToHighest || 1:
            return "Price: Lowest to highest";
        case ProductOrder.PriceHighestToLowest || 2:
            return "Price: Highest to lowest";
        case ProductOrder.TopRated || 3:
            return "Top Rated";
        case ProductOrder.MostPopular || 4:
            return "Most Popular";
        default:
            console.log(productOrder);
            throw new Error("invalid product order");
    }
}