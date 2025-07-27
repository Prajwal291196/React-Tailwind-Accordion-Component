import { useState } from "react";
import {
    Accordion as MuiAccordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Content = ({ index, title, content, isOpen, handleOnClickToggleAccordion }) => {

    // const [openContent, setOpenContent] = useState(false)

    // const handleOnClickToggle =()=>{
    //     setOpenContent(!openContent)
    // }
    return (
        <>
            <MuiAccordion expanded={isOpen} onChange={() => handleOnClickToggleAccordion(index)}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1" fontWeight={600}>{title}</Typography>
                </AccordionSummary>
                {/* <button onClick={() => handleOnClickToggleAccordion(index)} >Expand</button> */}
                {/* <button onClick={() => handleOnClickToggle(index)} >Expand</button> */}
                <AccordionDetails >
                    <Typography variant="body2">
                        {content}
                        {/* {isOpen && <div>{content}</div>} */}
                        {/* {openContent && <div>{content}</div>} */}
                    </Typography>
                </AccordionDetails >
            </MuiAccordion>
        </>
    )
}

export default Content;