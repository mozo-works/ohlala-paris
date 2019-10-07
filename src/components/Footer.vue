<template>
<footer id="site-footer" class="text-center">
  <p class="text-muted">
    &copy; {{ shop.nameKo }} {{ shop.name }} 2019.&nbsp;&nbsp;
    <i class="fas fa-map-marker-alt"></i>&nbsp;
    <a :href="shop.addressUrl" target="blank">서울 종로구 서순라길 127</a>&nbsp;&nbsp;
    <i class="fas fa-phone-alt"></i>&nbsp;<a :href="'tel:' + shop.telephone">{{ shop.telephone }}</a>&nbsp;&nbsp;
    <i class="fab fa-instagram"></i>&nbsp;<a :href="shop.instagramUrl" target="blank">{{ shop.instagramId }}</a>
  </p>
</footer>
</template>

<script>
import shop from '@/data/shop.yaml'
export default {
  data() { return { shop } }
}
</script>
