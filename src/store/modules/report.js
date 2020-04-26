const SET_REPORT = 'SET_REPORT';

export default {
  state: {
    report: null
  },
  mutations: {
    [SET_REPORT](state, report) {
      state.report = report;
    }
  },
  actions: {
    fetchReport({ commit }) {
      return new Promise((resolve, reject) => {
        window.axios
          .get('https://pomber.github.io/covid19/timeseries.json')
          .then(response => {
            commit(SET_REPORT, response.data['Taiwan*']);
            resolve('Success');
          })
          .catch(error => {
            console.error('Error', error);
            reject(error);
          });
      });
    }
  }
};
