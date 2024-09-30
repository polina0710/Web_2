export interface Periodical {
    id: number;
    name: string;
    publisher: string;
    price: number;
  }
  
  export const PERIODICALS = [
    { id: 1, name: 'News', publisher: 'Drozd', price: 123 },
    { id: 2, name: 'Science Journal', publisher: 'Knowledge', price: 200 },
    { id: 3, name: 'Literary Magazine', publisher: 'Pen', price: 150 },
    { id: 4, name: 'Tech World', publisher: 'Innovators', price: 180 },
    { id: 5, name: 'History Digest', publisher: 'Historical Press', price: 170 }
];

  