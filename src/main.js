import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import DefaultLayout from '@/layouts/Default.vue'
import '@/assets/styles/main.scss'

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'ko' }
}
