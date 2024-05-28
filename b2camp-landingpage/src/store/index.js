import { createStore } from 'vuex'

export default createStore({
  state: {

    services: [],
    contacts: [],
    footer: null,
    floatingItem: [],
    headerItem: null,
    navbar: []

  },
  mutations: {
    loadServices(state, services){
      state.services = services;
    },

    loadContact(state, contact){
      state.contacts = contact;
    },

    loadFooter(state, footer){
      state.footer = footer;
    },

    loadFloatingItem(state, item){
      state.floatingItem = item;
    },

    loadHeaderItem(state, item){
      state.headerItem = item;
    },

    loadNavbar(state, list){
      state.navbar = list;
    }
  },
  actions: {
    loadServices({commit}){
      const getServices = [
        {id: 1, name: "Pick-up Package", description: "We can pick up packages from remote villages, island edges, city centers, and even mid-ocean. Using our service means you are our king. That's how great we are", img: "Rectangle_250_(2).webp"},
        {id: 2, name: "Express Package", description: "We can deliver your package at lightning speed. If the express package is late, you don't have to pay for our service. That's how great we are", img: "Rectangle_250_(1).webp"},
        {id: 3, name: "Secure Package", description: "We can provide extra security for your package: waterproof, fireproof, and shockproof. If your package is damaged, you don't have to pay us. That's how great we are", img: "Rectangle_250.webp"}
      ];
      commit('loadServices', getServices)
    },

    loadContact({commit}){
      const getContact = [
        {id: 1, icon: "Vector.png", text: "cs@b2campexpress.com"},
        {id: 2, icon: "Vector (1).png", text: "(+62) 82-321-283-813"},
        {id: 3, icon: "Vector (2).png", text: "Jl.Cepat No.128, RT/RW 1/2, Kedoya, Jakarta 11520"}
      ];
      commit('loadContact', getContact)
    },

    loadFooter({commit}){
      const getFooter = {id: 1, text: "© 2024 B2Camp Express • All rights reserved"};
      commit('loadFooter', getFooter)
    },

    loadFloatingItem({commit}){
      const getItem = [
        {
          id: 1, 
          name: "Our Service", 
          description: "You simply need to visit our outlet or call the courier at the contact listed below, choose your package, and it will arrive quickly, securely, and to your satisfaction",
          btn1_text: "I Need Help",
          btn1_link: "#",
          btn2_text: "What the services",
          btn2_link: "#",
          center: false
        },
        {
          id: 2, 
          name: "About Us", 
          description: "We are a delivery service company established in 2021, prioritizing customer convenience. We have grown rapidly and now reach almost every city in Indonesia",
          btn1_text: null,
          btn1_link: null,
          btn2_text: null,
          btn2_link: null,
          center: false
        },
        {
          id: 3, 
          name: "Customer is King", 
          description: "We believe that customer satisfaction is everything, and it is this belief that has made us the best to date. We will continue to uphold this conviction",
          btn1_text: "I Need Help",
          btn1_link: "#",
          btn2_text: null,
          btn2_link: null,
          center: true
        }
      ];
      commit('loadFloatingItem', getItem)
    },

    loadHeaderItem({commit}){
      const getItem = {
          id: 1, 
          name: "B2CAMP EXPRESS", 
          description: "We are the fastest package delivery service in Indonesia, offering the most affordable prices. Our motto is 'no payment if late.' We are available in almost every city in Indonesia. Need to send a package? Just use B2CAMP!",
          btn1_text: "I Need Help",
          btn1_link: "#",
          btn2_text: "What the services",
          btn2_link: "#",
      };
      commit('loadHeaderItem', getItem)
    },

    loadNavbar({commit}){
      const getList = [
        {
          id: 1, 
          text: "Home",
          goToId: "home"
        },
        {
          id: 2, 
          text: "About",
          goToId: "about_us"
        },{
          id: 3, 
          text: "Services",
          goToId: "services"
        },{
          id: 4, 
          text: "Contact",
          goToId: "contact_us"
        }
      ];
      commit('loadNavbar', getList)
    }
  },
})
