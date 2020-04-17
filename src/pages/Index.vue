<template><Layout>

<div class="px-3">
  <div class="card-columns">
    <div class="card">
      <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/66777149_158254028628268_649526811915470175_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=hws25hAV21gAX8LKzLK&oh=b3c55aebf27fa8dbebb54cec324af9e3&oe=5EC367FB" alt="" class="img-fluid" />
    </div>
    <div class="card mb-3" v-for="(edge, index) in $page.photos.edges" :key="edge.node.id">
      <a :href="'https://instagram.com/p/' + edge.node.shortcode" target="_blank" rel="noopener" :key="index">
        <g-image :src="edge.node.display_url" :alt="'Instagram Photo: ' + edge.node.edge_media_to_caption.edges[0].node.text" class="photo img-fluid" />
      </a>
    </div>
  </div>
</div>

</Layout></template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<page-query>
query {
  photos: allInstagramPhoto {
    edges {
      node {
        id
        shortcode
        display_url
        edge_media_to_caption {
          edges {
            node {
              text
            }
          }
        }
      }
    }
  }
}
</page-query>
