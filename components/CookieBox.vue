<template>
  <CookieConsent
    message="Folosim cookie-uri pentru a-ti oferi o experienta personalizata. Permite activarea acestora pentru a beneficia de avantajele lor."
    link-label="mai multe informatii"
  />
</template>
<script>
  import CookieConsent from '../vue-cookieconsent-component/src/components/CookieConsent.vue'
  export default {
    components: {
      CookieConsent
    }
  }
</script>
<style>
  .cookie-consent {
    display: flex;
    padding: 10px;
    align-items: center;
    align-self: center;
    justify-content: center;
    border-bottom: 1px solid white;
    color: white;
    position: fixed;
    bottom:20px;
    background:black;
    border-radius:10px;
  }
  .cookie-consent button {
    border: 1px solid white;
    padding: 10px;
    margin-left: 20px;
    min-width: 140px;
  }
</style>
