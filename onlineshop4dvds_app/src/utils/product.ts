export enum ProductType {
    Album,
    Movie,
    Game,
    All
}

export enum ProductSortOrder {
    Newest,
    PriceLowestToHighest,
    PriceHighestToLowest,
    TopRated,
    MostPopular
}

export const orderToString = (productOrder: ProductSortOrder): string => {
    switch (productOrder) {
        case ProductSortOrder.Newest || 0:
            return "Newest";
        case ProductSortOrder.PriceLowestToHighest || 1:
            return "Price: Lowest to highest";
        case ProductSortOrder.PriceHighestToLowest || 2:
            return "Price: Highest to lowest";
        case ProductSortOrder.TopRated || 3:
            return "Top Rated";
        case ProductSortOrder.MostPopular || 4:
            return "Most Popular";
        default:
            console.log(productOrder);
            throw new Error("invalid product order");
    }
}