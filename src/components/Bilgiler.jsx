import React, { useState } from 'react'
import styled from 'styled-components';
import MiniCard from './MiniCard';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
display:flex;
height:100%;

justify-content:center;

@media only screen and (max-width:512px) {flex-direction:column;};
`;

const Image = styled.img`
height:100%;
`;


const Wrapper = styled.div`
padding:50px;
display:flex;
flex-direction:column;
@media only screen and (max-width:512px) {padding:8px;};
`;

const Title = styled.h1`
text-align:center;
overflow:hidden;
@media only screen and (max-width:512px) {margin-bottom:0px;padding:5px; font-size:15px};
`;


const Desc = styled.p`
font-size: 20px;
margin-top: 10px;
color:black;
text-align:center;
@media only screen and (max-width:512px) {margin-top:0px;padding:5px; font-size:10px};
`;

const CardContainer = styled.div`
display:flex;
justify-content: space-between;
margin-top:20px;
@media only screen and (max-width:512px) {margin-top:8px;padding:8px; font-size:8px};

`;

const Icon = styled.img`
width:20px;
margin-right:10px;
`;


const Bilgiler = () => {

    return (
        <Container>

            <Wrapper>
                <Title id="bilgiler">Besleme Alanları Hakkında</Title>
                <Desc>Şehirlerde, sokak hayvanları için beslenme alanları oluşturulmuş yerler bulunmaktadır. Bu alanlar genellikle parklar, kamu alanları veya hayvanseverler tarafından belirlenmiş noktalarda bulunabilir. Evcil hayvan besleme alanları, sokak hayvanlarının düzenli olarak yiyecek ve suya erişebileceği, aynı zamanda insanlar tarafından da kullanılabilir durumda olan noktalardır.</Desc>
                <CardContainer>
                    <MiniCard />
                </CardContainer>

            </Wrapper>

            <AnimatedShapes />

        </Container>
    )
}

export default Bilgiler