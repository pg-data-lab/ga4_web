<template>
  <h1>お問い合わせありがとうございました</h1>
  <h1>1〜3営業日以内にご返信いたします</h1>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
