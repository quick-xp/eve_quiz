import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '../stores/app_store';
import QuizResultContainer from '../containers/quiz_result_container';

const appStore = configureStore();

class QuizResultApp extends React.Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <QuizResultContainer/>
      </Provider>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const serverNode = document.getElementById('server-side-contents');
  const serverData = JSON.parse(serverNode.innerText);
  window.serverData = serverData;
  const node = document.getElementById('component-quiz-result');
  if (node) {
    ReactDOM.render(<QuizResultApp store={appStore} {...serverData} />, node);
  }
});