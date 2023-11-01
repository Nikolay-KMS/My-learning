
import renderer from 'react-test-renderer';
import { Card } from './Card';

test('matches snapshot card', () => {

  const card= {
    // name:"Воїни світла. Воїни добра",
    // price: 100,
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a8/%22Warriors_of_Light._Warriors_of_Good%22_2023_postage_stamp.jpg",
    id: 1,
    color: ["purple", "green"]
  }
  const f1= jest.fn();

  const tree = renderer.create(<Card
    card= {card}
    key = { card.id }
    handleClickBtn = { f1 }
    handleClickStar = { f1 }
    isFavouriteActiveuu = {  true  }
    isStar = { true }
    isButton = { false }
  />).toJSON()
  expect(tree).toMatchSnapshot()

// console.log(tree);
})