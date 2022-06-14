<template>
<div class="max-w-screen-2xl px-4 md:px-8 mx-auto mb-10">
  <header class="flex justify-between items-center ">
    <!-- nav - start -->
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <img src="@/assets/PG_logo.png" alt="Logo" class="text-gray-800 text-2xl lg:text-3xl font-bold text-center">
    </div>
    <!-- nav - end -->
  </header>

  <div class="bg-white">
      <div class="grid lg:grid-cols-5 md:grid-cols-4 grid-cos-1 gap-12 xl:mx-32 lg:mx-20 md:mx-20 sm:mx-20 md:mx-10">
        <div class="left w-full lg:col-span-3 md:col-span-2 cos-span-1 sm:text-left text-center">
          <img src="@/assets/GA4.png" alt="img" class="text-gray-800 w-full h-72 text-center mx-auto">
          <h1 class="orenge lg:tracking-widest  finish text-2xl text-center mb-4 md:mb-6 sm:contents hidden">Google Analytics 4 資料ダウンロード</h1>

          <div class="sm:hidden contents">
            <h1 class="orenge lg:tracking-widest finish text-2xl text-center">Google Analytics 4</h1>
            <h1 class="orenge lg:tracking-widest finish text-2xl text-center mb-10">資料ダウンロード</h1>
          </div>

          <p class="finish tracking-widest text-gray-500 text-lg mx-auto">GoogleAnalytics 4とはなにか。</p>
          <p class="finish tracking-widest text-gray-500 text-lg mx-auto">具体的にどう変わったのか。</p>
          <p class="finish tracking-widest text-gray-500 text-lg mx-auto sm:contents hidden">導入するにはどうすればよいかを紹介した資料をお送りします。</p>
          <div class="sm:hidden contents">
            <p class="finish tracking-widest text-gray-500 text-lg mx-auto">導入するにはどうすればよいかを</p>
            <p class="finish tracking-widest text-gray-500 text-lg mx-auto">紹介した資料をお送りします。</p>
          </div>
          
          <div class="mt-5">
            <h1 class="finish tracking-widest text-gray-500 text-2xl text-gray-500 mb-2"><img src="@/assets/light_icon.png" alt="Logo" class="mb-2.5 mr-2 font-bold text-center inline-block">この資料でわかること</h1>
            <ul class="max-w-screen-md  text-gray-500 md:text-lg sm:ml-10 ml-0">
              <li class="finish sm:tracking-widest tracking-wide">GoogleAnalytics 4とは</li>
              <li class="finish sm:tracking-widest tracking-wide">GoogleAnalytics 4の5つの変更点</li>
              <li class="finish sm:tracking-widest tracking-wide">GA4導入を今すぐ行う必要性</li>
              <li class="finish sm:tracking-widest tracking-wide">導入サポートの料金費用</li>
              <li class="finish sm:tracking-widest tracking-wide">ご発注から計測開始までのスケジュール</li>
            </ul>
          </div>
        </div>

        <div class="right p-4 shadow-md lg:col-span-2 md:col-span-2 cos-span-1 md:h-min mx-auto">
          <!-- text - start -->
          <div class="mb-10 md:mb-16">
            <h1 class="finish text-gray-800 tracking-widest text-2xl lg:text-2xl text-center mb-4 text-gray-500 mx-auto">カンタン1分で完了</h1>
          </div>
          <!-- text - end -->

          <!-- form - start -->
          <form class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
            <div class="sm:col-span-2">
              <label for="company" class="tracking-wider font-label font-bold inline-block text-sm sm:text-base mb-2">会社名</label>
              <input id="company" name="company" v-model="company" type="text" placeholder="例)  PROJECTGROUP株式会社" class="w-full rounded-lg border-gray-300 border-2 placeholder-gray-300" />
              <p v-if="errors['company']" class="error">{{errors['company']}}</p>
            </div>

            <div class="sm:col-span-2">
              <label for="name" class="tracking-wider font-label font-bold inline-block text-sm sm:text-base mb-2">氏名</label>
              <input id="name" name="name" v-model="name" type="text" placeholder="例)  お名前" class="w-full rounded-lg border-gray-300 border-2 placeholder-gray-300" />
              <p v-if="errors['name']" class="error">{{errors['name']}}</p>
            </div>

            <div class="sm:col-span-2">
              <label for="email" class="tracking-wider font-label font-bold inline-block text-sm sm:text-base mb-2">メールアドレス</label>
              <input id="email" name="email" v-model="email" type="email" placeholder="例)  sample@project-g.co.jp" class="w-full rounded-lg border-gray-300 border-2 placeholder-gray-300" />
              <p v-if="errors['email']" class="error">{{errors['email']}}</p>
            </div>

            <div class="sm:col-span-2">
              <label for="phone" class="tracking-wider font-label font-bold inline-block text-sm sm:text-base mb-2">電話番号</label>
              <input id="phone" name="phone" v-model="phone" type="text" placeholder="例)  0362069608" class="w-full rounded-lg border-gray-300 border-2 placeholder-gray-300" />
              <p v-if="errors['phone']" class="error">{{errors['phone']}}</p>
            </div>

            <div class="sm:col-span-2 text-center">
              <p class="privacy font-bold inline-block text-base xl:contents hidden"><router-link to="/privacy" class="text-orange-400 border-b border-orange-400">プライバシーポリシー</router-link>に同意の上でお進みください。</p>
              <div class="xl:hidden contents">
                <p class="privacy font-bold inline-block text-base"><router-link to="/privacy" class="text-orange-400 border-b border-orange-400">プライバシーポリシー</router-link>に</p>
                <p class="privacy font-bold inline-block text-base">同意の上でお進みください。</p>
              </div>
            </div>
            <div class="sm:col-span-2 mx-3 ">
              <input type="button" @click="getForm" value="資料をダンロードする" class="tracking-widest orenge-btn w-full bg-orange-400 hover:bg-yellow-500 active:bg-yellow-500 focus-visible:ring ring-gray-300 text-white xl:text-2xl lg:text-lg md:text-base sm:text-lg font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 mx-auto">
            </div>
          </form>
          <!-- form - end -->
        </div>
      </div>
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

        <p class="max-w-screen-md text-white text-center text-sm  mb-10">03-6206-9608(10:30~19:30/土日・祝除く)</p>
        <p class="max-w-screen-md text-white text-center text-sm pb-10">Copyright © PROJECT GROUP, Inc. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
export default ({
  name: 'TopView',
  data() {
    return {
      errors: {},
      company: null,
      name: null,
      email: null,
      phone: null
    };
  },
  methods: {
    checkForm(e) {
      this.errors = [];

      if (!this.name) {
        this.errors["name"] = "氏名が入力されていません";
      }
      if (!this.email) {
        this.errors["email"] = "メールアドレスが入力されていません";
      } else if (!this.validEmail(this.email)) {
        this.errors["email"] = '適切なメールアドレスを入力してください';
      } 
      if (!this.company) {
        this.errors["company"] = '会社名が入力されていません';
      } 
      if (!this.phone) {
        this.errors["phone"] = '電話番号が入力されていません';
      }
      if (!Object.keys(this.errors).length) {
        return true;
      }

      e.preventDefault();
    },

    validEmail(email) {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    getOptions(){
      let body = {
        "company": this.company,
        "name": this.name,
        "email": this.email,
        "phone": this.phone
      };
      const options = {
        credentials: 'include',
        method: 'POST',
        mode: 'no-cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      };
      return options
    },
    postInfo(){
      let options = this.getOptions()
      let url_on_sheet = `https://script.google.com/macros/s/AKfycbzOZ2-k7szfDElHICG7dbK_DAQXwFwd_Lm-cYfHI8hlwkSa97GuJ1U8rXj_LzBuQGJ68w/exec`;

      fetch(url_on_sheet, options)
        .then(response => {
          return response.text()
        })
        .then((body) => {
          console.log(body ? JSON.parse(body) : {})
        })
        .catch(err => console.error('error:' + err));
    },
    sendMail(){
      let options = this.getOptions()
      let url_on_gas = `https://script.google.com/macros/s/AKfycbweHleTVD7rSWNTToe94m3sqoK3plTuzg3c72a_iScaco_IO1y-DDLM7-FWueGdN92r/exec`;

      fetch(url_on_gas, options)
        .then(response => {
          return response.text()
        })
        .then((body) => {
          console.log(body ? JSON.parse(body) : {})
        })
        .catch(err => console.error('error:' + err));
    },
    getForm(e){
      var check_validate = this.checkForm(e);
      if (check_validate){
        this.postInfo();
        this.sendMail();
        this.$router.push({ name: 'success' , params:  {msg : "true"}}).catch(() => {});
      }
    }
  }  
});
</script>

<style>
footer{
  background:rgba(39, 49, 64, 1);
}
li {
  list-style: none;
}
.error {
  color: red;
}
.right{
  background-color: rgba(254, 247, 185, 0.5);
}
.finish{
  color:#707070;
  font-weight: 800;
}
.font-label{
  color:#707070;
}
.privacy{
  color:#707070;
}
input {
  border-color: #D6D6D6;
}
::placeholder {
  font-weight: bold;
  size: 15px;
}
.orenge{
  color:rgba(248, 125, 3, 1);
}
.orengeg-btn{
  background-color: rgba(248, 125, 3, 1);
}
</style>

    