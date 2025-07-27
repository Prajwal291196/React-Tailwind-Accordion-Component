import React, { useState } from 'react'
import Content from './content'
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Accordion = ({ items }) => {
    const [isOpen, setIsOpen] = useState(null)

    const handleOnClickToggleAccordion = (clickedIndex) => {
        console.log(clickedIndex)
        setIsOpen(prev => prev === clickedIndex ? null : clickedIndex)
    }


    return (
        <>
        <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
            {items.map((item, index) =>
                <MuiAccordion key={index}>
                    <Content index={index} title={item.title} content={item.content} isOpen={isOpen === index} handleOnClickToggleAccordion={handleOnClickToggleAccordion} />
                </MuiAccordion>
            )}
</div>
        </>
    )
}

export default Accordion
