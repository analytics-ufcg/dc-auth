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
export default {
  name: "Login",
  methods: {
      login(provider) {
        console.log(`Usuário logou com ${provider}`)
      } 
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