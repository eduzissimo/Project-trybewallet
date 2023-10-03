import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { globalCurrency } from '../API/fetchAPI';
import { getAPI, expensesSent } from '../redux/actions';
import { Dispatch } from '../types';

function WalletForm() {
  const dispatch: Dispatch = useDispatch();
  const currency = useSelector((state: any) => state.wallet.currencies);
  const [data, setData] = useState({
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: '',
  });

  const handleClick = async (event: any) => {
    event.preventDefault();

    const dataApi = await globalCurrency();
    const newExpense = {
      ...data,
      exchangeRates: dataApi,
    };

    dispatch(expensesSent(newExpense));

    setData({
      id: newExpense.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: '',
    });
  };

  useEffect(() => {
    dispatch(getAPI());
  }, [dispatch]);

  return (
    <div>
      <form>
        <label htmlFor="valor-input">Valor:</label>
        <input
          id="valor-input"
          type="number"
          data-testid="value-input"
          value={ data.value }
          onChange={ (event) => setData({
            ...data,
            value: event.target.value,
          }) }
        />

        <label htmlFor="description-input">Descrição:</label>
        <input
          id="description-input"
          type="text"
          data-testid="description-input"
          value={ data.description }
          onChange={ (event) => setData({
            ...data,
            description: event.target.value,
          }) }
        />

        <label htmlFor="moedas-input">Moeda:</label>
        <select
          id="moedas-input"
          data-testid="currency-input"
          value={ data.currency }
          onChange={ (event) => setData({
            ...data,
            currency: event.target.value,
          }) }
        >
          {
            currency.map((moeda: string) => {
              return (
                <option key={ moeda }>
                  {moeda}
                </option>
              );
            })
            }
        </select>

        <label htmlFor="metod-input">Metodo de pagamento: </label>
        <select
          id="metodo-input"
          data-testid="method-input"
          value={ data.method }
          onChange={ (event) => setData({
            ...data,
            method: event.target.value,
          }) }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>

        <label htmlFor="tag-input">Categoria:</label>
        <select
          id="tag-input"
          data-testid="tag-input"
          value={ data.tag }
          onChange={ (event) => setData({
            ...data,
            tag: event.target.value,
          }) }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>

        <button onClick={ handleClick }>Adicionar despesa</button>
      </form>
    </div>
  );
}

export default WalletForm;
