<template>
  <section class="container m-auto max-w-4xl w-4xl">
    <Header/>
    <!--MainNavigator class="my-24"/-->
    <section class="w-3/4 mx-auto mb-6">
      <h1 class="text-center text-orange-600 uppercase">о нас</h1>
      <div class="text-xs text-justify text-gray-600">
        <p class="my-2 leading-5">
          Компания ПРОКОРМ занимается кормлением животных с 2013 года,
          все это время наш главный принцип очень прост но надежен,
          наши продукты должны приносить ПРИБЫЛЬ нашим клиентам.
          Дя этого мы обязаны придерживатся двух критериев нашей роботы -
          выбор наилучшего сырья и понимание процесса составления сбалансированных рационов для
          любых продуктивных животных на определенных этапах их выращивания.
        </p>
        <p class="my-2 leading-5">
          Именно поэтому любой наш продукт гарантирует получение,
          а главное усвоение необходимых питательных, минеральных и
          витаминных состовляющих рациона животного.
        </p>

      </div>
    </section>

    <section class="w-3/4 mx-auto my-6">
      <h1 class="text-center text-gray-600 uppercase">что мы делаем</h1>
      <div class="text-xs text-justify text-gray-600">
        <p class="my-2 leading-5">
          На данный момент компания ПРОКОРМ является производителем премиксов, комбикормов, БМВК и лизунцов
          для любых продуктивных животных. Нашей гордостью является комплексный подход
          к составлению рецептуры продукта, будь то кормовая добавка или полноценный корм -
          главным принципом является обеспечить организм животного необходимим набором элементов
          на конкренном этапе жизни.
        </p>
      </div>
    </section>

    <section class="w-3/4 mx-auto my-6">
      <h1 class="text-center text-gray-600 uppercase">эффективность</h1>
      <div class="text-xs text-justify text-gray-600">
        <p class="my-2 leading-5">
          Эффективность с нашй точки зрения это баланс между ценой и результатом,
          поэтому мы стараемся разделять наши продукты по фазам жизни продуктивных животных,
          то что нужно несушке не актуально для бройлера, без чего не может быть сухостой у коров -
          совершенно не актуально в периоды лактации. Каждый продукт чотко для своего места и фазы,
          ничего лишнего и в тоже время все самое необходимое.
        </p>
      </div>
    </section>

    <section class="w-3/4 mx-auto my-6">
      <h1 class="text-center text-gray-600 uppercase">из чего это сделано</h1>
      <div class="text-xs text-justify text-gray-600">
        <p class="my-2 leading-5">
          Мы не используем зерноотходы либо другие "непонятные" компоненты в наших продуктах.
          На любой нашей упаковке Вы найдете полное описние состава и основных параметров продукта,
          таких как Сырой протеин, Обменная энергия и др. Зерновые состовляющие наших продуктов
          проходят процесс экструдирования, что позволяет увеличить процент усвоения корма и улучшить вкусовые показатели.
          Мы понимаем как важна витаминно-минеральная часть продукта, поэтому во все, без исключения, наши продукты
          мы вводим премиксы собственного производства.
        </p>
      </div>
      <!--div class="grid grid-cols-3 gap-6 font-comfortaa w-full m-auto mt-12">
        <div class="w-full shadow-md rounded-sm">
          <div class="h-48 w-full bg-cover bg-center rounded-t text-center opacity-75"
            style="background-image: url('/common/corn_ext.png')">
          </div>
          <h2 class="text-xxs text-center text-gray-700 py-4">КУКУРУЗА ЭКСТРУДИРОВАННАЯ</h2>
          <div>

          </div>
        </div>
        <div class="w-full shadow-md rounded-sm">
          <div class="h-48 w-full bg-cover bg-center rounded-t text-center opacity-75"
            style="background-image: url('/common/peas_ext.png')">
          </div>
          <h2 class="text-xxs text-center text-gray-700 py-4">ГОРОХ ЭКСТРУДИРОВАННЫЙ</h2>
          <div>

          </div>
        </div>
        <div class="w-full shadow-md rounded-sm">
          <div class="h-48 w-full bg-cover bg-center rounded-t text-center opacity-75"
            style="background-image: url('/common/weat_ext.png')">
          </div>
          <h2 class="text-xxs text-center text-gray-700 py-4">ПШЕНИЦА ЭКСТРУДИРОВАННАЯ</h2>
          <div>

          </div>
        </div>
      </div-->
    </section>

    <!--section class="w-3/4 mx-auto my-6">
      <h1 class="text-center text-gray-600 uppercase">что такое сбалансированный рацион</h1>
      <div class="text-xs text-justify text-gray-600">
        <p class="my-2 leading-5">
          Большое внимание мы уделяем балансировки рационов, перед тем как изготовить любой продукт
          происходит расчет рецепта и его балансировка по основных параметрам, таким как сырой протеин, обменная энергия и клетчатка.
          Важно понимать что любое отклонение одно их параметров делают корма несбалансированными,
          что в последствии делает их малоэффективными.
          пример балансировки тут
        </p>
      </div>
    </section-->

    <Footer/>
  </section>
</template>

<script lang="ts">

import Vue from 'vue'
import Header from '../components/Header.vue'
import MainNavigator from '../components/MainNavigator.vue'

export default Vue.extend({})
</script>

<style lang="scss">
.container {
}
</style>
