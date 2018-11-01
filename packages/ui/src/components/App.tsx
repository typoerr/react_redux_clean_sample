import * as React   from 'react';
import { connect }  from 'react-redux';
import { Dispatch } from 'redux';

import { IState }     from '../redux/modules';
import { actions }    from '../redux/modules/user';
import List           from './pages/List';

import './App.css';

interface IStateProps {
    isGettingUser : boolean,
}
const mapStateToProps = (state: IState) => ({
    isGettingUser : state.user.isGettingUser,
});

interface IDispatchProps {
    getUser : () => null,
}
const mapDispatchToProps= (dispatch: Dispatch) => ({
    getUser : () => dispatch(actions.getUser()),
});

class App extends React.PureComponent<IStateProps & IDispatchProps> {
    constructor(props: IStateProps & IDispatchProps) {
        super(props);
        props.getUser();
    }

    public render() {
        return (
            <div className="App">
                {this.props.isGettingUser
                    ? '読み込み中'
                    : <List/> /* <- ルーティングする */
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
