import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post, PostType } from "./components/Post"

import './global.css'
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/arthur3r.png",
      name: "Arthur Freire Ribeiro",
      role: "Student at Rocketseat"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraaa 👋' },
      {type: 'paragraph', content: 'Acabeii de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type: 'link', content: '👉 jane.design/doctorcaree' }
    ],
    publishedAt: new Date('2023-08-10 20:00:05')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernades",
      role: "Intructor at Rocketseat"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋' },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type: 'link', content: '👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-08-20 15:23:05')
  }
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => (
            <Post 
              key={post.id}
              post={post}
            />
          ))}
        </main>
      </div>
    </>
  )
}

export default App
