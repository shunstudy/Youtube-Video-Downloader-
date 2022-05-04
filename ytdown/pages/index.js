import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  const inputvalue = (event) =>{
    const input =event.target.value;

    console.log(input);
  }



  return (
    <div className={styles.container}>
      <Head>
        <title>Youtube Downloader</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png" />
      </Head>


      <div className="container">
            <h3 className={styles.animatecharcter}>Youtube Video Downloader</h3>
      </div> 
      <div>
        <label className={styles.search}>Search Here, </label>
        <form action='http://localhost:4000/download/' method="GET">
        <input className={styles.inputBox} type="text"  onChange={inputvalue} name="url"  placeholder='https://www.youtube.com/watch?v=B31LgI4Y4DQ&t=1213s'></input>
        <input className={styles.submit} value="Download" type="submit"></input>
        </form>
      </div>
      

     
    </div>
  )
}
