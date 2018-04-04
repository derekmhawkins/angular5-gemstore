import { GemModel } from './gem-model';

export const GEMS: GemModel[] = [
  {
    id: 1,
    name: 'Dodecahedron',
    price: 2.95,
    description: "Some gems have hidden qualities beyonf their lustre, beyond their shine... Dodecahredon is one of those gems",
    imagePath: "./assets/img/gem-01.gif",
    inventory: 10,
    reviews: [
      {
        id: 1,
        createDate: 'Wednesday',
        author: 'Johnny',
        rating: 5,
        body: 'I hate Angular!'
      },
      {
        id: 2,
        createDate: 'Monday',
        author: 'Susan',
        rating: 2,
        body: 'I love Angular!'
      }
    ]
  }, {
    id: 2,
    name: 'Pentagonal',
    price: 5.95,
    description: 'The origin of the pentagonal gem is unknown, hence it\'s low value',
    imagePath: './assets/img/gem-02.gif',
    inventory: 0,
    reviews: [
      {
        id: 1,
        createDate: 'Wednesday',
        author: 'Johnny',
        rating: 5,
        body: 'I hate Angular!'
      },
      {
        id: 2,
        createDate: 'Monday',
        author: 'Susan',
        rating: 2,
        body: 'I love Angular!'
      }
    ]
  }, {
    id: 3,
    name: 'Hexagonal',
    price: 12.95,
    description: 'The hexagonal gem is one of our best sellers',
    imagePath: './assets/img/gem-03.gif',
    inventory: 10,
    reviews: [
      {
        id: 1,
        createDate: 'Wednesday',
        author: 'Johnny',
        rating: 5,
        body: 'I hate Angular!'
      },
      {
        id: 2,
        createDate: 'Monday',
        author: 'Susan',
        rating: 2,
        body: 'I love Angular!'
      }
    ]
  }
];
