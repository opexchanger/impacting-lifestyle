import { INavItem } from '../types';

export const navItems: { en: Array<INavItem>; br: Array<INavItem> } = {
  en: [
    {
      label: 'Development',
      children: [
        {
          label: 'Javascript',
          href: '#',
        },
        {
          label: 'React',
          href: '#',
        },
        {
          label: 'CSS',
          href: '#',
        },
      ],
    },
    {
      label: 'Finances',
      children: [
        {
          label: 'Personal',
          href: '#',
        },
        {
          label: 'For Your Business',
          href: '#',
        },
      ],
    },
    {
      label: 'Suggest a subject',
      href: '#',
    },
  ],
  br: [
    {
      label: 'Desenvolvimento',
      children: [
        {
          label: 'Javascript',
          href: '#',
        },
        {
          label: 'React',
          href: '#',
        },
        {
          label: 'CSS',
          href: '#',
        },
      ],
    },
    {
      label: 'Finanças',
      children: [
        {
          label: 'Pessoais',
          href: '#',
        },
        {
          label: 'Pro Seu Negócio',
          href: '#',
        },
      ],
    },
    {
      label: 'Sugira um assunto',
      href: '#',
    },
  ],
};

interface IFooterLink {
  label: string;
  href: string;
}

interface IFooterItem {
  title: string;
  links: IFooterLink[];
}

export const footerItems: { en: IFooterItem[]; br: IFooterItem[] } = {
  en: [
    {
      title: 'Subjects',
      links: [
        {
          label: 'React',
          href: '#',
        },
        {
          label: 'CSS',
          href: '#',
        },
        {
          label: 'Crypto',
          href: '#',
        },
        {
          label: 'Javascript',
          href: '#',
        },
        {
          label: 'Investment',
          href: '#',
        },
      ],
    },
    {
      title: 'Categories',
      links: [
        {
          label: 'Tutorials',
          href: '#',
        },
        {
          label: 'Quick Tips',
          href: '#',
        },
        {
          label: 'News',
          href: '#',
        },
      ],
    },
  ],
  br: [
    {
      title: 'Assuntos',
      links: [
        {
          label: 'React',
          href: '#',
        },
        {
          label: 'CSS',
          href: '#',
        },
        {
          label: 'Crypto',
          href: '#',
        },
        {
          label: 'Javascript',
          href: '#',
        },
        {
          label: 'Investimentos',
          href: '#',
        },
      ],
    },
    {
      title: 'Categorias',
      links: [
        {
          label: 'Tutoriais',
          href: '#',
        },
        {
          label: 'Dicas Rápidas',
          href: '#',
        },
        {
          label: 'Novidades',
          href: '#',
        },
      ],
    },
  ],
};

interface INewsletter {
  title: string;
  text?: string;
  shortSentence: string;
  error: string;
  inputPlaceholder: string;
  buttonText: string;
}

export const newsletter: {
  en: INewsletter;
  br: INewsletter;
} = {
  br: {
    title: 'Assine a nossa Newsletter',
    shortSentence: 'Se não curtir, se desenscreva com 1 clique ✌️',
    error: 'Epa rolou um erro! 😢 Teria como tentar novamente?',
    inputPlaceholder: 'Seu email',
    buttonText: 'Enviar',
  },
  en: {
    title: 'Subscribe to our Newsletter',
    shortSentence: "If you don't like it, unsubscribe with one click ✌️",
    error: 'Oh no an error occured! 😢 Please try again later.',
    inputPlaceholder: 'Your email',
    buttonText: 'Submit',
  },
};
