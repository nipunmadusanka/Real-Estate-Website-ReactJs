import React from 'react';
import { 
    Accordion,
    AccordionItem,
    AccordionItemPanel,
    AccordionItemButton,
    AccordionItemState,
    AccordionItemHeading
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import data from '../../utils/accordion'

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-contanier">
        <div className="v-left">
          <div className="image-continer">
            <img src="./value.png" alt="" />
          </div>
        </div>

        <div className="flexColStart v-right">
          <span className="orangeText">Our Values</span>
          <span className="primaryText">Value We Give to Your</span>
          <span className="secondaryText">
            we always to help by proving the best services for you.
            <br/>
            we believe a good blace to live can make your life better.
          </span>

          <Accordion
          className='accordion'
          allowMultipleExpanded={false}
          preExpanded={0}>
            {data.map((item, i) =>{
              return (
                <AccordionItem className='accordionItem' key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="flexCenter icon">{item.icon}</div>
                      span.
                    </AccordionItemButton>
                  </AccordionItemHeading>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Value