export interface TFruit {
  id: string;
  name: string;
  family: string;
  genus: string;
  order: string;
  nutritions: TNutrition;
}

export interface TNutrition {
  carbohydrates: number;
  protein: number;
  fat: number;
  calories: number;
  sugar: number;
}
