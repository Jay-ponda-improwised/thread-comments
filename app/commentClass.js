let id = 1

function generateId() {
  return id++
}

function generateComment(commentMessage) {
  return {
    id: generateId(),
    comment: commentMessage,
    Replies: [],
  }
}

export default generateComment
