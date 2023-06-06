import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useRef, useState } from 'react'
import Confetti from "react-confetti";
import { styled } from 'styled-components';

const Congratulation = () => {
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const confetiRef = useRef(null);
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  
    useEffect(() => {
      setHeight(confetiRef.current.clientHeight);
      setWidth(confetiRef.current.clientWidth);
    }, []);

    let name=user.given_name+""+user.family_name
  
    return (
        <Wrapper>
        <div className="confetti">
        <div className="confettie-wrap" ref={confetiRef} style={{  backgroundColor: "darkslateblue",padding:"300px"}}>
        <h3>Congratualtions!{name} Your order as been Placed </h3>
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