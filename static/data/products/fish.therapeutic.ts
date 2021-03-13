import {STAGE, CATEGORY, PACKING, ANIMAL} from '@/models/enums'
import {IProduct} from '@/models/interfaces'

export default [
{
  code: '766755',
  name: 'Pescary',
  type: 'Therapeutic Antibak 100',
  category: CATEGORY.HEALING,
  packing: PACKING.BAG,
  weight: '25 кг',
  stages: [STAGE.START],
  animals: [ANIMAL.FISH],
  shortDescription: 'Терапевтический корм от краснухи и других бактериальных заболеваний рыб.',
  fullDescription: 'Терапевтический корм от краснухи и других бактериальных заболеваний рыб.',
  //gost: 'ГОСТ 26573.0-2017',
  applying: `Лечение и профилактика бактериальных заболеваний, вызванных возбудителями аэромоноза,
  псевдомоноза, миксобактериозов, фурункулеза, энтеробактериозов, бактериальной
  геморрагической септицемии, микобактериоза, стрептококкоза. Применяется также для
  вспомогательной терапии при незаразных, вирусных, грибковых и инвазионных болезнях рыб,
  осложненных бактериальной инфекцией.`,
  dosing: [
    'Комбикорм применяют рыбам при температуре воды в водоеме не ниже 12° С, с лечебной целью 5–10 суток, с лечебно-профилактической - 3 суток, в следующих дозах:',
    'При аэромонозе – 0,5 кг на 100 кг рыбы в сутки.',
    'При фурункулезе, вибриозе, стрептококкозе, бактериальном некрозе жабр и плавников – 2 кг на 100 кг рыбы в сутки.',
    'При псевдомонозе и миксобактериозах – 4 кг на 100 кг рыбы в сутки.'
  ],
  specialIstructions: [`Отлов и использование товарной рыбы в пищевых целях разрешается через 4 суток (при
    температуре выше 15°С) и через 11 суток (при температуре ниже 15°С) после окончания
    применения комбикорма.`],
  sideEffects: ['При передозировке у рыб может наблюдаться потемнение окраски тела и снижение пищевой активности.'],
  indicators: [
    {
      name: 'ПОКАЗАТЕЛИ',
      measurement: `( в кг. )`,
      values: [
        [`Протеин, не менее`, `24.0 %`],
        [`Жир, не менее`, `5.0 %`],
        [`Зола, не более`, `8.0 %`],
        ['Клетчатка, не более', '5.5 %'],
        ['Переваримая энергия, не менее', '13.5 МДж']
      ]
    }
  ],
  composition: `Состав: Пшеница, подсолнечный шрот, горох экструдированный, рыбная мука, рапсовый
  жмых, кукуруза, рапсовое масло, премикс, ветеринарный препарат (Антибак 100).`,
}, {
  code: '690402',
  name: 'Pescary',
  type: 'Therapeutic Crustacid',
  category: CATEGORY.HEALING,
  packing: PACKING.BAG,
  weight: '25 кг',
  stages: [STAGE.START],
  animals: [ANIMAL.FISH],
  shortDescription: 'Терапевтический антирачковый корм',
  fullDescription: 'Терапевтический корм для лечения лернеоза и аргулёза рыб.',
  //gost: 'ГОСТ 26573.0-2017',
  applying: `Лечение и профилактика лернеоза и аргулёза рыб.`,
  dosing: [
    'Комбикорм применяют рыбам при температуре воды в водоеме не ниже 20° С, в дозе 2 кг на 100 кг рыбы в сутки, 14 дней подряд.'
  ],
  specialIstructions: [`Отлов и использование рыбы в пищу разрешается спустя 16 суток после последней дачи
  комбикорма.`],
  sideEffects: [`При передозировке препарата может отмечаться потемнение окраски рыб, снижение
  подвижности и реакции на внешние раздражители. В случае передозировки кормление рыб
  прекращают, в водоеме увеличивают водообмен и усиливают аэрацию.`],
  indicators: [
    {
      name: 'ПОКАЗАТЕЛИ',
      measurement: `( в кг. )`,
      values: [
        [`Протеин, не менее`, `24.0 %`],
        [`Жир, не менее`, `5.0 %`],
        [`Зола, не более`, `8.0 %`],
        ['Клетчатка, не более', '5.5 %'],
        ['Переваримая энергия, не менее', '13.5 МДж']
      ]
    }
  ],
  composition: `Состав: Пшеница, подсолнечный шрот, горох экструдированный, рыбная мука, рапсовый
  жмых, кукуруза, рапсовое масло, премикс, ветеринарный препарат (Крустацид).`,
}] as IProduct[]
