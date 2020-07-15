import axios from 'axios';

const delay = (s) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, s * 1000);
  });
};

const cards = [
  {
    hash: '05tre4534tgdfgbyli84ty2954',
    lang: { from: 'pl', to: 'ru' },
    from: {
      word: 'mówić',
      example: 'On i tak tego nie zrobi, choćbyś nie wiem co mówił.'
    },
    to: {
      word: 'говорить',
      example: 'Что бы ты ни говорил, он всё равно этого не сделает.'
    }
  },
  {
    hash: '5tgrfe4534tgdfgbyli84ty2954',
    lang: { from: 'pl', to: 'ru' },
    from: {
      word: 'mówić',
      example: 'Przestań owijać w bawełnę i mów, czemu jesteś taki zły.'
    },
    to: {
      word: 'сказать',
      example: 'Перестань ходить вокруг да около и прямо скажи мне, почему ты так зол.'
    }
  },
  {
    hash: '435hgfe4534tgdfgbyli84ty2954',
    lang: { from: 'pl', to: 'ru' },
    from: {
      word: 'mówić',
      example: 'Nie jest mi potrzebne mówienie jak rodzimy użytkownik, wystarczy, że będę mówił biegle.'
    },
    to: {
      word: 'разговаривать',
      example: 'Я не думаю, что мне так уж необходимо звучать как носитель языка, я просто хочу уметь свободно разговаривать.'
    }
  },
  {
    hash: '67ghr0je94534tgdfgbyli84ty294',
    lang: { from: 'pl', to: 'ru' },
    from: {
      word: 'mówić',
      example: 'Ile ludzi może jeździć cały dzień słuchając jak jego partner mówi o swoich cyklach?'
    },
    to: {
      word: 'болтать',
      example: 'Как много людей колесят весь день, слушая, как их напарник болтает о своем суточном ритме?'
    }
  },
  {
    hash: '67ghr0je94534tgdfgbyl5i84ty294',
    lang: { from: 'pl', to: 'ru' },
    from: {
      word: 'mówić',
      example: 'Dowiedziałam się od Józefa, że zaraz po wzięciu kąpieli mówił z kimś przez telefon prawie godzinę.'
    },
    to: {
      word: 'беседовать',
      example: 'От Юзефа я узнала, что сейчас же после ванны он почти час беседовал с кем-то по телефону.'
    }
  },
];

const autocomplete = [
  "mówić",
  "mówić bez sensu",
  "mówić biegle",
  "mówić bzdury",
  "mówić per ty",
  "mówić po rosyjsku",
  "mówić z emfazą",
  "mówienie",
  "mówienie per pan",
  "Mówiona",
  "mówiony",
  "mówka",
  "mównica",
  "mózg",
  "Mózg w naczyniu",
  "mózgowie",
  "Mózgowie",
  "mózgowie człowieka"
];

const langs = [
  { value: 'by', label: 'belarusian' },
  { value: 'en', label: 'english' },
  { value: 'pl', label: 'polish' },
  { value: 'ru', label: 'russian' },
  { value: 'fr', label: 'franch' },
  { value: 'bg', label: 'bulgarian' },
  { value: 'uk', label: 'ukranian' },
];

const user = {
  username: 'Mehmet Oliver',
  email: 'mehmetoliver@gmail.com',
  hash: '756hghf909485tuey1hde67df7rygh4yh34',
  langs: ['en', 'pl'],
  quickLangs: ['en', 'pl', 'ru'],
  cards: [
    cards[0],
    cards[2],
  ],
  history: [
    { word: 'speak', date: '12.30.2020', langs: { from: 'en', to: 'ru' } },
    { word: 'mówić', date: '12.30.2020', langs: { from: 'pl', to: 'ru' } },
    { word: 'war', date: '12.30.2020', langs: { from: 'en', to: 'ru' } },
  ]
};

const api = {

  user: {
    getData: (userId) => delay(2).then((userId) => ({
      result: {
        username: user.username,
        email: user.email,
        count: user.cards.length,
      },
    })),

    addNew: (user) => delay(2).then((user) => ({
      result: false,
      error: { message: 'You can\'t register account now.' },
    })),
    
    editUser: (user, userId) => delay(2).then((user, userId) => ({ 
      result: false, 
      error: { message: 'You can\'t register account now.' } 
    })),
    
    langs: {
      get: (userId) => delay(2).then((userId) => ({ result: user.langs })),
      set: (langs, userId) => delay(2).then((langs, userId) => { 
        user.langs = langs;
        return ({ result: true });
      }),
    },

    quickLangs: {
      get: (userId) => delay(2).then((userId) => ({ result: user.quickLangs })),
      set: (langs, userId) => delay(2).then((langs, userId) => { 
        user.quickLangs = langs;
        return ({ result: true });
      }),
    },

    history: {
      get: (userId) => delay(2).then((userId) => ({ result: user.history })),
      clean: (userId) => delay(2).then((userId) => { 
        user.history = [];
        return ({ result: true });
      }),
    }
  },

  vocabulary: {
    get: (userId) => delay(2).then((userId) => ({
      count: user.cards.length,
      result: user.cards,
    })),

    deleteOne: (cardId, userId) => delay(2).then((cardId, userId) => {
      user.cards = user.cards.filter(c => c.hash !== cardId);
    }),

    addOne: (card, userId) => delay(2).then((card, userId) => {
      user.cards = [ ...user.cards, card ];
    }),
  },

  search: {
    getResult: (word, from, to) => delay(2).then((word, from, to) => ({
      count: cards.length,
      result: cards,
    })).then(({ result }) => result),
    suggest: (word, from, to) => delay(2).then((word, from, to) => ({ result: autocomplete })).then(({ result }) => result),
  },

  languages: {
    get: () => delay(2).then(() => ({ result: langs })),
  },
};

export default api;