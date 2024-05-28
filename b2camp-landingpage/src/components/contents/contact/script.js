import { mapState } from 'vuex'

export default{
    name: 'Contact',
    computed: mapState([
        'contacts', 
      ]),
    created() {
        this.loadContact();
    },
    methods: {
        loadContact(){
            this.$store.dispatch('loadContact');
        }
    },
}