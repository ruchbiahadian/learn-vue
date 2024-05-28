import { mapState } from 'vuex'

export default{
    name: 'About',
    computed: mapState([
        'floatingItem', 
      ]),
    created() {
        this.loadFloatingItem();
    },
    methods: {
        loadFloatingItem(){
            this.$store.dispatch('loadFloatingItem');
        }
    },
}