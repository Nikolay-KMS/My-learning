

import renderer from 'react-test-renderer';
import { Icons } from './Icons';

test('matches snapshot Icons', () => {
  const onClick = jest.fn();

  const tree = renderer.create(<Icons
    handleClickBasket={() => onClick}
    handleClickStar={() => onClick}
    handleClickBtn={() => onClick}
    idFavouriteCards={[1, 2]}
    idCardsInBasket={{ 1: 1, 2: 1, 3: 1 }}
  />).toJSON()
  expect(tree).toMatchSnapshot()
})