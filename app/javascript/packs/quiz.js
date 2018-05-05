import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '../stores/app_store';
import QuizContainer from '../containers/quiz_container';

const appStore = configureStore();

class QuizApp extends React.Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <QuizContainer questionSeriesNo={1} />
      </Provider>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const serverNode = document.getElementById('server-side-contents');
  const serverData = JSON.parse(serverNode.innerText);
  window.serverData = serverData;
  const node = document.getElementById('component-quiz');
  if (node) {
    ReactDOM.render(<QuizApp store={appStore} {...serverData} />, node);
  }
});