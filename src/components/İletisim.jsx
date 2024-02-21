import React from 'react'
import styled from 'styled-components';
import Map from '../img/map.png'
import Phone from '../img/phone.png'
import mail from '../img/mail.png'

const Container = styled.div`
height:90%;
background:url ();
`;
const Wrapper = styled.div`
height:100%;
padding:20px;
display:flex;
align-items:center;
justify-content:center;
@media only screen and (max-width:512px) {flex-direction:column;}
`;
const FormContainer = styled.div`
width:50%;
@media only screen and (max-width:512px) {width:100%;}
`;

const Title = styled.h1`
margin:50px;
margin-top:0;
@media only screen and (max-width:512px) {margin:10px;}

`;

const Form = styled.form`
height:250px;
display:flex;
align-items:center;
justify-content:center;
@media only screen and (max-width:512px) {flex-direction:column;}
`;

const LeftForm = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:space-between;
margin-right:20px;
@media only screen and (max-width:512px) {height:50%; margin-right:0;}
`;
const RightForm = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:space-between;
@media only screen and (max-width:512px) {width:50%;}
`;

const Input = styled.input`
width:200px;
padding:20px;
@media only screen and (max-width:512px) {padding:5px;}
`;
const TextArea = styled.textarea`
width:200px;
height:60%;
padding:20px;
@media only screen and (max-width:512px) {padding:5px; margin-top:15px;}
`;

const Button = styled.button`
border:none;
padding:15px;
background-color:darkblue;
color:white;
font-size:20px;
border-radius:10px;
margin-top:20px;
cursor:pointer;
@media only screen and (max-width:512px) {padding:5px; font-size:10px;}
`;

const AddressContainer = styled.div`
width:50%;
display:flex;
flex-direction: column;
align-items:center;
@media only screen and (max-width:512px) {width:100%;margin-top:15px;}
`;

const AddressItem = styled.div`
display:flex;
align-items: center;
margin-bottom:50px;
@media only screen and (max-width:512px) {margin-bottom:10px;}
`;

const Icon = styled.img`
width:50px;
margin-right:20px;
@media only screen and (max-width:512px) {width:15px;}
`;
const Text = styled.span`
font-size:20px;
margin-right:15px;
@media only screen and (max-width:512px) {font-size:10px;}
`;



const İletisim = () => {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title id="iletisim">Sorularınız için <br /> iletişime geçin</Title>
                    <Form>
                        <LeftForm>
                            <Input placeholder="İsim" />
                            <Input placeholder="Mail adresi" />
                            <Input placeholder="Konu" />

                        </LeftForm>
                        <RightForm>
                            <TextArea placeholder="Soru, istek ve şikayetlerinizi buraya yazabilirsiniz" />
                            <Button>Gönder</Button>

                        </RightForm>
                    </Form>
                </FormContainer>
                <AddressContainer>
                    <AddressItem>
                        <Icon src={Map} />
                        <Text>A Cadde, B Sokak, C Bulvar, Şehir/Ülke </Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src={Phone} />
                        <Text>(111) 222 3344</Text>
                        <Text>(111) 222 4455</Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src={mail} />
                        <Text>contact@fakeemail.com</Text>
                        <Text>sales@fakeemail.com</Text>
                    </AddressItem>


                </AddressContainer>
            </Wrapper>
        </Container>
    )
}

export default İletisim