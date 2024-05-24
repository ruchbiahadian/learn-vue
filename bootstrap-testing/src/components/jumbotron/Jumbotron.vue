<template>
    <div>
      <b-jumbotron>
        <template #header>BootstrapVue</template>

        <template #lead>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
          featured content or information.
        </template>

        <hr class="my-4">

        <p>
          It uses utility classes for typography and spacing to space content out within the larger
          container. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum in nobis vitae nisi at autem velit, illo perspiciatis illum vel nulla nesciunt labore! Ad eligendi suscipit laudantium optio officia.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptatem hic accusamus laudantium corrupti labore sequi soluta rem aut veritatis asperiores perferendis eligendi sunt, aperiam qui ex totam laboriosam vel!
        </p>

        <b-button variant="primary" href="#">Do Something</b-button>
        <b-button variant="success" href="#">Do Something Else</b-button>
      </b-jumbotron>
    </div>
  </template>
  
  <script>
    export default {
      name: 'jumbotron'
    }
  </script>