import {STAGE, CATEGORY, PACKING, ANIMAL} from '@/models/enums'
import {IProduct} from '@/models/interfaces'

export default [
{
  code: '909688',
  name: 'FitMix',
  type: 'Therapeutic',
  category: CATEGORY.DRINK,
  packing: PACKING.PACKAGE,
  weight: '2 кг',
  stages: [STAGE.CALVING],
  animals: [ANIMAL.COW],
  shortDescription: 'Cмесь кормовая лечебная для коров после отела',
  fullDescription: 'Cмесь кормовая лечебная для коров после отела',
  gost: 'ТУ 10.91.10-003-25608808-2019',
  img: 'fitmix-l-2-min.png',
  applying: `Содержимое пакета FITMIX размешать в 20л
  теплой воды (35 - 40 °С), дать настояться в течение двух минут, затем еще раз
  перемешать и перелить в устройство для вливания жидкости в рубец (дренчер),
  после чего произвести ввод готового раствора в рубец с помощью зонда.
  Регидрацию проводить не позднее 30 минут после отела. После введения FITMIX,
  обеспечить корове доступ к теплой воде. Растворять непосредственно перед
  выпаиванием.`,
  enhancements: [
    'Расходует вредный кислород в рубце',
    'Увеличивает биомассу в рубце',
    'Оптимизирует состав микрофлоры рубца',
    'Повышает переваримость корма',
    'Улучшает обмен веществ',
    'Снимает нагрузку с печени'
  ],
  indicators: [
    {
      name: 'компоненты',
      measurement: ` в кг.`,
      values: [
        [`Кальций`, `12.0 %`],
        [`Фосфор`, `2.5%`],
        [`Натрий`, `6.5 %`],
        [`Магний`, `5.0 %`],
        [`Витамин А`, `50 000 M.E.`],
        [`Витамин D3`, `5 000 M.E.`],
        [`Витамин Е `, `400.0 мг.`],
      ]
    },
    {
      name: 'витамины',
      measurement: ` в кг.`,
      values: [
        [`Витамин А`, `15 000 М.Е.`],
        [`Витамин D3`, `1 500 М.Е.`],
        [`Витамин Е`, `120 мг`]
      ]
    }
  ],
  composition: `Пропионат кальция, декстрозу, лактозу, мелкоизмельченный
  льняной жмых, сорбитол, порошок сладкой молочной сыворотки, пивные дрожжи,
  витаминно-минеральный премикс, хлорид кальция, хлорид натрия, сульфат
  магния.`,
}, {
  code: '312493',
  name: 'FitMix',
  type: 'Prophylactic',
  category: CATEGORY.DRINK,
  packing: PACKING.PACKAGE,
  weight: '2 кг',
  stages: [STAGE.CALVING],
  animals: [ANIMAL.COW],
  shortDescription: 'Смесь кормовая профилактическая для коров после отела',
  fullDescription: 'Смесь кормовая профилактическая для коров после отела',
  gost: 'ТУ 10.91.10-003-25608808-2019',
  img: 'fitmix-p-2-min.png',
  applying: `Содержимое пакета FITMIX размешать в 20л
  теплой воды (35 - 40 °С), дать настояться в течение двух минут, затем еще раз
  перемешать и выпоить корове сразу после отела (не позднее 30 минут после
  отела). После выпойки FITMIX, обеспечить корове доступ к теплой воде.
  Растворять непосредственно перед выпаиванием.`,
  enhancements: [
    'Расходует вредный кислород в рубце',
    'Увеличивает биомассу в рубце',
    'Оптимизирует состав микрофлоры рубца',
    'Повышает переваримость корма',
    'Улучшает обмен веществ',
    'Снимает нагрузку с печени'
  ],
  indicators: [
    {
      name: 'компоненты',
      measurement: ` в кг.`,
      values: [
        [`Кальций`, `14.0 %`],
        [`Фосфор`, `4.0%`],
        [`Натрий`, `3.5 %`],
        [`Магний`, `5.5 %`]
      ]
    },
    {
      name: 'витамины',
      measurement: ` в кг.`,
      values: [
        [`Витамин А`, `75 000 M.E.`],
        [`Витамин D3`, `7 500 M.E.`],
        [`Витамин Е `, `600.0 мг.`]
      ]
    }
  ],
  composition: `Карбонат кальция, патоку, витаминно-минеральный премикс, монокальцийфосфат,
  пшеничные отруби мелкоизмельченные, оксид магния, хлорид натрия, натуральный ментол`,
}] as IProduct[]
