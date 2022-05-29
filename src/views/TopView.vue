<template>
  <div class="container">
    <form class="top">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(error,key) in errors" :key="key">{{ error }}</li>
        </ul>
      </p>
    
      <p class="form-box">
        <label for="company">会社</label>
        <input id="company" v-model="company" type="text" name="company">
      </p>
      <p class="form-box">
        <label for="name">氏名</label>
        <input id="name" v-model="name" type="email" name="name">
      </p>
      <p class="form-box">
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" name="email">
      </p>
      <p class="form-box">
        <label for="phone">電話番号</label>
        <input id="phone" v-model="phone" type="phone" name="phone">
      </p>
    
      <p>
        <input type="button" @click="getForm" value="送信">
      </p>
    </form>
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
        this.errors.push("Name required.");
      }
      if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      } 
      if (!this.company) {
        this.errors.push('Company required.');
      } 
      if (!this.phone) {
        this.errors.push('Phone Number required.');
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
      var url = `https://script.google.com/macros/s/AKfycbzSbAoC_SVCbvwm-GnrzaPTUD89LgW5i3ObK5f3KMkWQ-sHugSEaolRwDRMDoQyB9A7ZA/exec`;
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
.container{
    text-align:center;
}

.top{
    text-align:center;
}
</style>

    