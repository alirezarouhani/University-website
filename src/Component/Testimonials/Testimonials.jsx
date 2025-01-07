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
          if(tx > -50){
               tx -= 25;
          }
          slider.current.style.transform = `trans lateX(${tx}%)`;
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
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                 Unde atque corrupti, veniam aspernatur debitis sit 
                                                 distinctio, eum, quo ratione magni numquam quaerat error? Amet, laborum est! Excepturi quam tenetur assumenda.
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
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                 Unde atque corrupti, veniam aspernatur debitis sit 
                                                 distinctio, eum, quo ratione magni numquam quaerat error? Amet, laborum est! Excepturi quam tenetur assumenda.
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
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                 Unde atque corrupti, veniam aspernatur debitis sit 
                                                 distinctio, eum, quo ratione magni numquam quaerat error? Amet, laborum est! Excepturi quam tenetur assumenda.
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
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                 Unde atque corrupti, veniam aspernatur debitis sit 
                                                 distinctio, eum, quo ratione magni numquam quaerat error? Amet, laborum est! Excepturi quam tenetur assumenda.
                                          </p>
                                </div>
                        </li>
                </ul>
        </div>
    </div>
  )
}

export default Testimonials
