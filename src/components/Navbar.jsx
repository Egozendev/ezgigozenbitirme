import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';


const Container = styled.div`
height: 40px;
`;
const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
align-items:center;
justify-content: space-between;
background-color:#7dacbc;
height: 100px;
`;

const Left = styled.div`
width:60%;
display:flex;
align-items:center;
justify-content:space-between;
`;

const Logo = styled.h1`
font-weight: bold;
font-size: 50px;
color: navy;
text-decoration:underline cadetblue;
display:flex;
align-items:center;
justify-content:space-between;
@media only screen and (max-width:512px) {font-size:30px;}
`;
const LogoImage = styled.img`
width: 100px;
height: auto;
margin-right: 10px;
`;

const Menu = styled.ul`
display:flex;
list-style:none;
@media only screen and (max-width:512px) {display:none;}
`;
const MenuItem = styled.li`
margin-right:30px;
font-size:20 px;
font-weight: bold;
color: black;
cursor: pointer;
`;


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left><Logo>

                    <LogoImage src="./src/img/patilogo.png" alt="" />
                    Pati Dost</Logo>
                    <Menu>
                        <MenuItem >
                            <Link to="home" smooth={true} duration={500}>
                                Hedef
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="besleme" smooth={true} duration={500}>
                                Besleme Alanları
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="bilgiler" smooth={true} duration={500}>
                                Bilgiler
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="iletisim" smooth={true} duration={500}>
                                İletişim
                            </Link>
                        </MenuItem>
                    </Menu>
                </Left>

            </Wrapper>

        </Container>
    )
}

export default Navbar