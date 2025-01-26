import React, { useRef } from 'react'
import "./Testimonials.css"
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

     let slider = useRef();
     let tx = 0;

     function moveForward(){
          // document.querySelector().classList = 
          if(tx > -75){
               tx -= 25;
          }
          slider.current.style.transform = `translateX(${tx}%)`;
     }

     function moveBackward(){
          if(tx < 0){
               tx += 25;
           }
           slider.current.style.transform = `translateX(${tx}%)`;
     }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={moveForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={moveBackward}/>
        <div className="slider">
                <ul ref={slider}>
                        <li>
                                <div className="slide">
                                        <div className="user-info">
                                                <img src={user_1} alt="user1-image" />
                                                <div>
                                                     <h3>Mari Carlson</h3>
                                                     <span>Edusity, USA</span>
                                                </div>
                                        </div>
                                        <p>
                                                Attending Eduro was the best decision I ever made. The faculty is incredibly supportive, and the campus environment is truly inspiring. I felt encouraged to explore my interests and challenged to push beyond my limits.
                                        </p>
                                </div>
                        </li>
                        <li>
                                <div className="slide">
                                        <div className="user-info">
                                                <img src={user_2} alt="user2-image" />
                                                <div>
                                                     <h3>Jake Conard</h3>
                                                     <span>Edusity, USA</span>
                                                </div>
                                        </div>
                                        <p>
                                                 "The opportunities for personal and professional growth at Edusity are unmatched. From hands-on projects to internships, I’ve gained invaluable experience that’s set me up for success. Thanks to edusity.
                                        </p>
                                </div>
                        </li>
                        <li>
                                <div className="slide">
                                        <div className="user-info">
                                                <img src={user_3} alt="user3-image" />
                                                <div>
                                                     <h3>Sara Lofen</h3>
                                                     <span>Edusity, USA</span>
                                                </div>
                                        </div>
                                        <p>
                                        "From excellent facilities to the passionate professors, every aspect of my experience at edusity was surreal. I’ve had access to best technology, and the faculty’s commitment to student success has made all happen.
                                          </p>
                                </div>
                        </li>
                        <li>
                                <div className="slide">
                                        <div className="user-info">
                                                <img src={user_4} alt="user4-image" />
                                                <div>
                                                     <h3>Tim Anderson</h3>
                                                     <span>Edusity, USA</span>
                                                </div>
                                        </div>
                                        <p>
                                                        "I couldn’t have asked for a better university to help me achieve my career goals. The network and resources here are amazing. The alumni network is strong, and the career fairs provide incredible opportunities.
                                          </p>
                                </div>
                        </li>
                </ul>
        </div>
    </div>
  )
}

export default Testimonials
