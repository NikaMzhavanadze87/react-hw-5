import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faThumbsUp, faThumbsDown, faShare, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import logo from './img/ign-seeklogo.com.svg';

const VideoTitle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  color: #fff;
  margin-bottom: 5px;
  margin-top: 5px;
  margin-left: 5px;
  font-size: 0.9rem;
`;

const TitleWrap = styled.div`
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  width: 640px;
  background-color: black;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  margin-bottom: 5px;
  justify-content:space-between;
  flex-wrap:wrap;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  overflow: hidden;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(124deg) brightness(1000%);
`;

const OwnerSubCount = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Brand = styled.span`
  color: #fff;
  font-size: 15px;
`;

const SubCount = styled.span`
  color: #fff;
  font-size: 10px;
`;

const SubscribeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
  width: 120px;
  height: 30px;
  font-size: 11px;
  background-color: rgba(96, 96, 96, 0.5);
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(96, 96, 96, 1);
    color: #fff;
  }
`;

const Tup = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    background-color: rgba(96, 96, 96, 0.5);
    color: #fff;
    border: none;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    height: 30px;
    
    &:hover {
        background-color: rgba(96, 96, 96, 1);
        color: #fff;
      }
`;
const Tdown = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-right:5px;
    font-size: 11px;
    background-color: rgba(96, 96, 96, 0.5);
    color: #fff;
    border: none;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    height: 30px;
    &:hover {
        background-color: rgba(96, 96, 96, 1);
        color: #fff;
    }
    &::after {
        content: '';
        position: absolute;
        width: 1px;
        height: 60%;
        background-color: #fff;
        top: 15%;
        right: 28px; 
      }
`;
const Owner = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`;
const ShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 30px;
  margin-right:5px;
  background-color:  rgba(96, 96, 96, 0.5);
  color: #fff;
  font-size: 11px;
  border: none;
  cursor: pointer;
  border-radius: 25px;
  
  &:hover {
    background-color: rgba(96, 96, 96, 1);
    color: #fff;
}
`;
const SocialInteraction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Download = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 30px;
  margin-right:5px;
  background-color:  rgba(96, 96, 96, 0.5);
  color: #fff;
  font-size: 11px;
  border: none;
  cursor: pointer;
  border-radius: 25px;
  
  &:hover {
    background-color: rgba(96, 96, 96, 1);
    color: #fff
}
`;
const ThreeDot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:30px;
  height:30px;
  margin-right:5px;
  border-radius:25px;
  padding:0 5px;
  background-color:  rgba(96, 96, 96, 0.5);
  &:hover {
    background-color: rgba(96, 96, 96, 1);
    color: #fff
}
  > div:nth-child(2) {
    margin-left:5px;
    margin-right:5px;
  }
`;
const Dot = styled.div`
  width:4px;
  height:4px;
  border-radius:50px;
  background-color:white;
  
`;
const MoreInfo = styled.div`
  display:flex;
  flex-direction:column;
  background-color:  rgba(96, 96, 96, 0.5);
  border-radius:5px;
  margin:5px;
  padding:5px;
`;
const ViewsTime = styled.p`
  margin-top:0;
  margin-bottom:5px;
  color:white;
  font-size:11px;
`;
const Description = styled.p`
  margin-top:0;
  margin-bottom:5px;
  color:white;
  font-size:11px;
`;

const InfoDescription = () => {
  const viewCount = 123000;
  const timestamp = moment().subtract(6, 'months').fromNow();
  return (
    <TitleWrap>
      <VideoTitle>
        How Diablo IV Is Bringing Its Power Fantasy Combat to Life
      </VideoTitle>
      <InfoWrapper>
        <Owner>
            <LogoWrapper>
            <LogoImage src={logo} alt="IGN Logo" />
            </LogoWrapper>
            <OwnerSubCount>
            <Brand>IGN</Brand>
            <SubCount>17M subscribers</SubCount>
            </OwnerSubCount>
        
        <SubscribeButton>
          <FontAwesomeIcon icon={faBell} style={{ marginRight: '5px' }} />
          Subscribe
        </SubscribeButton>
        </Owner>
        <SocialInteraction>
          <Tup>
            <FontAwesomeIcon icon={faThumbsUp} style={{ marginRight: '5px' }} />
            2k
          </Tup>
          <Tdown>
            <FontAwesomeIcon icon={faThumbsDown} style={{ marginRight: '5px' }} />
          </Tdown>
        
            <ShareButton>
                <FontAwesomeIcon icon={faShare} style={{ marginRight: '5px' }} />
                Share
            </ShareButton>
            <Download>
                <FontAwesomeIcon icon={faArrowDown} style={{ marginRight: '5px' }} />
                Download
            </Download>
            <ThreeDot>
                <Dot></Dot>
                <Dot></Dot>
                <Dot></Dot>
            </ThreeDot>
        </SocialInteraction>
      </InfoWrapper>
      <MoreInfo> 
        <ViewsTime>
            {viewCount.toLocaleString()} views  {timestamp}
        </ViewsTime>
        <Description>
            Diablo IV's Game Director Joe Shely and Diablo General Manager Rod Fergusson tell us about finding   the right feel and pacing for Diablo IV's weighty combat.Show more
        </Description>
      </MoreInfo>
    </TitleWrap>
  );
};

export default InfoDescription;


