import mastercard from '../assets/pagamento/mastercard.svg';
import itau from '../assets/pagamento/itau.svg';
import boleto from '../assets/pagamento/boleto.svg';

const data = [
  {
    id: 1,
    logo: mastercard,
    name: 'Mastercard',
    details: [
      { label: 'Número do cartão', value: '**** ***** **** 8842' },
      { label: 'Validade', value: '12/2031' }
    ],
    policies: [
      { name: 'Vida inteira', insured: 'Carlos Henrique Ferreira de Souza', code: '001543914', valuePolicy: 'R$ 50.000,00', frequency: 'Anual' ,dueDay: '12' },
      { name: 'Esposa', insured: 'Maria Rita Ferreira de Souza', code: '001543914', valuePolicy: 'R$ 400,00', frequency: 'Mensal' ,dueDay: '09' },

    ]
  },
  {
    id: 2,
    logo: itau,
    name: 'Banco Itaú',
    details: [
      { label: 'Agência', value: '3416' },
      { label: 'Conta', value: '011009-0' }
    ],
    policies: [
      { name: 'Filhos', insured: 'Pedro Silva', code: '001543914', valuePolicy: 'R$ 200,00', frequency: 'Semanal' ,dueDay: '09' },
    ]
  },
  {
    id: 3,
    logo: boleto,
    name: 'Boleto',
    details: [],
    policies: [
      { name: 'Doenças graves', insured: 'Ana Clara', code: '001543914', valuePolicy: 'R$ 500,00', frequency: 'Mensal' ,dueDay: '11' },
    ]
  }
];

export default data;
