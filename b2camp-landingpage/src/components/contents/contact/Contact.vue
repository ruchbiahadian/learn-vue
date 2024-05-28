<template>
    <section class="content" id="contact_us">
        <div class="main_container">
            <div class="wide center white">
                <h1>Contact Us</h1>
                <div class="list_container">
                    <ul>
                        <li
                        v-for="(contact, index) in this.contacts" :key="index"
                        >
                            <img :src="require(`@/assets/img/${contact.icon}`)" alt="">
                            <p>{{ contact.text }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script src="./script.js"></script>