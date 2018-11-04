import * as React  from 'react';
import { connect } from 'react-redux';

import { IState } from 'src/redux/modules';
import ListOrganism from '../organisms/List';

interface IStateProps {
    name : string,
}
const mapStateToProps = (state: IState) => ({
    name : state.userReducer.user.name,
});

const List: React.SFC<IStateProps> = props => (
    <div>
        <h3>{props.name}の一覧だよー</h3>
        <ListOrganism />
    </div>
);

export default connect(mapStateToProps)(List);