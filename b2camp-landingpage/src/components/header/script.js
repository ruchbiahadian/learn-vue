import { mapState } from 'vuex'

export default{
    name: 'Header',
    computed: mapState([
        'headerItem', 
      ]),
    created() {
        this.loadHeaderItem();
    },
    methods: {
        loadHeaderItem(){
            this.$store.dispatch('loadHeaderItem');
        }
    },
}