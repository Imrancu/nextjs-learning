import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  const aboutMe = 'Motivated Full Stack Engineer with experience in creating custom user Interfaces through ReactJS/NextJS and Tailwind/Bootstrap and Back-end with NodeJS, ExpressJS, and MongoDB. Strong collaboration skills and proven history of application development. HTML5, CSS3, and JavaScript.';
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[{aboutMe}]</p>
        <p>
          (This is a sample website - I have built a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}