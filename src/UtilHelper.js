import { WIDGET_KEYS } from "./AppConstants";

export function transformToWidget(data) {
  let categorySet = new Set();
  let widgetKeyValues = data.reduce(
    (acc, value) => {
      acc[WIDGET_KEYS.TOTAL_PRODUCTS]++;
      if (value.quantity == 0) acc[WIDGET_KEYS.OUT_OF_STOCKS]++;
      if (!categorySet.has(value.category)) {
        acc[WIDGET_KEYS.NO_OF_CATEGORIES]++;
        categorySet.add(value.category);
      }
      acc[WIDGET_KEYS.TOTAL_STORE_VALUE] += Number(value.value.replace(/[^0-9]/g, ''));
      return acc;
    },
    {
      [WIDGET_KEYS.NO_OF_CATEGORIES]: 0,
      [WIDGET_KEYS.OUT_OF_STOCKS]: 0,
      [WIDGET_KEYS.TOTAL_PRODUCTS]: 0,
      [WIDGET_KEYS.TOTAL_STORE_VALUE]: 0,
    }
  );

  console.log(widgetKeyValues)

  return widgetKeyValues;
}
