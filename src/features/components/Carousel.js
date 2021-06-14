import React from 'react';
import { Button } from 'antd';
import { Carousel } from 'antd';
import slider1 from '../../assets/images/slider_2.jpg'
import slider2 from '../../assets/images/slider_4.jpg'
import slider3 from '../../assets/images/slider_3.jpg'
const items = [
   {
      key: '1',
      image: slider1,
      title: 'Web and mobile payment built for developers',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
   },
   {
      key: '2',
      image: slider2,
      title: 'Work better together. Schedule meetings',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
   },
   {
      key: '3',
      image: slider3,
      title: 'The best app to increase your productivity',
      content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
   },
]



function Slider() {
   return (

         <Carousel>
            {items.map(item => {
               return (
                  <div key={item.key} >
                     <h3>{item.title}</h3>
                     <p>{item.content}</p>
                     <div className="btnHolder">
                        <Button type="primary" size="large">Learn More</Button>
                        <Button size="large"><i className="fas fa-desktop"></i> Watch a Demo</Button>
                     </div>
                  </div>
               );
            })}
         </Carousel>
   );
}

export default Slider;