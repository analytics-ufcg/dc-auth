<template>
  <div class="login">
    <img src="@/assets/dadocapital.png">
    <div class="header">Identifique-se</div>

    <div class="social-buttons">
      <button class="btn googleBtn" @click="login('google')">
        <i class="fab fa-google"></i> Entrar com Google
      </button>
      <button class="btn facebookBtn" @click="login('facebook')">
        <i class="fab fa-facebook-square"></i> Entrar com Facebook
      </button>
    </div>

    <span class="icon-login icon-lg"></span>
    <div class="text">
      <strong class="text-strong">Próximo login</strong>
      <p>Ao entrar na Dado Capital, suas preferências de temas ficarão salvas para que você possa ver notificações específicas sobre os temas escolhidos.</p>
    </div>

    <span class="icon-seguranca icon-lg"></span>
    <div class="text">
      <strong class="text-strong">Privacidade</strong>
      <p>Não guardaremos nenhuma informação sensível, apenas dados públicos (nome, e-mail e foto).</p>
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
@import "@/assets/styles/icons.scss";
.icon-lg {
  font-size: 4rem;
  margin: 1.5rem 0rem 0rem 0rem;
}
.login {
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    margin: 0vw 10vw;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    margin: 0vw 12vw;
  }
  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) {
    margin: 0vw 19vw;
  }
  margin: 0vw 26vw;
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
  @media screen and (max-width: 480px) {
    margin: 0.5rem 1rem 0rem 1rem;
  }
  margin: 0.5rem 10rem 0rem 10rem;
}
.btn {
  @media screen and (max-width: 480px) {
    width: 80vw;
  }
  width: 30vw;
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
  margin: 1.5rem 0rem 0rem 0rem;
  color: #29303b;
  background-color: #fff;
  border: 1px solid #dedfe0;
}
</style>

