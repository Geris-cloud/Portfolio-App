import Head from 'next/head';
import useLocalStor from '../../components/local-storage';
import { Main, Descr, Point, Name, Bgc } from '../../components/styled-comp';
import styles from '../../styles/technology.module.scss';

export default function Technologies({ langFlag }) {
  const [techFlag, setTechFlag] = useLocalStor(true, 'techFlag')

  let points = ['1', '2', '3', '4', '5']
  let pointList = points.map(() => {
    return (
      <Point tech={techFlag}></Point>
    )
  })

  return (
    <>
      <Head>
        <title>Technologies</title>
        <link rel="icon" href="/tasks-solid.svg" />
      </Head>
      <Main className={styles.background}>
        <Descr
          onClick={() => setTechFlag(!techFlag, 'techFlag')}
          tech={techFlag}
          className={styles.instruction}>
          {langFlag ?
            techFlag ? 'pokaż stopień zaawansowania' : 'ukryj stopień zaawansowania'
            :
            techFlag ? 'show the degree of advancement' : 'hide the degree of advancement'}
        </Descr>
        <main className={styles.bilboard}>
          <Bgc tech={techFlag} id={styles.html} className={styles.icon}>
            <Name tech={techFlag}>HTML</Name>
            {pointList}
          </Bgc>
          <Bgc tech={techFlag} id={styles.css} className={styles.icon}>
            <Name tech={techFlag}>CSS</Name>
            {pointList}
          </Bgc>
          <Bgc tech={techFlag} id={styles.js} className={styles.icon}>
            <Name tech={techFlag}>JavaScript</Name>
            {pointList}
          </Bgc>
          <Bgc tech={techFlag} className={`${styles.git} ${styles.icon}`}>
            <Name tech={techFlag}>GIT</Name>
            {pointList}
          </Bgc>
          <Bgc tech={techFlag} className={`${styles.react} ${styles.icon}`}>
            <Name tech={techFlag}>React</Name>
            {pointList}
          </Bgc>
          <Bgc tech={techFlag} className={`${styles.node} ${styles.icon}`}>
            <Name tech={techFlag}>Node</Name>
            {pointList}
          </Bgc>
          <Bgc tech={techFlag} className={`${styles.next} ${styles.icon}`}>
            <Name tech={techFlag}>Next</Name>
            {pointList}
          </Bgc>
          <Bgc tech={techFlag} className={`${styles.jquery} ${styles.icon}`}>
            <Name tech={techFlag}>jQuery</Name>
            {pointList}
          </Bgc>
          <Bgc tech={techFlag} className={`${styles.gsap} ${styles.icon}`}>
            <Name tech={techFlag}>GSAP</Name>
            {pointList}
          </Bgc>
          <Bgc tech={techFlag} className={`${styles.styled} ${styles.icon}`}>
            <Name tech={techFlag}>Styled components</Name>
            {pointList}
          </Bgc>
          <Bgc tech={techFlag} className={`${styles.scss} ${styles.icon}`}>
            <Name tech={techFlag}>Sass</Name>
            {pointList}
          </Bgc>
        </main>
      </Main>
    </>
  )
}