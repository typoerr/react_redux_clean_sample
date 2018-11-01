import * as React  from 'react';
import { connect } from 'react-redux';

import { IState }  from 'src/redux/modules';
import { actions } from 'src/redux/modules/list';
import TodoRow     from '../atoms/TodoRow';

interface IStateProps {
    list: Array<string|null>,
}
const mapStateToProps = (state: IState) => ({
    list : state.list.list,
});

interface IDispatchProps {
    getList: () => undefined,
}
const mapDispatchToProps = (dispatch: any) => ({
    getList : () => dispatch(actions.getList()),
});

const List: React.SFC<IStateProps & IDispatchProps> = props => (
    <div>
        <button type="button" onClick={props.getList}>更新</button>
        <ul>
            {props.list.map((todo, i) => (
                <TodoRow key={`${i}${todo}`}>{todo}</TodoRow>
            ))}
        </ul>
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(List);
