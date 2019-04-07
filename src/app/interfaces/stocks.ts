export interface Stocks {
    id: number;
    symbol: string;
    name?: string;
    openPrice: number;
    closePrice: number;
    currentPrice?: number | string;
    marketName: string;
}
