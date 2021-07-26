import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(45deg, #733BC3 30%, #C64156 90%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`; 

const Title = styled.h1`
  color: #fff;
  font-family: 'Nunito';
  padding-bottom: 15px;
`;

const SubTitle = styled.p`
  color: #fff;
  font-family: 'Nunito';
  font-size: 18px;
  text-align: center;
  padding-bottom: 15px;
`;

const PrivacyPolicy = () => {
  return (
    <Container>
      <Title>MICard Privacy Policy</Title>
      <SubTitle> This advertising service follows a third-party "ad network technology", so the ads and links that appear on the application are sent directly to other web pages belonging to these advertisers. Therefore, it is possible that these advertising networks automatically obtain the IP address and when this happens, it may happen. The use of other data such as (cookies, JavaScript, or web beacons) may be used by third-party advertising networks to measure the effectiveness of their advertisements and / or to personalize the advertising content that you see.</SubTitle>
      <SubTitle>MICard has no intention of obtaining this data that is used by third-party companies.</SubTitle>
      <SubTitle>MICard does require camera access for taking or uploading profile pictures.</SubTitle>
      <SubTitle>You should read the privacy policy of every site that you visit through these ads to get more detailed information about their practices, as well as for instructions on how to get out of some practices.</SubTitle>             
      <SubTitle> 
        If you need more information or have any questions about the privacy policy not included in this document, please feel free to contact us at info@micard.app
      </SubTitle>
    </Container>
  )
}

export default PrivacyPolicy
