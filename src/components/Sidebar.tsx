import { PencilSimpleLine } from '@phosphor-icons/react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/arthur3r.png" hasBorder />

        <strong>Arthur Freire Ribeiro</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} weight='bold' />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}