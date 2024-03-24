const commentsContainer = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');

const createComment = ({avatar, name, message}) => {
  const commentSample = commentTemplate.cloneNode(true);
  const author = commentSample.querySelector('.social__picture');
  author.src = avatar;
  author.name = name;
  commentSample.querySelector('.social__text').textContent = message;

  return commentSample;
};

const commentsFragment = document.createDocumentFragment();
const comment = createComment();

const createComments = () => {
  comment.forEach(({avatar, name, message}) => {
    commentsFragment.append(createComment({avatar, name, message}));
  });

  commentsContainer.append(commentsFragment);
};

const removeComments = () => {
  commentsContainer.innerHTML = '';
};

export {createComments, removeComments};
