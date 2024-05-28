<template>
    <nav>
        <div class="logo">
            <a href="#"><img src="../../assets/img/Group 522.png" alt="Logo B2Camp"></a>
        </div>
        <ul class="links">
            <li
             v-for="(nav, index) in this.navbar" :key="index"
             >
                <li 
                :id="'list-' + nav.goToId"
                :class="{ selected : index == 0 }"
                >
                    <a @click="scrollId(nav.goToId)">{{ nav.text }}</a>
                </li>
            </li>
        </ul>
    </nav>
</template>

<script src="./script.js"></script>