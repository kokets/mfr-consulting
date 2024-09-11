
import React, { useState , useRef, useEffect} from "react";
import './App.css';
import {send} from 'emailjs-com'
import Modal from 'react-modal';


const App = () =>{
  const [sender_name, set_sender_name] = useState('');
  const [sender_email, set_sender_email] = useState('');
  const [message, set_message] = useState('');
 

  const handleEmail = (e) => {
    set_sender_email(e.target.value);
  }
  const handleName = (e) => {
    set_sender_name(e.target.value)
  }
  const handleMessage = (e) => {
    set_message(e.target.value)
  }
  const sendMail = (e) => {
    e.preventDefault();
    send(
      'service_evc1tjo',
       'template_y35vh6p',
       {sender_name, sender_email, message},
       'hPGzb5OsILqBTB6B0',
    )
    .then((response) => {
      console.log('Message sent succesfully', response.status, response.text)
    })
    .catch((err) => {
      console.log('failed', err)
    })
    set_sender_name('');
    set_sender_email('');
    set_message('');
  }

 
  // useEffect(() => {
  //  const script = document.createElement('script');
  //  script.src = 'dynamic.js';
  //  script.script = true;
  //  document.body.appendChild(script);
  //  return () => {
  //   document.body.removeChild(script);
  //  }   
  // },)
  const [ isMobile, setIsMobile] = useState(false);
 const handleClick = () => setIsMobile(!isMobile);
  return (
    //Header section
     
      <section className='parent-class' >
        <div className="scrollToTop-btn">
           <a href='#home'> <i  className="fas fa-arrow-up"></i></a>
        </div>
        <header>
          <div className='nav-bar'>
              <img className='logo' src={'mfr-consulting-removebg-preview.png'}/>
              {/* <div className='navigation' 
             > */}
                <div  className={isMobile? 'nav-items active':'nav-items'}
                 >
                  {/* <div  className='close-btn'  ></div> */}
                      <a href='#home'>Home</a>
                      <a href='#about'>About</a>
                      <a href='#vision'>Vision & Values</a>
                      <a href='#service'>Services</a>
                      <a href='#contacts'>Contact</a>
                  </div>
              
              <div className='menu' onClick={handleClick} ></div>
        </div>
        
        </header>
        
      <section className='upper-elements flex-center' id='home'>
      {/* <img className='back' src={'mockup2.jpg'}/> */}

        <div className="content">
          <div className='background'>
        
            <h1>MFR CONSULTING</h1>
            {/* <h2>QUALITY GUARANTEED</h2> */}
            <p>MFR CONSULTING is a female black owned HR solutions company 
              {/* founded in July 2019 by <span>Moipone Felicia Raphahlelo </span> */}
              that is uniquely structured to serve clients with their needs
              for specialized professionals in the retail and construction 
              sectors </p>
          </div>
        </div>
        <a href='#about' className='scroll-down'>Scroll-Down<img className='roll-down' src={'scroll-down.png'}/>
        </a>
      </section>
         

      <section className='container'id='about' >
        <div className='header_concept' >
          <h1 className='title1'> ABOUT</h1>
          <h2 className='title2'> ABOUT           
            <img className='icon-img' src={'entrepeneur.png'}/>
            </h2>
        </div>
        
        <div className='description'>
                <p>MFR Consulting services
                  </p> 
                  <div className='offers'>
                    <ul>
                          <li> Updating internal databases with new employee information, including contact details 
                              and employment forms</li>
                          <li> Drafting of policies and procedures  </li>
                          <li> Gathering payroll data like leaves, working hours and bank accounts </li>
                          <li> Screening resumes and application forms </li>
                          <li> Scheduling and confirm interviews with candidates</li>
                          <li> Post, update and remove job ads from job boards, careers pages</li>
                          <li> Preparing HR-related reports as needed (WSP and ATR)</li>
                          <li> Addressing employee queries about benefits (like the number of remaining leave days) </li>
                          <li> Participating in organizing company events and careers days </li>  
                    </ul>       
          </div>
          <h2 className='title'> OBJECTIVE  <img className='icon-img' src={'goal.png'}/></h2>
          <div className='description'>
             <p>We at MRF seek to bridge the unemployment gap by identifying and placing qualified 
                        candidates in various construction and retail related spaces. Therefore, we strive to 
                        associate with only the best and dedicate ourselves to maintaining and sustaining these 
                        relationships by offering services that not only meet but exceed expectations of all the 
                        stakeholders involved</p>
          </div>
        </div>
      </section>

      {/* <section className='container'>
        <div className='header_concept'>
          <h1 className='title1'> OBJECTIVE</h1>
          <h2 className='title2'> OBJECTIVE</h2>
        </div>
          <img className='menu' src={'goal.png'}/>
          <div className='description'>
             <p>We at MRF seek to bridge the unemployment gap by identifying and placing qualified 
                        candidates in various construction and retail related spaces. Therefore, we strive to 
                        associate with only the best and dedicate ourselves to maintaining and sustaining these 
                        relationships by offering services that not only meet but exceed expectations of all the 
                        stakeholders involved</p>
          </div>
      </section> */}

      <section className='container' id='vision'>
        <div className='header_concept'>
          <h1 className='title1' >VISION AND VALUES</h1>
          <h2 className='title2' >VISION AND VALUES       <img className='icon-img' src={'vision_and_values-removebg-preview.png'}/></h2>
        </div>
    
          <div className='description'>
          <ul>
                <li> We want to offer excellent services to our clients guided by Quality, Reliability, 
                    Accountability, and Integrity  </li>
                <li> To be the client`s 1st choice in providing the most efficient workforce services </li>
                <li> We want to contribute extensively to addressing unemployment rate in South Africa and 
                    SADC region  </li>
                    </ul>
          </div>
          <h2 className='title' >TARGET MARKET  <img className='icon-img' src={'target-audience.png'}/></h2>
          <div className= 'description'>
          <ul>
                <li> Clients looking to hire within any sector but with our main clientele being construction 
                    and retail sector </li>
                <li> Clients requiring HR services.  </li>
                <li>  Candidates seeking employment, skills development, service trainee, internship. </li>
                <li>  Candidates who require practicals for their school modules and research studies </li>
                </ul>
          </div>
      </section>
    
  

      
      <section className='container' id='service'>
        <div className='header_concept'>
           <h1 className='title1' >Services</h1>
           <h2 className='title2' >Services  <img className='icon-img' src={'services.png'}/></h2>
          
        </div>
           <div className='description'> 
           <ul>
                 <li> Provide SMMEs and corporate witha all HR solutions</li>
                                    <li> Conducting background checks to ensure the suitable and best candidates </li>
                                    <li> Preparation of professinal CV and Resume for candidates</li>
                                    <li> Conduct interviews and prepare candidates for excellent interviews with potential employers</li>
                                    <li> Provide Leadership and skill development courses to candidates</li>
                                    <li> Forums for companies and candidates on the world of work</li>   
                                  </ul>  
           </div>
      </section>

      <section className='contact' id='contacts'>
        
        <div className='header_concept'>
           <h1 className='title1' >Contact Us</h1>
           <h2 className='title2' >Contact Us</h2>
           {/* <img className='menu' src={'services.png'}/> */}
        </div>
        <div className= 'all-details' >
          {/* <div className= 'contact-details'>
            <div> l<i ></i>moiponefelicia@email.com</div>
            <div><i class="fas fa-phone"></i>+27 79 169 8917 </div>
          </div> */}
          <div className='contact-form'>
        
            <form  onSubmit={sendMail}>
              <div className='Name'>
                  <input type="text" name="sender_name" className='text-box' value={sender_name} onChange={handleName}  required placeholder='Your Name'/>
              </div>
              <div className= 'Email'>
                  <input type="email" name="sender_email" className='text-box' value={sender_email} onChange={handleEmail}  required placeholder= 'Your email ' />
              </div>
              <div className='Messages'>
                <textarea name="message"  rows= '5' value={message} onChange={handleMessage} required placeholder= 'Your Message'  />
              </div>
              <div className= 'Submit'>
                 <button className="send-btn"  type="submit" >Send Email</button>
              </div>
            
            </form>
          </div>
        </div>
      </section>

      <footer>
            <div className="footer-container">
                <img className='logo-footer' src={'mfr-consulting-removebg-preview.png'}/>  
               
            </div>
            {/* <div className='call'> Call us on : 071 234 568 923</div> */}
          <a href="https://wa.me/+27608003736" className="whatsapp_float" target="_blank">   <img className='send-message' src={'tools.gif'}/>  </a>
          <div className="footer-copyright group">
              <p> Copyright 2022 &copy; MFR-CONSULTING</p>
          </div>
      </footer>
     </section>
    
  );
};

export default App;
