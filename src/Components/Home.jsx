
import Bmi from '../Components/Bmi';
import '../Assets/css/Home.css';
import gym from '../Assets/gym-icon.png';
import balance from '../Assets/balance.webp';
import healthy from '../Assets/healthy.webp';
import blog1 from '../Assets/blog1.jpeg';
import blog2 from '../Assets/blog2.webp';
import location from '../Assets/location.png';
import contact from '../Assets/contact.jpg';
import email from '../Assets/email.png';
import '../Assets/css/footer.css';
import '../Assets/css/nav.css';
import facebook from '../Assets/facebook.png';
import twitter from '../Assets/twitter.png';
import insta from '../Assets/insta.png';

import backgroundImage from '../Assets/home.webp';
// import MembershipPlans from './Membership';
import NewsletterForm from './newsletter';


export default function Home() {
  

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="hero-content">
          <h1>Fit<span className="freak">Freak</span></h1>
          <p>Shape your healthy life</p>
          <p>Get your plan to get the latest scoop right to your inbox</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button className='get-started' type="submit">Get Started</button>
          </form>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h2>Welcome To Fit Freak</h2>
          <p>Don’t limit your challenges. Challenge your limits</p>
          <div className="services">
            <div className="service">
              <img src={gym} alt="Icon 1" />
              <h3>Increase mobility</h3>
              <p>Increase your body's freedom of movement and flexibility.</p>
            </div>
            <div className="service">
              <img src={healthy} alt="Icon 2" />
              <h3>Healthy Daily Life</h3>
              <p>Prioritize healthy choices in diet, activity, and rest for overall wellness.</p>
            </div>
            <div className="service">
              <img src={balance} alt="Icon 3" />
              <h3>Balance Body & Mind</h3>
              <p>Balance nutritious eating, regular exercise, and restful sleep for optimal health</p>
            </div>
          </div>
        </div>
      </section>

      <Bmi />
      {/* <MembershipPlans /> */}
      <NewsletterForm />
      <footer className="footer">
        <div className="footer-section about-us">
          <h3>About Us</h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <div className="social-icons">
            <img style={{ height: '45px' }} src={facebook} alt='facebook'></img>
            <img style={{ height: '42px' }} src={twitter} alt='twitter'></img>
            <img style={{ height: '45px', borderRadius: '22px' }} src={insta} alt='insta'></img>
          </div>
        </div>
        <div className="footer-section recent-blog">
          <h3>Recent Blog</h3>
          <div className="blog-post">
            <img src={blog1} alt="Blog post" />
            <p>Even the all-powerful Pointing has no control about<br />Jul 22, 2024</p>
          </div>
          <div className="blog-post">
            <img src={blog2} alt="Blog post" />
            <p>Even the all-powerful Pointing has no control about<br />Dec 25, 2023</p>
          </div>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <ul>
            <li><img style={{width: '30px',marginRight:'20px'}} src={location} alt='location' /> Coimbatore</li>
            <li><img style={{width: '40px',marginRight:'12px'}} src={contact} alt='contact' /> +91 9585 6604 441</li>
            <li><img style={{width: '27px',marginRight:'22px',marginLeft:'5px'}} src={email} alt='email' /> fitfreak@gmail.com</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
