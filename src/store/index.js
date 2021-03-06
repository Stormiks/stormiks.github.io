import Vue from "vue";
import Vuex from "vuex";
import currentDevice from 'current-device'

Vue.use(Vuex);

const store = {
  state: {
    isVisibleMenu: false,
    device: currentDevice,
    menuLinks: [
      {
        title: "Home",
        url: "#up",
        nameLinkSection: "up"
      },
      {
        title: "About me",
        url: "#my-info",
        nameLinkSection: "my-info"
      },
      {
        title: "Skils",
        url: "#skils",
        nameLinkSection: "skils"
      },
      {
        title: "Portfolio",
        url: "#portfolio",
        nameLinkSection: "portfolio",
        getter: 'countProjects'
      },
      {
        title: "Contacts",
        url: "#contact",
        nameLinkSection: "contact"
      }
    ],
    skilsGroups: [
      {
        name: "HTML",
        progressCur: 87,
        progressMax: 100
      },
      {
        name: "CSS",
        progressCur: 84,
        progressMax: 100
      },
      {
        name: "JavaScript",
        progressCur: 57,
        progressMax: 100
      },
      {
        name: "PHP",
        progressCur: 20,
        progressMax: 100
      },
      {
        name: "LESS",
        progressCur: 83,
        progressMax: 100
      },
      {
        name: "jQuery",
        progressCur: 67,
        progressMax: 100
      },
      {
        name: "Gulp 4",
        progressCur: 78,
        progressMax: 100
      },
      {
        name: "Webpack v4",
        progressCur: 46,
        progressMax: 100
      },
      {
        name: "Git",
        progressCur: 59,
        progressMax: 100
      },
      {
        name: "VueJS 2, Vuex, Vue Router, Axios",
        progressCur: 57,
        progressMax: 100
      },
      {
        name: "Bootstrap",
        progressCur: 46,
        progressMax: 100
      },
    ],
    portfolio: [
      {
        title: "Справочник по HTML и CSS",
        preview: "/01.jpg",
        isDevelopments: false,
        description: "HTML and CSS",
        url: "/book_web/index.html"
      },
      {
        title: "Виселица",
        preview: "/hangman.jpg",
        isDevelopments: false,
        description: "HTML5, CSS, JavaScript",
        url: "https://stormiks.github.io/hangman/"
      },
      {
        title: "Определение",
        preview: "/definition.jpg",
        isDevelopments: false,
        description: "Мой пример создания игры определения.",
        url: "/definition/index.html"
      },
      {
        title: "Фотогаллерея",
        preview: "/photogallery.jpg",
        isDevelopments: false,
        description: "HTML5, CSS3, FlexBox, PHP7, jQuery, AJAX.",
        url: "/photocage/index.html"
      },
      {
        title: "Todo List",
        preview: "/todolist.jpg",
        isDevelopments: false,
        description: "HTML5, CSS, FlexBox, JS(ES5-ES6), LS",
        url: "https://stormiks.github.io/todolist/"
      },
      {
        title: "PointJS API",
        preview: "/pointjs-help-v2.png",
        isDevelopments: false,
        description: "HTML5, CSS, CSS3, FlexBox, JS(ES5, jQeury, PointJS), LS",
        url: "https://stormiks.github.io/pointjs-help/"
      },
      {
        title: "Terraria Book",
        preview: "/terraria-book-v2.png",
        isDevelopments: false,
        description: "HTML5, CSS, CSS3, FlexBox",
        url: "https://stormiks.github.io/terraria-book/"
      },
      {
        title: "Фотогаллерея v2",
        preview: "/photogallery-v2.1.png",
        isDevelopments: true,
        description: "VueJS 2, Vue Router, Vuex, MirageJS.",
        url: "https://peaceful-headland-16081.herokuapp.com/"
      },
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    countProjects(state) {
      return state.portfolio.length
    }
  },
  modules: {}
};

export default new Vuex.Store(store);
