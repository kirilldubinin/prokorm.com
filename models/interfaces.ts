import {ANIMAL, CATEGORY, PACKING, STAGE} from './enums'

export interface IIndicator {
  name: string;
  measurement: string;
  values: string[][]
}

export interface IProduct {
  code: string;
  name: string;
  type: string;
  animals: ANIMAL[];
  category: CATEGORY,
  packing: PACKING,
  stages: STAGE[],
  weight: string;
  shortDescription: string;
  fullDescription: string;
  gost?: string;
  dosing: string[];
  enhancements: string[];
  composition: string;
  indicators: IIndicator[]
}

export interface IFilterItem {
  label: string,
  value: string
}

export interface IBreadcrumbs {
  label: string,
  url?: string
}

export interface INavigatorItem {
  url: string,
  animal: ANIMAL,
  categories?: CATEGORY[],
  svg?: string
}
