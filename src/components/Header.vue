<template>
<header class="header">
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
    <b-navbar-brand class="mt-1" href="/">{{ shop.name }}</b-navbar-brand>
    <div class="w-100 py-3">
      {{ shop.description }}
    </div>
    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item class="btn btn-warning btn-sm" target="_blank" :href="shop.addressUrl">
            <i class="fas fa-map-marker-alt"></i>
          </b-nav-item>
          <b-nav-item class="btn btn-warning btn-sm" :href="'tel:' + shop.telephone">
            <i class="fas fa-phone-alt"></i>
          </b-nav-item>
          <b-nav-item class="btn btn-warning btn-sm" target="_blank" :href="shop.instagramUrl">
            <i class="fab fa-instagram"></i>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</header>
</template>

<script>
import shop from '@/data/shop.yaml'
export default {
  data() { return { shop } }
}
</script>

<style lang="scss">
.btn {
  padding: 0 1rem;
  margin: .5rem;
  height: 2.5rem;
  a {
    padding: 0;
    line-height: 2;
    font-size: 1rem;
  }
}
</style>
