<template>
  <Navbar/>
  <Carousel/>
 <div class="container">
  <h1>Breadcrum Testing</h1>
    <Breadcrumb/>
    <h1>Table Testing</h1>
    <div>
      <b-table striped hover :items="items"></b-table>
    </div>
    <h1>Jumbotron Testing</h1>
    <Jumbotron/>
    <h1>Card Testing</h1>
    <div class="cardsContainer">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    <h1>Jumbotron Testing</h1>
    <Jumbotron/>
    <h1>Custom Container Testing</h1>
 </div>
    <Footer></Footer>
</template>

<script>

import Navbar from '@/components/navbar/Navbar.vue'
import Carousel from '@/components/carousel/Carousel.vue'
import Jumbotron from '@/components/jumbotron/Jumbotron.vue'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue'
import Card from '@/components/card/Card.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Carousel,
    Jumbotron,
    Breadcrumb,
    Card,
    Footer
  },
  data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    },
}
</script>
