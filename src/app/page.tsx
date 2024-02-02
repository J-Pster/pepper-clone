import Link from 'next/link';
import styles from './page.module.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <Image src="logo.svg" alt="Pepper" width={120} height={26} />
        <nav>
          <Link href="/login" className={styles.button__secondary}>
            Fazer Login
          </Link>
          <Link href="/signup" className={styles.button__primary}>
            Criar Conta
          </Link>
        </nav>
      </header>
      <main className={styles.hero}>
        <div className={styles.hero__left}>
          <h1>Venda os seus produtos digitais com mais LIBERDADE!</h1>
          <h2>
            A plataforma certa para o infoprodutor que quer{' '}
            <strong>escalar o seu negócio.</strong>
          </h2>
          <Link href="/signup" className={styles.button__hero}>
            Crie sua Conta
          </Link>
        </div>
        <div className={styles.hero__right}>
          <img src="lp-app-bg.png" alt="Pepper" />
          <img src="lp-app-notif.png" alt="Notification of Pepper" />
        </div>
      </main>
    </div>
  );
}
