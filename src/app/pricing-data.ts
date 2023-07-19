import { Pricing } from './components/pricing-card/pricing.model';

export const PRICING_LIST: Pricing[] = [
  {
    name: 'Plan Basico',
    price: {
      currencySymbol: '$',
      amount: '29.000',
      period: '/mes'
    },
    features: [
      {
        icon: 'check',
        text: 'mensajes ilimitados'
      },
      {
        icon: 'check',
        text: 'respuestas rapidas'
      }
      ,
      
      {
        icon: 'check',
        text: '24x7 support',
      },
      {
        icon: 'check',
        text: 'respuestas a mensajes de voz',
        lineThrough: true
      },
      {
        icon: 'check',
        text: 'Chat-GPT en su ultima verion',
        lineThrough: true
      }
    ]},
    {
        name: 'Plan Standar',
        price: {
          currencySymbol: '$',
          amount: '49.000',
          period: '/mes'
        },
        features: [
          {
            icon: 'check',
            text: 'mensajes ilimitados'
          },
          {
            icon: 'check',
            text: 'respuestas rapidas'
          }
          ,
          
          {
            icon: 'check',
            text: '24x7 support',
          },
          {
            icon: 'check',
            text: 'respuestas a mensajes de voz',
          },
          {
            icon: 'check',
            text: 'Chat-GPT en su ultima verion',
            lineThrough: true
          }
        ],},
        {
            name: 'Plan Pro',
            price: {
              currencySymbol: '$',
              amount: '69.000',
              period: '/mes'
            },
            features: [
              {
                icon: 'check',
                text: 'mensajes ilimitados'
              },
              {
                icon: 'check',
                text: 'respuestas rapidas'
              }
              ,
              
              {
                icon: 'check',
                text: '24x7 support',
              },
              {
                icon: 'check',
                text: 'respuestas a mensajes de voz',
              },
              {
                icon: 'check',
                text: 'Chat-GPT en su ultima verion',
              }
            ],},
]