import { mapState } from 'vuex'

export default{
    name: 'Service',
    computed: mapState([
        'services', 
      ]),
    created() {
        this.loadServices();
    },
    methods: {
        loadServices(){
            this.$store.dispatch('loadServices');
        }
    },
}