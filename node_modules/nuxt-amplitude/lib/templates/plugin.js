import Vue from 'vue';
import VueAmplitude from 'vue-amplitude';

Vue.use(VueAmplitude, <%= JSON.stringify(options) %>);
