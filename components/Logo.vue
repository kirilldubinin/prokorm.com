<template>
  <section class="flex">
    <nuxt-link to="/">
      <div class="logo rounded-sm tracking-wider bg-orange-400 text-gray-100 text-center shadow-md cursor-pointer hover:shadow-lg">
        <!--span class="block text-xs tracking-widest opacity-75 mt-6">ООО</span-->
        <div class="font-comfortaa">ООО</div>
        <div class="font-comfortaa">"ПРОКОРМ"</div>
        <div class="korm block text-xs tracking-tight leading-3 align-top">кормление животных</div>
      </div>
    </nuxt-link>
  </section>
</template>

<style lang="scss">
  .logo {
    background: linear-gradient(135deg, #fa782e 8%, #c82930 83%);
    padding-top: 1.8rem;
    width: 7rem;
    height: 7rem;
    font-size: 0.9rem;
    .korm {
      font-size: 0.55rem;
    }
  }
</style>
