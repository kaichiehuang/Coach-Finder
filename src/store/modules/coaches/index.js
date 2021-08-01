import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'James',
          lastName: 'Huang',
          sportName: 'tennis',
          levels: ['beginner', 'intermediate'],
          description:
            "I'm James and teach tennis!",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          sportName: 'basketball',
          levels: ['beginner', 'intermediate', 'pro'],
          description:
            'I am Julie and I am a former professional basketball player.',
          hourlyRate: 40
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};