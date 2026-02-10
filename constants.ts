
import { Ad } from './types';

import alfa1 from './Produtos/alfa.jpeg';
import alfa2 from './Produtos/alfaromeu.jpeg';
import opala1 from './Produtos/opala1.jpeg';
import opala2 from './Produtos/opala2.jpeg';

export const CATEGORIES = [
  "Todos",
  "Veículos",
  "Motos",
  "Eletrônicos",
  "Imóveis",
  "Móveis"
];

export const MOCK_ADS: Ad[] = [
  {
    id: '1',
    title: 'Opala Comodoro 1979',
    price: 89000,
    location: 'Sinop - MT',
    category: 'Veículos',
    images: [
      opala1,
      opala2,
    ],
    videos: [],
    whatsapp: '11999999999',
    description:
      'Opala Comodoro ano 79. Motor 6cc. 4 marchas (ré pra frente).',
    created_at: new Date().toISOString(),
    featured: true,
  },
  {
    id: '2',
    title: 'Alfa Romeo 156 Twin Spark 1999',
    price: 115000,
    location: 'Sinop - MT',
    category: 'Veículos',
    images: [
      alfa1,
      alfa2,
    ],
    videos: [],
    whatsapp: '41999999999',
    description:
      'Ano 1999. Apenas 65 mil km rodados. Carro impecável!!',
    created_at: new Date(Date.now() - 86400000).toISOString(),
    featured: false,
  }
];
