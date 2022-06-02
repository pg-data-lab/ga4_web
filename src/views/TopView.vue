<template>
<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div class="flex justify-between items-center  mb-8 md:mb-12 xl:mb-16">
      
    </div>

    <div class="bg-white">
        <div class="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-screen-xl  mx-auto">
            <div class="md:pt-8">
              <!-- text - start -->
              <div class="mb-10 md:mb-16">
                <h1 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">資料ダウンロード</h1>
                <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">ご興味を持っていただきありがとうございます。</p>
                <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">フォームに必要事項を入力してください。</p>
              </div>
            </div>

          <div class="md:pt-8">
            <!-- text - start -->
            <div class="mb-10 md:mb-16">
              <h1 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">カンタン1分で完了！</h1>
            </div>
            <!-- text - end -->

            <!-- form - start -->
            <form class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
              <div class="sm:col-span-2">
                <label for="company" class="inline-block text-gray-800 text-sm sm:text-base mb-2">会社名<span class="error text-xs"> *必須</span></label>
                <input id="company" name="company" v-model="company" type="text" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2 " />
                <p v-if="errors['company']" class="error">{{errors['company']}}</p>
              </div>

              <div class="sm:col-span-2">
                <label for="name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">氏名<span class="error text-xs"> *必須</span></label>
                <input id="name" name="name" v-model="name" type="text" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
                <p v-if="errors['name']" class="error">{{errors['name']}}</p>
              </div>

              <div class="sm:col-span-2">
                <label for="email" class="inline-block text-gray-800 text-sm sm:text-base mb-2">メールアドレス<span class="error text-xs"> *必須</span></label>
                <input id="email" name="email" v-model="email" type="email" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
                <p v-if="errors['email']" class="error">{{errors['email']}}</p>
              </div>

              <div class="sm:col-span-2">
                <label for="phone" class="inline-block text-gray-800 text-sm sm:text-base mb-2">電話番号<span class="error text-xs"> *必須</span></label>
                <input id="phone" name="phone" v-model="phone" type="text" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
                <p v-if="errors['phone']" class="error">{{errors['phone']}}</p>
              </div>

              <div class="sm:col-span-2 flex justify-between items-center">
                <input type="button" @click="getForm" value="送信" class="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                <p class="text-gray-400 text-xs"><router-link to="/privacy">プライバシーポリシー</router-link>に同意の上でお進みください</p>
              </div>
            </form>
            <!-- form - end -->

            <div class="mb-10 py-8 md:mb-16">
              <p class="max-w-screen-md text-gray-500 md:text-xm text-center mx-auto">お電話でも承ります。お気軽にご連絡ください。</p>
              
              <h1 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"><svg class="inline h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>03-6206-9608</h1>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
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
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    postInfo(){
      var body = {
        "company": this.company,
        "name": this.name,
        "email": this.email,
        "phone": this.phone
      };
      var url = `https://script.google.com/macros/s/AKfycbxgwsvnWpjDu_JrmrwVeUkzTemIMDrSNEsr0k9LbTFj_xjwYaSyleQ0jpmCjexNVkl7mw/exec`;
      const options = {
        credentials: 'include',
        method: 'POST',
        mode: 'no-cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      };
      fetch(url, options)
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
        this.postInfo()
        this.$router.push({ name: 'success' , params:  {msg : "true"}}).catch(() => {});
      }
    }
  }  
});
</script>

<style>
li {
  list-style: none;
}
.error {
  color: red;
}

</style>

    