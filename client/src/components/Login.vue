<template>
  <div class="login">
    <div class="social">
      <div class="header">Identifique-se</div>
      <div
        class="text"
      >Ao entrar na Dado Capital, suas preferências de temas ficarão salvas para que você possa ver notificações específicas sobre os temas escolhidos. Não guardaremos nenhuma informação sensível, apenas dados públicos (nome, e-mail e foto).</div>
      <div class="social-buttons">
        <button class="btn googleBtn" @click="login('google')">Entrar com Google</button>
        <button class="btn facebookBtn" @click="login('facebook')">Entrar com Facebook</button>
      </div>
    </div>
  </div>
</template>

<script>
import { VueAuthenticate } from "vue-authenticate";
import axios from "axios";
// import jwtDecode from "jwt-decode";

// const TOKEN_STORAGE = "vue-authenticate.vueauth_token";

const http = axios.create({});

const vueAuth = new VueAuthenticate(http, {
  tokenPath: "token",
  providers: {
    google: {
      clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID,
      url: `${process.env.VUE_APP_AUTH_API_URL}/api/auth/googleCode`,
      redirectUri: window.location.origin
    },
    facebook: {
      clientId: process.env.VUE_APP_FACEBOOK_CLIENT_ID,
      url: `${process.env.VUE_APP_AUTH_API_URL}/api/auth/facebookCode`,
      authorizationEndpoint: "https://www.facebook.com/v2.5/dialog/oauth",
      redirectUri: window.location.origin
    }
  }
});

export default {
  name: "Login",
  data() {
    return { authToken: "" };
  },
  methods: {
    login(provider) {
      vueAuth.authenticate(provider).then(response => {
        this.authToken = response.data.token;
        alert("Logou! - Token: " + this.authToken);
      });
    }
  },
  mounted() {
    console.log(process.env)
  }
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  margin: 50px;
}
.social {
  margin: 2rem;
}
.social-buttons {
  text-align: center;
  display: grid;
  grid-gap: 10px 0px;
  flex-direction: column;
}
.header {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.text {
  margin-bottom: 1rem;
}
.btn {
  border-radius: 2px;
  font-size: 16px;
  border: 1px solid #dedfe0;
  padding: 1rem;
  box-shadow: 0 2px 2px 0 rgba(41, 48, 59, 0.24),
    0 0 2px 0 rgba(41, 48, 59, 0.12);
  cursor: pointer;
}
.facebookBtn {
  background-color: #1a538a;
  color: #fff;
}
.btn:hover {
  opacity: 0.8;
}
.googleBtn {
  color: #29303b;
  background-color: #fff;
  border: 1px solid #dedfe0;
}
</style>