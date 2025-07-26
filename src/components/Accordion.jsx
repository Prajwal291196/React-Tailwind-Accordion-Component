import React, { useState } from 'react'
import Content from './content'

const Accordion = ({ items }) => {
    const [isOpen, setIsOpen] = useState(null)

    const handleOnClickToggleAccordion = (clickedIndex) => {
        console.log(clickedIndex)
        setIsOpen(prev => prev === clickedIndex ? null : clickedIndex)
    }


    return (
        <>
            {items.map((item, index) =>
                <div key={index}>
                    <Content index={index} title={item.title} content={item.content} isOpen={isOpen === index} handleOnClickToggleAccordion={handleOnClickToggleAccordion} />
                </div>
            )}

        </>
    )
}

export default Accordion
