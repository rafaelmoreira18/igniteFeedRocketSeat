import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment(props) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDelete() {
    props.onDeleteComment(props.content);
  }

  function handleLikeComment() {
    // setLikeCount(likeCount + 1);
    setLikeCount(state => state + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/guilhermecapitao.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Capitão</strong>
              <time
                title='15 de Janeiro de 2024 às 09h30'
                dateTime="2024-01-15 09:30:00"
              >
                Cerca de 2h atrás
              </time>
            </div>

            <button
              onClick={handleDelete}
              title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{props.content}</p>
        </div>
        <footer><button onClick={handleLikeComment}><ThumbsUp /> Aplaudir <span>{likeCount}</span></button></footer>
      </div>
    </div>
  )
}