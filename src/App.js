import React from 'react';
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
      return (
        <Wrapper>
          <Hello name="react!" color="red" isSpecial={true}/>  {/* name, color가 props임*/}
          <Hello color="pink"/>
        </Wrapper>
      )
}

export default App;






