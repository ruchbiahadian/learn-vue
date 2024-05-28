import { mapState } from 'vuex'

export default{
    name: 'Footer',
    computed: mapState([
        'footer', 
      ]),
    created() {
        this.loadFooter();
    },
    methods: {
        loadFooter(){
            this.$store.dispatch('loadFooter');
        }
    },
}