<template>
  <div class="layout">
    <Header/>
    <slot/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: { Header, Footer },
}
</script>

<style>
@import url('//fonts.googleapis.com/css?family=Homemade+Apple&display=swap');
@import url('//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css');
.navbar-brand { font-family: 'Homemade Apple', cursive; }
</style>
