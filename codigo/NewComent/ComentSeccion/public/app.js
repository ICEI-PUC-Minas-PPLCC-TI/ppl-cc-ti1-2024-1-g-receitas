const currentUser = 'usuário atual';

const commentSection = document.querySelector('.comment-section');
const commentTemplate = document.querySelector('.comment-template');
const replyInputTemplate = document.querySelector('.reply-input-template');

let comments = [];

async function fetchComments() {
  const response = await fetch('https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/comentarios');
  comments = await response.json();
  renderComments();
}

async function saveComment(comment) {
  comment.id = Date.now(); // Gera um ID único baseado no timestamp atual
  const response = await fetch('https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/comentarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  });
  const newComment = await response.json();
  comments.push(newComment);
  renderComments();
}

async function updateComment(comment) {
  const response = await fetch(`https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/comentarios/${comment.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  });
  const updatedComment = await response.json();
  const index = comments.findIndex(c => c.id === comment.id);
  comments[index] = updatedComment;
  renderComments();
}

async function deleteComment(comment) {
  await fetch(`https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/comentarios/${comment.id}`, {
    method: 'DELETE'
  });
  comments = comments.filter(c => c.id !== comment.id);
  renderComments();
}

function createCommentElement(comment) {
  const commentElement = commentTemplate.content.cloneNode(true);
  const userElement = commentElement.querySelector('.usr-name');
  userElement.textContent = comment.user;
  commentElement.querySelector('.c-body').textContent = comment.text;
  commentElement.querySelector('.score-number').textContent = comment.score;

  const scorePlus = commentElement.querySelector('.score-plus');
  const scoreMinus = commentElement.querySelector('.score-minus');
  const deleteButton = commentElement.querySelector('.delete');
  const editButton = commentElement.querySelector('.edit');
  const replyButton = commentElement.querySelector('.reply');

  if (comment.user === currentUser) {
    commentElement.querySelector('.comment').classList.add('this-user');
  }

  scorePlus.addEventListener('click', () => {
    comment.score++;
    updateComment(comment);
  });

  scoreMinus.addEventListener('click', () => {
    comment.score--;
    updateComment(comment);
  });

  deleteButton.addEventListener('click', () => {
    const isConfirmed = confirm('Você tem certeza que deseja deletar este comentário?');
    if (isConfirmed) {
      deleteComment(comment);
    }
  });

  editButton.addEventListener('click', () => {
    const newText = prompt('Edite seu comentário:', comment.text);
    if (newText) {
      comment.text = newText;
      updateComment(comment);
    }
  });

  replyButton.addEventListener('click', () => {
    const replyInput = replyInputTemplate.content.cloneNode(true);
    const replyTextarea = replyInput.querySelector('.cmnt-input');
    const replyButton = replyInput.querySelector('.bu-primary');
    const repliesContainer = commentElement.querySelector('.replies');

    replyButton.addEventListener('click', () => {
      const replyText = replyTextarea.value.trim();
      if (replyText) {
        const reply = {
          id: Date.now(),
          user: currentUser,
          text: replyText,
          score: 0,
          replies: [],
          parentId: comment.id 
        };
        saveComment(reply);
      }
    });

    repliesContainer.appendChild(replyInput);
  });

  if (comment.replies && comment.replies.length > 0) {
    const repliesContainer = commentElement.querySelector('.replies');
    comment.replies.forEach(reply => {
      const replyElement = createCommentElement(reply);
      repliesContainer.appendChild(replyElement);
    });
  }

  return commentElement;
}

function renderComments() {
  const commentsWrapper = document.querySelector('.comments-wrp');
  commentsWrapper.innerHTML = '';
  comments.forEach(comment => {
    const commentElement = createCommentElement(comment);
    commentsWrapper.appendChild(commentElement);
  });
}

const addCommentButton = commentSection.querySelector('.bu-primary');
addCommentButton.addEventListener('click', () => {
  const textarea = commentSection.querySelector('.cmnt-input');
  const text = textarea.value.trim();
  if (text) {
    const newComment = {
      id: Date.now(), // Gera um ID único baseado no timestamp atual
      user: currentUser,
      text: text,
      score: 0,
      replies: []
    };
    saveComment(newComment);
    textarea.value = '';
  }
});

fetchComments();
