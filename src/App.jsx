import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from './components/Sidebar';
import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal! 👋' },
      { type: 'paragraph', content: 'Acabei de finalizar mais um projeto incrível aqui no curso da Rocketseat. Dessa vez foi uma aplicação completa de blog com React! 🚀' },
      { type: 'paragraph', content: 'Foi muito gratificante ver como as peças se encaixaram perfeitamente.' },
      { type: 'link', content: '👉 github.com/maykbrito/ignite-feed' },
    ],
    publishedAt: new Date('2024-01-15 08:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'E aí, devs! 🔥' },
      { type: 'paragraph', content: 'Vocês já conhecem o poder do React? Estou impressionado como essa biblioteca revolucionou o desenvolvimento front-end nos últimos anos.' },
      { type: 'paragraph', content: 'Se você ainda não começou a estudar, essa é a hora!' },
      { type: 'link', content: '👉 rocketseat.com.br' },
    ],
    publishedAt: new Date('2024-01-14 14:30:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/jakeliny.png',
      name: 'Jakeliny Gracielly',
      role: 'Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Oi, gente! ✨' },
      { type: 'paragraph', content: 'Queria compartilhar com vocês uma dica valiosa: sempre testem seus componentes! Hoje descobri um bug que poderia ter sido evitado com testes simples.' },
      { type: 'paragraph', content: 'A prevenção sempre é melhor que a correção! 💡' },
    ],
    publishedAt: new Date('2024-01-13 16:45:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
