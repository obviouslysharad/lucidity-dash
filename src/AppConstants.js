export const WIDGET_KEYS = {
  TOTAL_PRODUCTS: "totalProducts",
  TOTAL_STORE_VALUE: "totalStoreValues",
  OUT_OF_STOCKS: "oos",
  NO_OF_CATEGORIES: "ncats",
};

export const PRODUCT_API_ENDPOINT =
  "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory";

export const dashboardColumns = [
  "name",
  "category",
  "price",
  "quantity",
  "value",
];

export const editableColumns = ["category", "price", "quantity", "value"];

export const widgetConstants = [
  { id: WIDGET_KEYS.TOTAL_PRODUCTS, heading: "Total products" },
  { id: WIDGET_KEYS.TOTAL_STORE_VALUE, heading: "Total store value" },
  { id: WIDGET_KEYS.OUT_OF_STOCKS, heading: "Out of stock" },
  { id: WIDGET_KEYS.NO_OF_CATEGORIES, heading: "No. of categories" },
];
