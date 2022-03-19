import Vue from 'vue'

const components = {
  BarChart: () => import('../..\\components\\BarChart.vue' /* webpackChunkName: "components/bar-chart" */).then(c => c.default || c),
  BarChartCompare: () => import('../..\\components\\BarChartCompare.vue' /* webpackChunkName: "components/bar-chart-compare" */).then(c => c.default || c),
  Domain: () => import('../..\\components\\Domain.vue' /* webpackChunkName: "components/domain" */).then(c => c.default || c),
  DomainCompare: () => import('../..\\components\\DomainCompare.vue' /* webpackChunkName: "components/domain-compare" */).then(c => c.default || c),
  Error: () => import('../..\\components\\Error.vue' /* webpackChunkName: "components/error" */).then(c => c.default || c),
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  Highlights: () => import('../..\\components\\Highlights.vue' /* webpackChunkName: "components/highlights" */).then(c => c.default || c),
  LanguageSwitcher: () => import('../..\\components\\LanguageSwitcher.vue' /* webpackChunkName: "components/language-switcher" */).then(c => c.default || c),
  ShareLinks: () => import('../..\\components\\ShareLinks.vue' /* webpackChunkName: "components/share-links" */).then(c => c.default || c),
  TestLanguageSwitcher: () => import('../..\\components\\TestLanguageSwitcher.vue' /* webpackChunkName: "components/test-language-switcher" */).then(c => c.default || c),
  Timer: () => import('../..\\components\\Timer.vue' /* webpackChunkName: "components/timer" */).then(c => c.default || c),
  Toolbar: () => import('../..\\components\\Toolbar.vue' /* webpackChunkName: "components/toolbar" */).then(c => c.default || c),
  Wrapper: () => import('../..\\components\\Wrapper.vue' /* webpackChunkName: "components/wrapper" */).then(c => c.default || c),
  FormAge: () => import('../..\\components\\form\\Age.vue' /* webpackChunkName: "components/form-age" */).then(c => c.default || c),
  FormConfirm: () => import('../..\\components\\form\\Confirm.vue' /* webpackChunkName: "components/form-confirm" */).then(c => c.default || c),
  FormGender: () => import('../..\\components\\form\\Gender.vue' /* webpackChunkName: "components/form-gender" */).then(c => c.default || c),
  Form: () => import('../..\\components\\form\\index.js' /* webpackChunkName: "components/form" */).then(c => c.default || c),
  FormInfo: () => import('../..\\components\\form\\Info.vue' /* webpackChunkName: "components/form-info" */).then(c => c.default || c),
  FormLanguage: () => import('../..\\components\\form\\Language.vue' /* webpackChunkName: "components/form-language" */).then(c => c.default || c),
  ProductFeatureList: () => import('../..\\components\\product\\FeatureList.vue' /* webpackChunkName: "components/product-feature-list" */).then(c => c.default || c),
  ProductCard: () => import('../..\\components\\product\\ProductCard.vue' /* webpackChunkName: "components/product-card" */).then(c => c.default || c),
  ProductTitle: () => import('../..\\components\\product\\ProductTitle.vue' /* webpackChunkName: "components/product-title" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
