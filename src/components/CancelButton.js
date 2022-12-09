import React from "react";
import { Button} from "react-bootstrap";
import { useState} from "react";


function CancelButton(){
const [ inputValue, setInputValue ] = useState("Value from onchanges");

const handleCancel = () => {
    setInputValue("");
};
return (
    <>
        <Button type="submit" variant="secondary" onClick={handleCancel}>Cancel</Button>
    </>
    );
}
export default CancelButton