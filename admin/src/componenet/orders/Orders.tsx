import React from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator, State } from '../../state';

 


function Orders () {

    const dispatch = useDispatch();
    const { fetchData } = bindActionCreators(actionCreator, dispatch);
    const state = useSelector((state: State) => state.orders)
    fetchData();
    console.log(state)
    return(
        <div>
            <table>
                <tr>
                    <td></td>
                </tr>
            </table>
        </div>
    );
};

export default Orders;