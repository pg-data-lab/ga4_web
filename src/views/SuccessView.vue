<template>
<!-- hero - start -->
<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div class="flex justify-between items-center py-4 md:py-8 mb-4">
      
    </div>

    <section class="min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48">

      <!-- text start -->
      <div class="sm:max-w-3xl flex flex-col items-center relative p-4">
        <h1 class="text-black-800 text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">お問い合わせ<br>ありがとうございました</h1>
        <p class="text-black-800 text-lg sm:text-xl text-center mb-4 md:mb-8">1〜3営業日以内にご返信いたします</p>
      </div>
      <!-- text end -->
    </section>
  </div>
</div>
<!-- hero - end -->
</template>

<script>
export default {
  name: 'SuccessPage',
  props: {
    msg: {
      type:String,
      default:"false"
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.initialize(); 
      next();
    });
  },
  methods: {
    initialize() {
      if(this.msg==="true"){
        return true
      }else{
        this.$router.push({ name: 'top' });
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
