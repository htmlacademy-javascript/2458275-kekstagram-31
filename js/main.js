const PHOTOS_TOTAL = 25;
const LIKES_NUM = {
  min: 15,
  max: 200,
};
const COMMENTS_NUM = {
  min: 0,
  max: 30,
};
const AVATAR_NUM = {
  min: 1,
  max: 6,
};
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Иван', 'Екатерина', 'Александр', 'Ольга', 'Дмитрий', 'Анна', 'Николай', 'Мария', 'Павел', 'Светлана', 'Алексей', 'Татьяна', 'Игорь', 'Антонина', 'Владимир', 'Елена', 'Артем', 'Наталья', 'Сергей', 'Ирина', 'Андрей', 'Евгения', 'Михаил', 'Анна', 'Владислав', 'Ольга', 'Александра', 'Денис', 'Елена', 'Анатолий',
];
const DESCRIPTIONS = [
  'Вдохновляйтесь каждым моментом.',
  'Мир в объективе камеры.',
  'Просто красота!',
  'Эмоции в каждом кадре.',
  'Мгновение вечности.',
  'Приключения ждут!',
  'Вернитесь к теплым воспоминаниям.',
  'Моменты счастья...',
  'Отражение жизни.',
  'Игра цветов и форм.',
  'Экспрессия красоты.',
  'Магия момента.',
  'История в каждом кадре.',
  'Сияние эмоций.',
  'Гармония в объективе.',
  'Смелость в искусстве.',
  'Ритм жизни.',
  'Отражение души.',
  'Сила момента.',
  'Легкость бытия.',
  'Подарите вдохновение.',
  'Мир в моем объективе.',
  'Остановите время...',
  'Краски жизни.',
];
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
const usedIdValues = [];
const getRandomCommentId = () => {
  let commentId = 1;
  if(usedIdValues.includes(commentId)) {
    commentId = getRandomInteger(1, 1000000);
  }
  usedIdValues.push(commentId);
  return commentId;
};
const createComment = () => {
  let id = 1;
  return () => {
    const comment = {};
    comment.id = getRandomCommentId();
    comment.avatar = `img/avatar-${getRandomInteger(AVATAR_NUM.min, AVATAR_NUM.max)}.svg`;
    comment.message = getRandomArrayElement(COMMENTS);
    comment.name = getRandomArrayElement(NAMES);
    return comment;
  };
};
const createPhoto = () => {
  let id = 1;
  return () => {
    const photo = {};
    photo.id = id;
    photo.url = `photos/${id}.jpg`;
    photo.description = getRandomArrayElement(DESCRIPTIONS);
    photo.likes = getRandomInteger(LIKES_NUM.min, LIKES_NUM.max);
    photo.comments = Array.from({length: getRandomInteger(0, COMMENTS_NUM.max)}, createComment());
    id++;
    return photo;
  };
};
const photosArray = Array.from({length: PHOTOS_TOTAL}, createPhoto());
console.log(photosArray);

