import React from 'react'
import styled from 'styled-components'
import catdog from '../img/catdog.png'
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
height: calc(100vh-40px);
display:flex;
padding-top:50px;

@media only screen and (max-width:512px) {flex-direction:column;}
`;
const Left = styled.div`
width:60%;
display:flex;
flex-direction: column;
align-items: center;
justify-content:center;

@media only screen and (max-width:512px) {width:100%; height:100%;}
`;

const Title = styled.h1`
width:60%;
font - size: 50px;

@media only screen and (max-width:512px) {width:100%; font-size:20px;};
`;

const Desc = styled.p`
width:60%;
font-size:20px;
margin-top:2px;

@media only screen and (max-width:512px) {width:100%; font-size:15px};
`;

const Right = styled.div`
width:40%;
@media only screen and (max-width:512px) {display:none;}
`;

const Image = styled.img`
width:100%;

`;

const Intro = () => {
    return (
        <Container>
            <Left>
                <Title id='home'>Tüylü dostlarımız için beslenme noktaları!</Title>
                <Desc>Tüylü dostlarımızın beslenme ihtiyaçlarına dair doğru bilgiye sahip olmak, onların sağlığı ve mutluluğu için hayati önem taşır. Evcil hayvanlar için beslenme, onların fiziksel ve duygusal iyiliği için kritik bir faktördür ve bu konuda bilinçli olmak, onların yaşam kalitesini artırır. Bu yüzden, sokak hayvanlarına destek olmak ve onların refahını artırmak için besleme alanları çok önemlidir.</Desc>
                <br />
                <Desc>Evcil hayvan besleme alanları, toplumun hayvan dostu bir yaklaşımını yansıtmanın yanı sıra, sokak hayvanlarının beslenme ihtiyaçlarını karşılamak için kritik bir rol oynar. Bu alanlar, sokak hayvanlarının sağlıklı ve dengeli bir şekilde beslenmelerini sağlar ve onlara destek olur. Ayrıca, insanlar için de bu alanlar, pati dostlarımızla vakit geçirmek ve onlarla etkileşimde bulunmak için harika bir fırsattır.</Desc>
                <br />
                <Desc>Eğer evinize en yakın besleme alanını görmek ve pati dostlarınızla vakit geçirmek istiyorsanız, haritamıza göz atabilirsiniz. Bu sayede, hem sokak hayvanlarına destek olabilir hem de onlarla güzel vakit geçirebilirsiniz. Unutmayın, tüylü dostlarımızın sağlığı ve mutluluğu hepimizin sorumluluğundadır.</Desc>

            </Left>
            <Right><Image src={catdog} /></Right>
            <AnimatedShapes />
        </Container>
    )
}

export default Intro