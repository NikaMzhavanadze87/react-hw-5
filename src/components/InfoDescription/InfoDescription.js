import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faThumbsUp, faThumbsDown, faShare, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { InfoWrapper, LogoWrapper, LogoImage, OwnerSubCount, Brand, SubCount, TitleWrap, VideoTitle, Owner, SubscribeButton, SocialInteraction, Tup, Tdown, ShareButton, Download, ThreeDot, Dot, MoreInfo, ViewsTime, Description } from './InfoDescription.styled';
import logo from '../../img/ign-seeklogo.com.svg';
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
  
  
  