import { useSelector, useDispatch } from 'react-redux';
import { Dispatch, User } from '../types';
import { removeExpenses, editExpenses } from '../redux/actions';

function TableActions() {
  const { expenses } = useSelector((state: User) => state.wallet);
  const dispatch = useDispatch<Dispatch>();

  const handleDelete = (id: number) => {
    dispatch(removeExpenses(id));
  };

  const handleEdit = (id: number) => {
    dispatch(editExpenses(id));
  };

  return (
    expenses.map((item: any) => (
      <tr key={ item.id }>
        <td>{item.description}</td>
        <td>{item.tag}</td>
        <td>{item.method}</td>
        <td>{Number(item.value).toFixed(2)}</td>
        <td>{item.exchangeRates[item.currency].name}</td>
        <td>{Number(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
        <td>
          {(
            Number(item.value) * Number(item.exchangeRates[item.currency].ask)
          ).toFixed(2)}
        </td>
        <td>Real</td>
        <td>
          <button
            data-testid="edit-btn"
            onClick={ () => item.id !== undefined && handleEdit(item.id) }
          >
            Editar
          </button>

          <button
            data-testid="delete-btn"
            onClick={ () => item.id !== undefined && handleDelete(item.id) }
          >
            Excluir
          </button>
        </td>
      </tr>
    ))
  );
}
export default TableActions;
