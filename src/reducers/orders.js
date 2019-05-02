import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

const stepsSet = 4;

const next = (position, status) => {
  if (position === 'clients') {
    return 'conveyor_1';
  }

  let step = +position.match(/\d+/);

  return step < stepsSet ? `conveyor_${++step}` : status === 'finish'
    ? status
    : `conveyor_${step}`;
}


const back = (position) => {
  let step = +position.match(/\d+/);

  return step > 1 ? `conveyor_${--step}` : 'conveyor_1';
}


export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER:
      return [
        ...state,
        { 
          ...action.payload, 
          position: 'clients',
          ingredients: []
        }
      ].slice(-10);

    case MOVE_ORDER_NEXT:
      return state.map(order => order.id === action.payload 
        ? { ...order, position: next(order.position, order.ingredients.length === order.recipe.length ? 'finish' : 'not_finish')} 
        : order);

    case MOVE_ORDER_BACK:
      return state.map(order => order.id === action.payload 
        ? { ...order, position: back(order.position)} 
        : order);

    case ADD_INGREDIENT:
      const { from, ingredient } = action.payload;
      const active = getOrdersFor({ orders: [...state]}, from)[0];

      return state.map(order => order.id === (active ? active.id : -1) 
        && order.recipe.includes(ingredient)
          ? { ...order, ingredients: [...order.ingredients, action.payload.ingredient]} 
          : order);

    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
