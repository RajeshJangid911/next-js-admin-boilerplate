import type { NextPage } from 'next'
import styles from 'styles/Home.module.css'
import MainLayout from "layout/MainLayout"

const Home: NextPage = () => {
  return (
      <MainLayout>
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>
              Welcome to <a href="https://nextjs.org">Next.js + MUI Admin</a>
            </h1>
            <p className={styles.description}>
              <a href="https://github.com/rajeshjangid911">Github</a>
            </p>
          </main>
        </div>
      </MainLayout>

  )
}

export default Home
