import { mapState } from 'vuex'

export default {
    name: 'Navbar',
    computed: mapState([
      'navbar', 
    ]),
    created() {
      this.loadNavbar();
      console.log(this.navbar)
    },
    methods: {
      loadNavbar(){
        this.$store.dispatch('loadNavbar');
      },
      scrollId(id) {
        const area = document.getElementById(id);
        let selected = document.getElementById("list-" + id)
        let removeSelected = document.getElementsByClassName("selected");
        if (area) {
            if(removeSelected.length == 1){
                removeSelected[0].classList.remove('selected');
            }else{
                for (let i = 0; i < removeSelected.length; i++) {
                    removeSelected[i].classList.remove('selected');
                    
                }
            }
            area.scrollIntoView({ behavior: 'smooth' });
            selected.classList.add('selected');
        }
      }
    }
  };