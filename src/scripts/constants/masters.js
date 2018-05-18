export const MASTER_INFO = [
  {
    id: 1,
    name: 'Dan',
    experience: 5,
    images: [
      { id: 1, price: 6000, time: 5, style: 'Classical' },
      { id: 2, price: 7000, time: 7, style: 'Biomechanics' },
      { id: 3, price: 7000, time: 10, style: 'Realism' },
      { id: 4, price: 5000, time: 7, style: 'Realism' },
      { id: 5, price: 4000, time: 4, style: 'Watercolor' }
    ],
    styles: {
      classical: 1,
      biomechanics: 1,
      realism: 2,
      watercolor: 1,
      newSchool: 0,
      horror: 0
    }
  }, {
    id: 2,
    name: 'Helga',
    experience: 7,
    images: [
      { id: 1, price: 4000, time: 3, style: 'New school' },
      { id: 2, price: 7000, time: 4, style: 'Realism' },
      { id: 3, price: 5000, time: 6, style: 'Horror' },
      { id: 4, price: 3000, time: 2, style: 'Classical' },
      { id: 5, price: 8000, time: 4, style: 'Realism' }
    ],
    styles: {
      classical: 1,
      biomechanics: 0,
      realism: 2,
      watercolor: 0,
      newSchool: 1,
      horror: 1
    }
  }, {
    id: 3,
    name: 'Mike',
    experience: 4,
    images: [
      { id: 1, price: 7000, time: 3, style: 'New school' },
      { id: 2, price: 4000, time: 4, style: 'Realism' },
      { id: 3, price: 5000, time: 2, style: 'New school' },
      { id: 4, price: 7000, time: 3, style: 'New school' }
    ],
    styles: {
      classical: 0,
      biomechanics: 0,
      realism: 1,
      watercolor: 0,
      newSchool: 3,
      horror: 0
    }
  }
];
