import React from 'react'
import Philosophy from './PhilosophyComponent';
import WhatWeTeach from './WhatWeTeachComponent';
import WhyKungFu from './WhyKungFuComponent';
import Slide from 'react-reveal/Slide'



const HomePage = (props) => {

    return (
<>
      
      <div>
      <Slide left>
        <WhyKungFu />
     </Slide>
     <br/>
      <hr/>
      <br/>
     <Slide right>
        <Philosophy />
      </Slide>
    <br/>
      <hr/>
      <br/>
      <Slide left>
        <WhatWeTeach />
      </Slide>
    </div>
    

    </>
    );
  }
export default HomePage