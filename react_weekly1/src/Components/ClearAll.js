import { Button } from "react-bootstrap";

export default function ClearAll() {
      //clear all button
  const clearStorage =() => localStorage.clear(); 

    return (
        <>
          <Button variant="outline-danger"
          onClick={clearStorage}
          >CLEAR ALL LINKS!!!</Button>{' '}
          
        </>
    )
}