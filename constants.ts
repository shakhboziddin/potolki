import { Translation } from './types';
// importing images below
import mate from './components/images/mate.jpg'
import glance from './components/images/glyans.jpg'
import stop from './components/images/2step.jpg'
import led from './components/images/led.jpg'
import ten from './components/images/ten.jpg'
import custom from './components/images/custom.jpg'


// importing project photos below
import pr1 from './components/images/pr1.jpg'
import pr2 from './components/images/pr2.jpg'
import pr3 from './components/images/pr3.jpg'
import pr4 from './components/images/pr4.jpg'
import pr5 from './components/images/pr5.jpg'
import pr6 from './components/images/pr6.jpg'
import pr7 from './components/images/pr7.jpg'
import pr8 from './components/images/pr8.jpg'
import pr9 from './components/images/pr9.jpg'


export const PHONE_NUMBER = "+998948248777";
export const TELEGRAM_USERNAME = "httpstmePatolki777"; 
export const TELEGRAM_LINK = `https://t.me/${TELEGRAM_USERNAME}`;

export const TG_BOT_TOKEN = "YOUR_BOT_TOKEN_HERE";
export const TG_CHAT_ID = "YOUR_CHAT_ID_HERE";

export const CONTENT: Record<string, Translation> = {
  ru: {
    nav: {
      home: "Главная",
      services: "Услуги",
      portfolio: "Портфолио",
      pricing: "Цены",
      contacts: "Контакты",
      callBtn: "Позвонить",
      callCenter: "Колл-центр",
      workHours: "Пн-Вс 09:00 - 20:00",
    },
    hero: {
      headline: "Натяжные потолки премиум-класса в Ташкенте",
      subheadline: "Установка за 1 день • Бесплатный замер • Гарантия до 10 лет",
      ctaMain: "Позвонить",
      ctaTg: "Telegram",
      ctaFree: "Бесплатный замер",
    },
    advantages: {
      title: "Почему выбирают нас",
      cta: "Заказать бесплатный замер",
      items: [
        { title: "Премиальные материалы", description: "Только проверенные и надежные материалы", icon: "Gem" },
        { title: "Опытные мастера", description: "Команда профессионалов с многолетним опытом", icon: "Users" },
        { title: "Чистая установка", description: "Без пыли и мусора, аккуратная работа", icon: "Sparkles" },
        { title: "Гарантия до 10 лет", description: "Вы можете быть уверены в долговечности", icon: "ShieldCheck" },
        { title: "Быстрое выполнение", description: "Установка за 1 день", icon: "Clock" },
      ],
    },
    services: {
      title: "Наши услуги",
      subtitle: "Идеальные решения для вашего интерьера",
      cta: "Заказать",
      items: [
        {
          title: "Матовые потолки",
          description: "Спокойная элегантность и уют для спальни и гостиной",
          image: mate,
        },
        {
          title: "Глянцевые потолки",
          description: "Эффект дорогого интерьера и визуальное расширение пространства",
          image: glance,
        },
        {
          title: "Двухуровневые потолки",
          description: "Уникальное дизайнерское решение любой сложности",
          image: stop,
        },
        {
          title: "Потолки с LED-подсветкой",
          description: "Современный стиль с эффектом парящего потолка",
          image: led,
        },
        {
          title: "Теневые профили",
          description: "Идеально ровный зазор между стеной и потолком",
          image: ten,
        },
        {
          title: "Кастом патолки с изображением",
          description: "Кастомные картинки",
          image: custom,
        },
      ],
    },
    portfolio: {
      title: "Наши работы",
      subtitle: "Лучшие проекты, реализованные нашей командой в Ташкенте",
      expand: "Показать больше",
      items: [
        { id: 1, title: "Гостиная в ЖК 'Tashkent City'", category: "Премиум", image: pr1 },
        { id: 2, title: "Современная спальня, Чиланзар", category: "Матовый", image: pr3 },
        { id: 3, title: "Двухуровневый зал, Юнусабад", category: "Сложные формы", image: pr7 },
        { id: 4, title: "Кухня в стиле лофт, Мирзо-Улугбек", category: "Глянцевый", image: pr8 },
        { id: 5, title: "LED освещение в прихожей", category: "Подсветка", image: pr5 },
        { id: 6, title: "Детская комната, Сергели", category: "Эко-материалы", image: pr9},
      ]
    },
    reviews: {
      title: "Отзывы наших клиентов",
      items: [
        { name: "Александр", text: "Очень доволен качеством! Установили за один день, как и обещали. Потолок идеально ровный.", rating: 5 },
        { name: "Нигора", text: "Спасибо большое команде 777! Мастера вежливые, после себя все убрали. Рекомендую!", rating: 5 },
        { name: "Сардор", text: "Заказывали двухуровневый потолок с подсветкой. Результат превзошел ожидания. Красота!", rating: 5 },
      ]
    },
    pricing: {
      title: "Цены",
      subtitle: "Прозрачный расчет стоимости без скрытых платежей",
      disclaimer: "Цена рассчитывается в зависимости от типа потолка и площади объекта",
    },
    offer: {
      title: "Запишитесь на бесплатный замер",
      subtitle: "Оставьте заявку, и мы перезвоним вам в течение 10 минут",
      namePlaceholder: "Ваше имя",
      phonePlaceholder: "Ваш телефон",
      submit: "Отправить заявку",
      sending: "Отправка...",
      successTitle: "Заявка принята!",
      successSubtitle: "Мы свяжемся с вами в ближайшее время для уточнения деталей.",
    },
    contact: {
      title: "Контакты",
      phone: "Телефон",
      telegram: "Telegram администратор",
      address: "г. Ташкент, ул. Амира Темура, 107",
      workHours: "Пн-Вс: 09:00 - 20:00",
    },
    meta: {
      title: "Натяжные потолки в Ташкенте | Potolki 777",
      description: "Качественные натяжные потолки в Ташкенте. Установка за 1 день, гарантия качества. Звоните!",
    },
  },
  uz: {
    nav: {
      home: "Bosh sahifa",
      services: "Xizmatlar",
      portfolio: "Ishlarimiz",
      pricing: "Narxlar",
      contacts: "Bog‘lanish",
      callBtn: "Qo‘ng‘iroq",
      callCenter: "Aloqa markazi",
      workHours: "Dush-Yak 09:00 - 20:00",
    },
    hero: {
      headline: "Toshkentda premium natyajnoy pataloklar",
      subheadline: "1 kunda o‘rnatish • Bepul zamerni • 10 yilgacha kafolat",
      ctaMain: "Qo‘ng‘iroq qilish",
      ctaTg: "Telegram",
      ctaFree: "Bepul zamerni olish",
    },
    advantages: {
      title: "Nega aynan biz?",
      cta: "Bepul zamerni olish",
      items: [
        { title: "Premium materiallar", description: "Faqat sinovdan o‘tgan va ishonchli materiallar", icon: "Gem" },
        { title: "Tajribali ustalar", description: "Ko‘p yillik tajribaga ega professional jamoa", icon: "Users" },
        { title: "Toza o‘rnatish", description: "Chang va axloqsiz ishlarsiz, tartibli ish", icon: "Sparkles" },
        { title: "10 yil kafolat", description: "Sifat va mustahkamlik kafolati", icon: "ShieldCheck" },
        { title: "Tez ish", description: "O‘rnatish 1 kunda", icon: "Clock" },
      ],
    },
    services: {
      title: "Bizning xizmatlar",
      subtitle: "Sizning interyeringiz uchun mukammal yechimlar",
      cta: "Buyurtma berish",
      items: [
        {
          title: "Matoviy pataloklar",
          description: "Yotoqxona va mehmonxonalar uchun sokin va nafis ko‘rinish",
          image: mate,
        },
        {
          title: "Glyanets pataloklar",
          description: "Hashamatli dizayn va xonani kengaytirib ko‘rsatish effekti",
          image: glance,
        },
        {
          title: "Ikki darajali pataloklar",
          description: "Murakkab va takrorlanmas dizaynerlik yechimlari",
          image: stop,
        },
        {
          title: "LED pataloklar",
          description: "Zamonaviy yoritish va 'uchuvchi' patalok effekti",
          image: led,
        },
        {
          title: "Tenevoy profillar",
          description: "Devor va patalok o‘rtasida mukammal va chiroyli tirqish",
          image: ten,
        },
        {
          title: "Castom buyurtma asosida ",
          description: "Buyurtma asosida istalgan sur'at tushurilgan pataloklar",
          image: custom,
        },
      ],
    },
    portfolio: {
      title: "Bajarilgan ishlar",
      subtitle: "Toshkent shahridagi eng yaxshi va sifatli loyihalarimiz",
      expand: "Ko'proq ko'rish",
      items: [
        { id: 1, title: "'Tashkent City' xonadonlaridagi loyiha", category: "Premium", image: pr1},
        { id: 2, title: "Zamonaviy yotoqxona, Chilonzor", category: "Matli", image: pr3 },
        { id: 3, title: "Ikki darajali zal, Yunusobod", category: "Murakkab", image: pr7 },
        { id: 4, title: "Oshxona dizayni, Mirzo-Ulug'bek", category: "Glyanets", image: pr8 },
        { id: 5, title: "Dahlizdagi LED yoritish", category: "Yoritish", image: pr5 },
        { id: 6, title: "Bolalar xonasi, Sergeli", category: "Eko", image: pr9 },
      ]
    },
    reviews: {
      title: "Mijozlarimiz fikrlari",
      items: [
        { name: "Alexander", text: "Sifatidan juda mamnunman! Va'da qilinganidek bir kunda o'rnatishdi. Patalok juda tekis.", rating: 5 },
        { name: "Nigora", text: "777 jamoasiga katta rahmat! Ustalar xushmuomala, o'zlaridan keyin hammasini tozalab ketishdi. Tavsiya qilaman!", rating: 5 },
        { name: "Sardor", text: "Ikki darajali chiroqli patalok buyurtma qilgan edik. Natija kutilganidan ham yaxshi bo'ldi!", rating: 5 },
      ]
    },
    pricing: {
      title: "Narxlar",
      subtitle: "Yashirin to'lovlarsiz shaffof va adolatli narxlar",
      disclaimer: "Narx patalok turi va umumiy maydoni bo‘yicha hisoblanadi",
    },
    offer: {
      title: "Bepul zamerni olish",
      subtitle: "Arizangizni qoldiring, biz sizga 10 daqiqa ichida qo'ng'iroq qilamiz",
      namePlaceholder: "Ismingiz",
      phonePlaceholder: "Telefon raqamingiz",
      submit: "Ariza yuborish",
      sending: "Yuborilmoqda...",
      successTitle: "Ariza qabul qilindi!",
      successSubtitle: "Tez orada mutaxassislarimiz siz bilan bog'lanishadi.",
    },
    contact: {
      title: "Bog'lanish",
      phone: "Telefon",
      telegram: "Telegram admin",
      address: "Toshkent sh., Amir Temur ko'chasi, 107",
      workHours: "Dush-Yak: 09:00 - 20:00",
    },
    meta: {
      title: "Toshkentda Natyajnoy Pataloklar | Potolki 777",
      description: "Toshkentda sifatli natyajnoy pataloklar. 1 kunda o'rnatish, sifat kafolati. Hoziroq qo'ng'iroq qiling!",
    },
  },
};