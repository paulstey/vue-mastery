import { createStore } from "vuex";

export default createStore({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr' },
    categories: ['sustainability',
                 'nature',
                 'animal welfare',
                 'housing',
                 'education',
                 'food',
                 'community'],
    events: [{ id: 1, title: '...', organizer: '...' },
             { id: 2, title: '...', organizer: '...' },
             { id: 3, title: '...', organizer: '...' },
             { id: 4, title: '...', organizer: '...' }
    ]
  
    },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    catLength: state => {
      return state.categories.length
    },
    getEventById: (state) => (id) => {
      return state.events.find(event => event.id === id)
    }
  }
});
