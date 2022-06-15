<template>
<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <header class="flex justify-between items-center ">
      <!-- nav - start -->
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <img src="@/assets/PG_logo.png" alt="Logo" class="text-gray-800 text-2xl lg:text-3xl">
      </div>
      <!-- nav - end -->
    </header>
  </div>
</div>
<div class="bg-white mb-96 pt-10">
  <div class="">
    <section class="min-h-96 flex justify-center items-center flex-1 shrink-0 overflow-hidden rounded-lg relative">
      <!-- text start -->
      <div class="flex flex-col items-center text-center">
        <h1 class="orenge success_bottom lg:tracking-widest px-4 finish text-lg sm:text-2xl text-center lg:mb-10 mb-4 md:mb-6 sm:mb-10">お問い合わせ完了</h1>
        <div class="sm:contents hidden">
          <p class="finish tracking-widest lg:mb-10 mb-4 md:mb-6 text-gray-500 md:text-lg mx-auto">送信が完了しました。担当者より連絡させていただきます。</p>
          <p class="finish tracking-widest text-gray-500 md:text-lg text-xm mx-auto">通常1営業日以内に お問い合わせ対応させていただきます。</p>
          <p class="finish tracking-widest text-gray-500 md:text-lg text-xm mx-auto lg:contents hidden">連絡がない場合は再度お問い合わせフォームよりご連絡いただくか、03-6206-9608まで直接ご連絡ください。</p>

          <p class="finish tracking-widest text-gray-500 md:text-lg mt-4 text-xm mx-auto lg:hidden">連絡がない場合は再度お問い合わせフォームよりご連絡いただくか、</p>
          <p class="finish tracking-widest text-gray-500 md:text-lg text-xm mx-auto lg:hidden">03-6206-9608まで直接ご連絡ください。</p>
        </div>
        
        <div class="sm:hidden contents text-center mt-4">
          <p class="finish tracking-widest lg:mb-10 mb-4 md:mb-6 text-gray-500 text-sm mx-auto">送信が完了しました。</p>
          <p class="finish tracking-widest lg:mb-10 mb-4 md:mb-6 text-gray-500 text-sm mx-auto">担当者より連絡させていただきます。</p>
          <p class="finish tracking-widest text-gray-500 text-sm mx-auto">通常1営業日以内に</p>
          <p class="finish tracking-widest text-gray-500 text-sm mx-auto sm:mb-0 mb-4">お問い合わせ対応させていただきます。</p>
          <p class="finish tracking-widest text-gray-500 text-sm mx-auto">連絡がない場合は</p>
          <p class="finish tracking-widest text-gray-500 text-sm mx-auto">再度お問い合わせフォームよりご連絡いただくか、</p>
          <p class="finish tracking-widest text-gray-500 text-sm mx-auto">03-6206-9608まで直接ご連絡ください。</p>
        </div>
      </div>
      <!-- text end -->
    </section>
  </div>
</div>
<footer>
  <div class="flex flex-col items-center border-t pt-10 ">
    <!-- nav - start -->
    <div class="flex flex-wrap justify-center md:justify-start gap-20">
      <div class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">
        <img src="@/assets/PG_rd1.png" alt="Logo" class="text-gray-800 text-2xl lg:text-3xl font-bold text-center">
      </div>
      <div class="" >
        <div class="mb-5">
          <p class="max-w-screen-md text-white text-center text-sm">GA4に関する質問・疑問にお答えします。</p>
          <p class="max-w-screen-md text-white text-center text-sm">お気軽にお問い合わせください。</p>
        </div>

        <p class="max-w-screen-md text-white text-center text-sm mb-10">03-6206-9608(10:30~19:30/土日・祝除く)</p>
        <p class="max-w-screen-md text-white text-center text-sm pb-10">Copyright © PROJECT GROUP, Inc. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</footer>
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
<style >
.success_bottom{
  border-bottom: 2px solid rgba(248, 125, 3, 1);
}
footer{
  background:rgba(39, 49, 64, 1);
}
</style>
