export interface Pricing {
    name: string;
    price: {
      currencySymbol: string;
      amount: string;
      period: string;
    };
    features: {
      icon: string;
      text: string;
      lineThrough?: boolean;
    }[]}