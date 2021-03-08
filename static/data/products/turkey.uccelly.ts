import {STAGE, CATEGORY, PACKING, ANIMAL} from '@/models/enums'
import {IProduct} from '@/models/interfaces'

export default [
  {
    code: '015617',
    name: 'UCCELLY',
    type: 'Turkey Start-1',
    category: CATEGORY.FEED,
    packing: PACKING.BAG,
    weight: '25 кг',
    stages: [STAGE.START],
    animals: [ANIMAL.TURKEY],
    shortDescription: 'Корм для цыплят индеек в период от 0 до 3 недель',
    fullDescription: 'Корм для цыплят индеек в период от 0 до 3 недель',
    //gost: 'ГОСТ 26573.0-2017',
    dosing: [
      'Расход корма/гол/сутки: 50 грамм.',
      'Расход корма/гол: 1,0 кг за период'
    ],
    enhancements: [],
    indicators: [
      {
        name: 'ПОКАЗАТЕЛИ',
        measurement: `( в кг. )`,
        values: [
          [`СП (мин.) `, `16.0 %`],
          [`ОЭ`, `9,7 МДж`],
          [`Сырая клетчатка (макс.)`, `10.0 %`],
          [`Сырая зола (макс.)`, `8.0 %`],
          [`Сырой жир (макс.) `, `3.0 %`],
        ]
      },
      {
        name: 'МАКРОЭЛЕМЕНТЫ',
        measurement: `( % в кг. )`,
        values: [
          [`Кальций `, `1.0`],
          [`Фосфор`, `0.7`]
        ]
      },
      {
        name: 'ВИТАМИНЫ',
        measurement: `( в кг. )`,
        values: [
          [`Витамин А`, `10 000 ME`],
          [`Витамин D3`, `1 200 ME`],
          [`Витамин E`, `30 мг`]
        ]
      }
    ],
    composition: `Кукуруза, пшеница, шрот соевый, жмых
    рапсовый, кукурузный глютен, рыбная мука, мясокостная мука, соевое масло,
    известняковая мука, премикс, монокальцийфосфат, соль, аминокислоты.`,
},
{
  code: '006685',
  name: 'UCCELLY',
  type: 'Turkey Start-2',
  category: CATEGORY.FEED,
  packing: PACKING.BAG,
  weight: '25 кг',
  stages: [STAGE.START],
  animals: [ANIMAL.TURKEY],
  shortDescription: 'Корм для цыплят индеек в период от 4 до 8 недель',
  fullDescription: 'Корм для цыплят индеек в период от 4 до 8 недель',
  //gost: 'ГОСТ 26573.0-2017',
  dosing: [
    'Расход корма/гол: 6,0 кг за период.'
  ],
  enhancements: [],
  indicators: [
    {
      name: 'ПОКАЗАТЕЛИ',
      measurement: `( в кг. )`,
      values: [
        [`СП (мин.) `, `16.0 %`],
        [`ОЭ`, `9,7 МДж`],
        [`Сырая клетчатка (макс.)`, `10.0 %`],
        [`Сырая зола (макс.)`, `8.0 %`],
        [`Сырой жир (макс.) `, `3.0 %`],
      ]
    },
    {
      name: 'МАКРОЭЛЕМЕНТЫ',
      measurement: `( % в кг. )`,
      values: [
        [`Кальций `, `1.0`],
        [`Фосфор`, `0.7`]
      ]
    },
    {
      name: 'ВИТАМИНЫ',
      measurement: `( в кг. )`,
      values: [
        [`Витамин А`, `10 000 ME`],
        [`Витамин D3`, `1 200 ME`],
        [`Витамин E`, `30 мг`]
      ]
    }
  ],
  composition: `Кукуруза, пшеница, шрот соевый, жмых
  рапсовый, кукурузный глютен, рыбная мука, мясокостная мука, соевое масло,
  известняковая мука, премикс, монокальцийфосфат, соль, аминокислоты.`,
},
{
  code: '036685',
  name: 'UCCELLY',
  type: 'Turkey Start-2',
  category: CATEGORY.FEED,
  packing: PACKING.BAG,
  weight: '25 кг',
  stages: [STAGE.FATTEING],
  animals: [ANIMAL.TURKEY],
  shortDescription: 'Корм для индеек в период интенсивного роста от 9 до 15 недель',
  fullDescription: 'Корм для индеек в период интенсивного роста от 9 до 15 недель',
  //gost: 'ГОСТ 26573.0-2017',
  dosing: [
    'Расход корма/гол: 18,0 кг за период.'
  ],
  enhancements: [],
  indicators: [
    {
      name: 'ПОКАЗАТЕЛИ',
      measurement: `( в кг. )`,
      values: [
        [`СП (мин.) `, `16.0 %`],
        [`ОЭ`, `9,7 МДж`],
        [`Сырая клетчатка (макс.)`, `10.0 %`],
        [`Сырая зола (макс.)`, `8.0 %`],
        [`Сырой жир (макс.) `, `3.0 %`],
      ]
    },
    {
      name: 'МАКРОЭЛЕМЕНТЫ',
      measurement: `( % в кг. )`,
      values: [
        [`Кальций `, `1.0`],
        [`Фосфор`, `0.7`]
      ]
    },
    {
      name: 'ВИТАМИНЫ',
      measurement: `( в кг. )`,
      values: [
        [`Витамин А`, `10 000 ME`],
        [`Витамин D3`, `1 200 ME`],
        [`Витамин E`, `30 мг`]
      ]
    }
  ],
  composition: `Кукуруза, пшеница, шрот соевый, кукурузный
  глютен, мясокостная мука, соевое масло, известняковая мука, премикс,
  монокальцийфосфат, соль, аминокислоты.`,
},
{
  code: '536685',
  name: 'UCCELLY',
  type: 'Turkey Finish',
  category: CATEGORY.FEED,
  packing: PACKING.BAG,
  weight: '25 кг',
  stages: [STAGE.FINISH],
  animals: [ANIMAL.TURKEY],
  shortDescription: 'Корм для индеек в период заключительного откорма с 16 недели до убоя',
  fullDescription: 'Корм для индеек в период заключительного откорма с 16 недели до убоя',
  //gost: 'ГОСТ 26573.0-2017',
  dosing: [
    'Расход корма/гол: 4,0 кг в неделю.'
  ],
  enhancements: [],
  indicators: [
    {
      name: 'ПОКАЗАТЕЛИ',
      measurement: `( в кг. )`,
      values: [
        [`СП (мин.) `, `16.0 %`],
        [`ОЭ`, `9,7 МДж`],
        [`Сырая клетчатка (макс.)`, `10.0 %`],
        [`Сырая зола (макс.)`, `8.0 %`],
        [`Сырой жир (макс.) `, `3.0 %`],
      ]
    },
    {
      name: 'МАКРОЭЛЕМЕНТЫ',
      measurement: `( % в кг. )`,
      values: [
        [`Кальций `, `1.0`],
        [`Фосфор`, `0.7`]
      ]
    },
    {
      name: 'ВИТАМИНЫ',
      measurement: `( в кг. )`,
      values: [
        [`Витамин А`, `10 000 ME`],
        [`Витамин D3`, `1 200 ME`],
        [`Витамин E`, `30 мг`]
      ]
    }
  ],
  composition: `Кукуруза, пшеница, шрот соевый, шрот
  подсолнечный, мясокостная мука, соевое масло, известняковая мука, премикс,
  монокальцийфосфат, соль, аминокислоты..`,
}] as IProduct[]
