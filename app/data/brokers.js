import { brokerAvatar1, brokerAvatar2 } from "../assets/brokers";

const brokers = [
  {
    name: "Túlio dos Santos",
    avatar: brokerAvatar1,
    company: "AC Corretores de Saúde LTDA",
    cnpj: "231.266.97/0001-47",
    email: "tulio.santos@gmail.com",
    phone: "+55 (21) 99944-9876",
    policies: [
      {
        name: "Colégio filhos",
        number: "001501123",
      },
      {
        name: "Família",
        number: "001528345",
      },
      {
        name: "Doenças graves",
        number: "001542212",
      },
      {
        name: "Doenças graves",
        number: "001543914",
      },
    ],
  },
  {
    name: "Daniella França",
    avatar: brokerAvatar2,
    company: "BET corretores de saúde LTDA",
    cnpj: "231.266.97/0001-47",
    email: "daniella.franca@gmail.com",
    phone: "+55 (21) 99944-9876",
    policies: [
      {
        name: "Proteção em vida",
        number: "001501123",
      },
      {
        name: "Família",
        number: "001528345",
      },
    ],
  },
];

export default brokers;
