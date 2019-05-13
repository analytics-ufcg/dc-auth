<template>
  <div class="login">
    <img src="@/assets/dadocapital.png"/>
    <div class="header">Identifique-se</div>
    <div
      class="text"
    >Ao entrar na Dado Capital, suas preferências de temas ficarão salvas para que você possa ver notificações específicas sobre os temas escolhidos. Não guardaremos nenhuma informação sensível, apenas dados públicos (nome, e-mail e foto).</div>
    <div class="social-buttons">
      <button class="btn googleBtn" @click="login('google')"> <i class="fab fa-google"></i> Entrar com Google</button>
      <button class="btn facebookBtn" @click="login('facebook')"> <i class="fab fa-facebook-square"></i> Entrar com Facebook</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login(provider) {
      console.log(`Usuário logou com ${provider}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  margin: 0vw 10vw;
  flex-direction: column;
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
    margin: 0.5rem 1rem 2rem 1rem;
  }
  margin: 0.5rem 10rem 2rem 10rem;
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
  color: #29303b;
  background-color: #fff;
  border: 1px solid #dedfe0;
}
</style>