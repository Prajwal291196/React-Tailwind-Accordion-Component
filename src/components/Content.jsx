import { useState } from "react";

const Content = ({ index, title, content, isOpen, handleOnClickToggleAccordion }) => {

    // const [openContent, setOpenContent] = useState(false)

    // const handleOnClickToggle =()=>{
    //     setOpenContent(!openContent)
    // }
    return (
        <>
            <div>{title}</div>
            <button onClick={() => handleOnClickToggleAccordion(index)} >Expand</button>
            {/* <button onClick={() => handleOnClickToggle(index)} >Expand</button> */}
            {isOpen && <div>{content}</div>}
            {/* {openContent && <div>{content}</div>} */}

        </>
    )

}

export default Content;