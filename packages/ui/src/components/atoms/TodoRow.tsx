import * as React from 'react';

import './TodoRow.css';

const TodoRow: React.SFC = props => (
    <li className="todoRow">{props.children}</li>
);

export default TodoRow;