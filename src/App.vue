<template>
  <div class="container">
    <h2>カンタン１分で完了！</h2>
    <div id="app">
      <div class="form-name">
          <p>会社<span>*必須</span></p>
          <input type="text" company="message" placeholder="例) 株式会社⚪︎⚪︎⚪︎⚪︎" v-model="company">
      </div>
      <div class="form-name">
          <p>名前</p>
          <input type="text" name="name" placeholder="お名前" v-model="name">
      </div>
      <div class="form-email">
          <p>メールアドレス</p>
          <input type="text" name="email" placeholder="例) sample@sample.jp" v-model="email">
      </div>

      <div class="form-phone">
          <p>電話番号</p>
          <input type="text" name="phone" placeholder="00000000000" v-model="phone">
      </div>
    </div>
    <div>
      <button @click="increment">{{count}}</button>
    </div>
  </div>
</template>

<script>
export default ({
  name: 'App',
  data() {
    return {
      company: "",
      name: "",
      email: "",
      phone: "",
      count: 0,

    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
</script>

<style>
.container{
    text-align:center;
}

#app{
    text-align:center;
}

.form-name,.form-phone,.form-email{
    width:80%;
    margin:0 auto;
    padding:15px 0;
    margin-bottom:30px;
    background-color:whitesmoke;
}

input{
    padding:5px 10px;
    min-width:250px;
}

.error-name,.error-phone,.error-email{
    color:red;
    font-weight:bold;
    text-align:center;
}

button{
    width:80%;
    background-color: teal;
    color:white;
    padding:20px 0;
    border:none;
    border-radius:10px;
    cursor:pointer;
    margin-bottom: 50px;
}
</style>

    