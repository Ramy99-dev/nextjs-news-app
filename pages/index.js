import Image from 'next/image';

import styles from '../styles/Home.module.css'

const Home = () => {
  return ( <div className={styles.content}>
    <div className={styles.container}>
              <Image src="/img/banner1.svg" height={500} width={700}/>
              <div className={styles.text}>
                <h1>News App</h1>
                <h2>Get news from all around the world</h2>
              </div>
           </div> 
           <div className={styles.container}>
           <div className={styles.text}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam id accusantium neque quos repudiandae ipsa blanditiis sequi rerum! Ut eveniet iusto sint laborum quisquam iste, facilis nulla rem suscipit?
                Explicabo consequatur dicta, ut facere expedita corporis ducimus eos dolore! Tempore architecto mollitia optio, iusto quam molestias laudantium facere amet ipsum natus consequatur impedit repellat commodi, a quasi reprehenderit incidunt!
                Excepturi quae nostrum omnis nulla. Accusantium dolorum quia sapiente sed quod corporis alias hic reprehenderit dignissimos nisi! Explicabo, harum praesentium expedita, placeat beatae qui, consequuntur exercitationem suscipit repellendus labore nihil?
                Voluptate iusto expedita corporis nostrum aut, ullam, id facere consequuntur esse consectetur, veniam laudantium sunt soluta ea quis aliquam. Omnis in aliquid repellat natus quia praesentium, saepe assumenda quasi ipsum.
                Exercitationem at veniam, accusamus adipisci, ut aliquam odit aliquid tempore laborum quis voluptatum eaque corrupti distinctio, necessitatibus harum optio dolor dolore perspiciatis? Ducimus similique eius velit quaerat, alias ex aliquam?
                Distinctio, cum velit expedita pariatur consequatur perspiciatis repellat dolorum maxime optio cumque aut nostrum, inventore officiis at. Sint iusto eius necessitatibus est debitis? Quam aspernatur asperiores, ab adipisci dolorem temporibus.
                Velit dolorum numquam quia itaque ut sed, tempora sequi dignissimos non corporis quod quos exercitationem nesciunt quibusdam commodi voluptate consequatur nobis assumenda, deserunt fugit molestiae aut perspiciatis reiciendis sit? Nam!</p>
              </div>
              <Image src="/img/banner2.svg" height={500} width={700}/>
             
           </div> 
  </div>);
}
 
export default Home;