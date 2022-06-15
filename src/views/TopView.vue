<template>
<header class="justify-between items-center py-3 min-w-full">
  <img src="@/assets/PG_rd2.png" alt="Logo" class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mx-auto">
</header>
<div class="px-4 md:px-8 mx-auto mb-10 main mt-8 max-w-screen-2xl">
  <div class="bg-white">
    <div class="grid lg:grid-cols-5 md:grid-cols-4 grid-cos-1 gap-12 xl:mx-32 lg:mx-20 sm:mx-10 md:mx-10 mx-4">
      
      <div class="left w-full lg:col-span-3 md:col-span-2 cos-span-1 sm:text-left text-center">
        <div class="sm:contents hidden">
          <p class="lg:tracking-widest glay text-xl mb-3">サービス資料ダウンロードページ</p>
          <h1 class="tracking-base glay text-3xl">Google Analytics 4 がもっとわかる</h1>
          <p class="lg:tracking-widest glay text-sm mt-4">本フォーム入力後、メールアドレスあてに自動返信メールにて、</p>
          <p class="lg:tracking-widest glay text-sm mb-8">すぐに資料を添付させて頂きます。</p>
        </div>

        <div class="sm:hidden contents">
          <h1 class="xl:tracking-widest tracking-base glay text-3xl">Google Analytics 4 が</h1>
          <h1 class="xl:tracking-widest tracking-wide glay text-3xl">もっとわかる</h1>
          <p class="lg:tracking-widest glay text-sm mt-3">本フォーム入力後、</p>
          <p class="lg:tracking-widest glay text-sm">メールアドレスあてに自動返信メールにて、</p>
          <p class="lg:tracking-widest glay text-sm mb-8">すぐに資料を添付させて頂きます。</p>
        </div>
        
        <img src="@/assets/ga4_main.png" class="text-gray-800 w-max text-center mx-auto sdw block rds">
        
        <div class="mt-5">
          <ul class="text-gray-500 md:text-lg w-max">
            <h1 class="glay tracking-widest orange text-2xl mb-2"><img src="@/assets/light_icon.png" alt="Logo" class="mb-2.5 mr-2 inline-block">この資料でわかること</h1>
            <li class="glay sm:tracking-widest tracking-wide">・Google Analytics 4 とは</li>
            <li class="glay sm:tracking-widest tracking-wide">・Google Analytics 4 の5つの変更点</li>
            <li class="glay sm:tracking-widest tracking-wide">・GA4導入を今すぐ行う必要性</li>
            <li class="glay sm:tracking-widest tracking-wide">・導入サポートの料金費用</li>
            <li class="glay sm:tracking-widest tracking-wide">・ご発注から計測開始までのスケジュール</li>
          </ul>
        </div>
      </div>

      <div class="right px-4 pt-14 pb-4 lg:col-span-2 md:col-span-2 cos-span-1 md:h-min mx-auto w-auto sdw">
        <!-- form - start -->
        <form class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
          <div class="sm:col-span-2">
            <label for="company" class="tracking-wider font-label font-bold inline-block text-sm sm:text-base mb-2"><span class="need bg-red-50	text-sm sm:text-base py-1 px-4 mr-2 rounded">必須</span>会社名</label>
            <input id="company" name="company" v-model="company" type="text" placeholder="例)  PROJECTGROUP株式会社" class="w-full rounded-lg border-gray-300 border-2 placeholder-gray-300" />
            <p v-if="errors['company']" class="need">{{errors['company']}}</p>
          </div>

          <div class="sm:col-span-2 mt-4">
            <label for="name" class="tracking-wider font-label font-bold inline-block text-sm sm:text-base mb-2"><span class="need bg-red-50	text-sm sm:text-base py-1 px-4 mr-2 rounded">必須</span>氏名</label>
            <input id="name" name="name" v-model="name" type="text" placeholder="例)  お名前" class="w-full rounded-lg border-gray-300 border-2 placeholder-gray-300" />
            <p v-if="errors['name']" class="need">{{errors['name']}}</p>
          </div>

          <div class="sm:col-span-2 mt-4">
            <label for="email" class="tracking-wider font-label font-bold inline-block text-sm sm:text-base mb-2"><span class="need bg-red-50	text-sm sm:text-base py-1 px-4 mr-2 rounded">必須</span>メールアドレス</label>
            <input id="email" name="email" v-model="email" type="email" placeholder="例)  sample@project-g.co.jp" class="w-full rounded-lg border-gray-300 border-2 placeholder-gray-300" />
            <p v-if="errors['email']" class="need">{{errors['email']}}</p>
          </div>

          <div class="sm:col-span-2 mt-4">
            <label for="phone" class="tracking-wider font-label font-bold inline-block text-sm sm:text-base mb-2"><span class="need bg-red-50	text-sm sm:text-base py-1 px-4 mr-2 rounded">必須</span>電話番号</label>
            <input id="phone" name="phone" v-model="phone" type="text" placeholder="例)  0362069608" class="w-full rounded-lg border-gray-300 border-2 placeholder-gray-300 " />
            <p v-if="errors['phone']" class="need">{{errors['phone']}}</p>
          </div>

          <div class="sm:col-span-2 text-center">
            <p class="privacy font-bold inline-block text-sm xl:contents hidden"><a href="https://project-g.co.jp/policy/" class="text-orange-400 border-b border-orange-400">プライバシーポリシー</a>に同意の上でお進みください。</p>
            <div class="xl:hidden contents">
              <p class="privacy font-bold inline-block text-sm"><a href="https://project-g.co.jp/policy/" class="text-orange-400 border-b border-orange-400">プライバシーポリシー</a>に</p>
              <p class="privacy font-bold inline-block text-sm">同意の上でお進みください。</p>
            </div>
          </div>
          <div class="sm:col-span-2 mx-3 text-center">
            <input type="button" @click="getForm" value="資料をダウンロード" class="tracking-widest w-full bg-yellow-200 hover:bg-yellow-300 active:bg-yellow-500 focus-visible:ring ring-gray-300 text-black text-base font-semibold rds sdw outline-none transition duration-100 px-8 py-3 mx-auto">
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
      let url_on_sheet = `https://script.google.com/macros/s/AKfycbz9unt5g1Atky19dsNJz1-v0sl8HtwP9fUnh_jyBu7D1WVCjqKg2dqwrzMTSs7HvNLj5Q/exec`;

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
      let url_on_gas = `https://script.google.com/macros/s/AKfycbyLLcj6NTw0UaDYxXZX1EwS62Xrwox9yKXwu-fKRhGpHcB4RgDsLANS7iO8mou9kBeC/exec`;

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
.sdw{
  box-shadow: 0px 0px 16px -6px rgb(0 0 0 / 60%);
}
.rds{
  border-radius: 20px;
}
.main{
  font-family:  "apple-system", "BlinkMacSystemFont", "Roboto", "Segoe UI", "Helvetica Neue", "HelveticaNeue", "YuGothic", "Yu Gothic Medium", "Yu Gothic", "Verdana", "Meiryo", "sans-serif";
}

footer, header{
  background:rgba(39, 49, 64, 1);
}

.need {
  color: rgba(247, 78, 78, 1);
}

.glay{
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
.orange{
  color:rgba(248, 125, 3, 1);
}
.orengeg-btn{
  background-color: rgba(248, 125, 3, 1);
}
</style>

    