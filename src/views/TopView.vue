<template>
  <div class="container">
    <div class="Form">
      <form class="top">
        <p v-if="errors.length" class="error">
          <b>入力エラー</b>
          <ul>
            <li v-for="(error,key) in errors" :key="key">{{ error }}</li>
          </ul>
        </p>
      
        <p class="Form-Item">
          <label for="company" class="Form-Item-Label">会社名</label>
          <input id="company" v-model="company" type="text" name="company" class="Form-Item-Input">
        </p>
        <p class="Form-Item">
          <label for="name" class="Form-Item-Label">氏名</label>
          <input id="name" v-model="name" type="email" name="name" class="Form-Item-Input">
        </p>
        <p class="Form-Item">
          <label for="email" class="Form-Item-Label">Email</label>
          <input id="email" v-model="email" type="email" name="email" class="Form-Item-Input">
        </p>
        <p class="Form-Item">
          <label for="phone" class="Form-Item-Label">電話番号</label>
          <input id="phone" v-model="phone" type="phone" name="phone" class="Form-Item-Input">
        </p>
      
        <p>
          <input type="button" @click="getForm" value="送信" class="Form-Btn">
        </p>
      </form>
      <p><router-link to="/privacy">プライバシーポリシー</router-link>に同意の上でお進みください</p>
    </div>
  </div>
</template>

<script>
export default ({
  name: 'TopView',
  data() {
    return {
      errors: [],
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
        this.errors.push("氏名が入力されていません");
      }
      if (!this.email) {
        this.errors.push('メールアドレスが入力されていません');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('適切なメールアドレスを入力してください');
      } 
      if (!this.company) {
        this.errors.push('会社名が入力されていません');
      } 
      if (!this.phone) {
        this.errors.push('電話番号が入力されていません');
      }
      if (!this.errors.length) {
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
      var url = `https://script.google.com/macros/s/AKfycbzHRpK1KMIvBdLNfdw-y9y3CnAFtRgleVRHvdj8ygGdxM79VXjaiXyqzr8tLZKaR97mHg/exec`;
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
        this.$router.push('/success')
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
.Form {
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  max-width: 720px;
}
@media screen and (max-width: 480px) {
  .Form {
    margin-top: 40px;
  }
}
.Form-Item {
  border-top: 1px solid #ddd;
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;
  display: flex;
  align-items: center;
}
@media screen and (max-width: 480px) {
  .Form-Item {
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 16px;
    padding-bottom: 16px;
    flex-wrap: wrap;
  }
}
.Form-Item:nth-child(5) {
  border-bottom: 1px solid #ddd;
}
.Form-Item-Label {
  width: 100%;
  max-width: 248px;
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Label {
    max-width: inherit;
    display: flex;
    align-items: center;
    font-size: 15px;
  }
}
.Form-Item-Label.isMsg {
  margin-top: 8px;
  margin-bottom: auto;
}
@media screen and (max-width: 480px) {
  .Form-Item-Label.isMsg {
    margin-top: 0;
  }
}
.Form-Item-Label-Required {
  border-radius: 6px;
  margin-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 48px;
  display: inline-block;
  text-align: center;
  background: #5bc8ac;
  color: #fff;
  font-size: 14px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Label-Required {
    border-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 32px;
    font-size: 10px;
  }
}
.Form-Item-Input {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 48px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #eaedf2;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Input {
    margin-left: 0;
    margin-top: 18px;
    height: 40px;
    flex: inherit;
    font-size: 15px;
  }
}
.Form-Item-Textarea {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 216px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #eaedf2;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Textarea {
    margin-top: 18px;
    margin-left: 0;
    height: 200px;
    flex: inherit;
    font-size: 15px;
  }
}
.Form-Btn {
  border-radius: 6px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 280px;
  display: block;
  letter-spacing: 0.05em;
  background: #5bc8ac;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}
@media screen and (max-width: 480px) {
  .Form-Btn {
    margin-top: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 160px;
    font-size: 16px;
  }
}
</style>

    