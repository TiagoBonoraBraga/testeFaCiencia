import Header from "@/components/Header";
import styles from "./page.module.css";
import Form from "@/components/Form";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>
       <Header />
      <main className={styles.main}>
        <div className={styles.banner}>
          <h1 className={styles.title}>Formulário de Solicitação</h1>
          <p className={styles.description}>
            Preencha o formulário abaixo para se tornar um polo de apoio FaCiência.
          </p>         
        </div>
        <Form />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
