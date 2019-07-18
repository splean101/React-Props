import React from 'react';
import ReactDOM from 'react-dom';

let arr = [['One', "Two"], ["Three", 'Four']];

const Table = (props) => {
    return (
        <table id='table'>
            <tbody>
                <tr>
                    <td>{props.data[0][0]}</td>
                    <td>{props.data[0][1]}</td>
                </tr>
                <tr>
                    <td>{props.data[1][0]}</td>
                    <td>{props.data[1][1]}</td>
                </tr>
            </tbody>
        </table>
    )
};
Table.defaultProps = {data: [[1.1, 1.2], [2.1, 2.2]]}
ReactDOM.render(<Table /*data = {arr}*//>, document.getElementById('div1'))