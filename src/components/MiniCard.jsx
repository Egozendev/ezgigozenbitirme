import React from 'react'
import styled from 'styled-components';
import society from '../img/society.png';
import food from '../img/food.png';
import shelter from '../img/shelter.png';
import clean from '../img/clean.png'

const Container = styled.div`
    width: calc(25% - 40px);
    padding: 10px;
    margin-bottom: 20px;
    display: inline-flex;
    justify-content: space-between;
    height: 200px;
    align-items: center;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 512px) {
        width: calc(50% - 40px); 
        height: auto; 
        padding: 5px; 
        margin-bottom:10px;
`;

const Image = styled.img`
    width: 80%;
    height: auto;
    @media only screen and (max-width: 512px) {
        width: 40%; 
        height: auto; 
        
`;

const Text = styled.span`
    
    text-align: center;
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0;

    @media only screen and (max-width:512px) {font-size:10px;};
`;

const Title = styled.h2`
    font-size: 20px;
    margin-bottom: 3px;
    text-align: center;
    @media only screen and (max-width:512px) {font-size:14px;};
`;

const MiniCard = () => {
    const cards = [
        {
            imageSrc: food,
            title: "Yiyecek ve Su İstasyonları",
            text: "Besleme alanlarında sokak hayvanları için düzenli olarak doldurulan yiyecek ve su kapları bulunur. Bu kaplar, hayvanların ihtiyaç duyduğu temel besinleri sağlar."
        },
        {
            imageSrc: shelter,
            title: "Korunaklı ve Güvenli Alanlar",
            text: "Besleme alanları genellikle sokak hayvanlarının korunaklı ve güvenli hissedebilecekleri yerlerde bulunur. Ağaçların altı, banklar veya açık hava kafeteryaları gibi alanlar sıklıkla tercih edilir."
        },
        {
            imageSrc: clean,
            title: "Düzenli Temizlik",
            text: "Besleme alanları, düzenli olarak temizlenir ve bakımı yapılır. Yiyecek ve su kapları düzenli aralıklarla temizlenir ve değiştirilir."
        },
        {
            imageSrc: society,
            title: "Toplumun Katılımı",
            text: "Birçok besleme alanı, hayvanseverler veya yerel topluluklar tarafından işletilir ve bakımı yapılır. Toplumun katılımı, bu alanların sürekli olarak desteklenmesini ve geliştirilmesini sağlar."
        }
    ];

    return (
        <div>
            {cards.map((card, index) => (
                <Container key={index}>
                    <Image src={card.imageSrc} />
                    <Text>
                        <Title>{card.title}</Title>
                        <p>{card.text}</p>
                    </Text>
                </Container>
            ))}
        </div>
    );
}

export default MiniCard;
