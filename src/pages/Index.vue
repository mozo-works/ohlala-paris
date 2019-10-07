<template><Layout>

<div class="px-3">
  <div class="card-columns">
    <div class="card">
      <img src="//scontent-icn1-1.cdninstagram.com/vp/9bd199161dd4715aab65e5ffc92cb659/5E21CB36/t51.2885-15/e35/p1080x1080/66777149_158254028628268_649526811915470175_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=104" alt="" class="img-fluid" />
    </div>
    <div class="card mb-3" v-for="(edge, index) in $page.photos.edges" :key="edge.node.id">
      <a :href="'https://instagram.com/p/' + edge.node.shortcode" target="_blank" rel="noopener">
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
