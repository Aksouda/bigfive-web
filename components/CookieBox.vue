<cookie-consent>
  <template slot="message">
    This website uses cookies
    <a class="btn btn-link" href="/my-cookies">Read more</a>
  </template>
  <template slot="button">
    <button class="btn btn-info">Accept</button>
  </template>
</cookie-consent>
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
  }
  .cookie-consent button {
    border: 1px solid white;
    padding: 10px;
    margin-left: 20px;
    min-width: 140px;
  }
</style>
