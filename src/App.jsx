import styled, { css } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import BeslemeAlanlari from "./components/BeslemeAlanlari";
import Bilgiler from "./components/Bilgiler";
import İletisim from "./components/İletisim";
import Footer from "./components/Footer";


const Container = styled.div`
height:100vh;
overflow:hidden;
position: relative;

`;
const Shape = css`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
z-index:-1;
`;

const IntoShape = styled.div`
${Shape}
clip-path: polygon(100% 0%, 65% 0%, 45% 100%, 100% 100%);
background-color:#9cd1db;
background-size:cover;
background-position:center;`;

const FeatureShape = styled.div`
${Shape}
clip-path: polygon(0 0, 45% 0%, 33% 100%, 0% 100%);
background-color:pink
`;


const ServiceShape = styled.div`
${Shape}
clip-path: polygon(0 0, 33% 0%, 65% 100%, 0% 100%);
background-color:#f88497;
`;


const App = () => {


  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <BeslemeAlanlari />
        <FeatureShape />
      </Container>
      <Container>
        <Bilgiler />
        <ServiceShape />
      </Container>
      <Container>
        <İletisim />
        <Footer />
      </Container>

    </>
  )
};

export default App;