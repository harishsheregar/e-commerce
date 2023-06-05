import React, { useEffect, useRef, useState } from 'react'
import Confetti from "react-confetti";
import { styled } from 'styled-components';

const Congratulation = () => {
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const confetiRef = useRef(null);
  
    useEffect(() => {
      setHeight(confetiRef.current.clientHeight);
      setWidth(confetiRef.current.clientWidth);
    }, []);
  
    return (
        <Wrapper>
        <div className="confetti">
        <div className="confettie-wrap" ref={confetiRef} style={{  backgroundColor: "darkslateblue",padding:"300px"}}>
        <h3>Congratualtions! Your order as been Placed </h3>
          <Confetti numberOfPieces={150} width={width} height={height} />
        </div>
      </div>
      </Wrapper>
    );
}

const Wrapper = styled.section`

.confetti{
    font-family: sans-serif;
    text-align: center;
}
 .confettie-wrap {
    background-color: darkslateblue;
    padding: 200px;
  }
  
  .confettie-wrap h3 {
    margin: 0;
    color: white;
    letter-spacing: 2px;
  }
  
`;

export default Congratulation