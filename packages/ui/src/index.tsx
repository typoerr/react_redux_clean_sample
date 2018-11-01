import * as React            from 'react';
import * as ReactDOM         from 'react-dom';
import { Provider }          from 'react-redux';

import App                   from './components/App';
import configureStore        from './redux/store/configureStore';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
