import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '../stores/app_store';
import QuizListShowContainer from '../containers/quiz_list_show_container';

const appStore = configureStore();

class QuizListShowApp extends React.Component {
  render() {
    const { store, title, comment, isLogin } = this.props;

    return (
      <Provider store={store}>
        <QuizListShowContainer title={title} comment={comment} isLogin={isLogin}/>
      </Provider>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const serverNode = document.getElementById('server-side-contents');
  const serverData = JSON.parse(serverNode.innerText);
  window.serverData = serverData;
  const node = document.getElementById('component-quiz-list-show');
  if (node) {
    ReactDOM.render(<QuizListShowApp store={appStore} {...serverData} />, node);
  }
});