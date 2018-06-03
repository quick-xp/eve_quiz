import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '../stores/app_store';
import QuizHomeContainer from '../containers/quiz_home_container';

const appStore = configureStore();

class QuizHomeApp extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <QuizHomeContainer />
      </Provider>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const serverNode = document.getElementById('server-side-contents');
  const serverData = JSON.parse(serverNode.innerText);
  window.serverData = serverData;
  const node = document.getElementById('component-quiz-home');
  if (node) {
    ReactDOM.render(<QuizHomeApp store={appStore} {...serverData} />, node);
  }
});