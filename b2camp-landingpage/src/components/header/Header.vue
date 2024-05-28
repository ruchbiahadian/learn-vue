<template>
    <header id="home">
        <div class="main_container">
            <div class="items item0 blue">
                <h1>{{ headerItem.name }}</h1>
                <p>{{ headerItem.description }}</p>

                <div 
                v-if="headerItem.btn1_text || headerItem.btn2_text"
                class="buttons"
                >
                    <a v-if="headerItem.btn1_text" :href="headerItem.btn1_link" class="yellow">{{ headerItem.btn1_text }}</a>
                    <a v-if="headerItem.btn2_text" :href="headerItem.btn2_link">{{ headerItem.btn2_text }}</a>
                </div>
            </div>
        </div>
    </header>
</template>

<script src="./script.js"></script>