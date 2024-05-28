<template>
    <section class="content" id="about_us">
        <div class="main_container">

            <div
            v-for="(item, index) in this.floatingItem" :key="index"
            class="items"
            :class="'item'+(index+1), { center_text : item.center }"
            >
                
                <h1>{{ item.name }}</h1>
                <p>{{ item.description }}</p>
                
                <div 
                v-if="item.btn1_text || item.btn2_text"
                class="buttons"
                >
                    <a v-if="item.btn1_text" :href="item.btn1_link" class="blue">{{ item.btn1_text }}</a>
                    <a v-if="item.btn2_text" :href="item.btn2_link" class="white">{{ item.btn2_text }}</a>
                </div>

            </div>         

            <div class="wide bigger">
                <img src="../../../assets/img/Union.webp" alt="">
            </div>
        </div>
    </section>
</template>

<script src="./script.js"></script>