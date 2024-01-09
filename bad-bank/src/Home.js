import Card from 'react-bootstrap/Card';
import "./style.css";
import image from "./images/images4.jpg"
import images1 from "./images/images3.jpg"
import images from "./images/bg20.jpg"


import img1 from './images/bg6.jpg';
import img2 from './images/bg16.jpg';
import img3 from './images/bg11.jpg';
import img4 from './images/bg14.jpg';
export default function Home(){
  return(
    <>
    <div className='body'><br/>

    <h1 id="head1">INDIAN OVERSEAS BANK</h1><br/><br/><br/>
    <marquee>
   <div classname="log" speed={1300} delay={5}>
    <img src={img1}  alt="" width="500px" height="300"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src={img2}  alt="" width="500px" height="300"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src={img3}  alt="" width="500px" height="300"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src={img4}  alt="" width="500px" height="300"/>
   </div>
  </marquee><br/><br/><br/><br/>
   </div>
   
  <div className='cards'>
      <h2 id="head3">Welcome To Indian Overseas Bank 🙏</h2> <br/><br/>
  
    <div id="div1">
     
    <Card style={{ width: '18rem' }}>
    <Card.Img  className='img1'variant="top"  src={image}/> 
   
      <Card.Body>
        <Card.Title>SAVINGS</Card.Title>
        <Card.Text>
        Savings is the amount of money left over after spending and other obligations are deducted from earnings.
        This paper deals with the determinants of the saving rate of the private sector of Slovakia. 
        Economic, financial and demographic variables influence savings.
        </Card.Text>
      </Card.Body>
     
    </Card>
    </div >

    <div id="div1">
    <Card style={{ width: '18rem' }}>
      <Card.Img  className='img2' variant="top" src={images1}/>
      <Card.Body>
        <Card.Title>ATM CARD APPLICATION</Card.Title>
        <Card.Text>
        Technology has changed the lives of human beings to a great extent. It has impacted almost every aspect of our lives.
        This article on writing an application for an ATM card will help you learn the format of the letter.
        You can also go through the sample letters for a better understanding.
        </Card.Text>
      </Card.Body>
      
    </Card>
    </div>

    
    <div id="div1">
    <Card style={{ width: '18rem' }}>
      <Card.Img className='img3' variant="top" src={images} />
      <Card.Body>
        <Card.Title>LOAN</Card.Title>
        <Card.Text>
        A loan note is a type of financial instrument; it is a contract for a loan that specifies when the 
        loan must be repaid and usually also the interest payable.
        similar to a promissory note but the differences can be significant in terms of consequences, especially tax consequences.
    
        </Card.Text>
      </Card.Body>
     
    </Card>
    </div>
    </div>
    </>
  );
}

