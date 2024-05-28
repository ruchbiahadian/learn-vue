<template>
    <section class="content blue" id="services">
        <div class="main_container">
            <div class="wide">
                <h1>Services</h1>
                <div class="boxs">

                    <div
                     v-for="(service, index) in this.services" :key="index"
                     class="box"
                     >
                        <div class="top">
                            <img :src="require(`@/assets/img/${service.img}`)" alt="">
                        </div>
                        <div class="bottom">
                            <span>{{ service.name }}</span>
                            <p>{{ service.description }}</p>
                        </div>
                    </div>

                </div>
                <p class="service_help">
                    <a href="">I Need Help</a>
                </p>
            </div>
        </div>
    </section>
</template>

<script src="./script.js"></script>