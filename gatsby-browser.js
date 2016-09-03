import ReactGA from 'react-ga';
ReactGA.initialize('UA-11291366-1');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};
