import React from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator, State } from '../../state';
import { useEffect } from 'react';

function Orders () {

    const dispatch = useDispatch();
    const { fetchData } = bindActionCreators(actionCreator, dispatch);
    const state = useSelector((state: State) => state.orders);

useEffect(() => {
    // fetchData()
})

    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default Orders;