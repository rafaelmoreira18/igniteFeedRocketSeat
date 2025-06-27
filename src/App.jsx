import { Header } from "./components/Header";
import { Post } from "./Post";
import {Sidebar} from './components/Sidebar';
import styles from "./app.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <aside>sidebar</aside>
        <main>
          {" "}
          <Post
            author="Diego Fernandes"
            content="lorem impsum dolor sit amet consectetur"
          />
          <Post author="Gabriel Buzzi" content="Um novo post muitssso bom" />
        </main>
      </div>
    </div>
  );
}
