import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I'M <span>MD RAKIBUL ISLAM</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Professional Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p> I am Experienced with HTML, CSS, React.js, JavaScript,Firebase,MongoDb.
 I am passionate about what I do and eager to learn what I am not familiar with. 
I try to be focused while I work on something and don't hesitate to ask for help or guidance from others. </p>
            

            <div className='hero_btn d_flex col_1'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <a href="https://www.facebook.com/profile.php?id=100006231346777"><i class='fab fa-facebook-f'></i></a>
                    
                  </button>
                  <button className='btn_shadow'>
                    <a href="https://www.instagram.com/rakibislam_/"><i class='fab fa-instagram'></i></a>
                    
                  </button>
                  <button className='btn_shadow'>
                    <a href="https://www.linkedin.com/in/md-rakibul-islam-711912238/"><i class='fab fa-linkedin-in'></i></a>
                  </button>
                </div>
              </div>
              
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
