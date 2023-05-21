import styled from 'styled-components';
export const VideoTitle = styled.h1`
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

export const TitleWrap = styled.div`
  display:flex;
  flex-direction:column;
  width: 640px;
  background-color: black;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  margin-bottom: 5px;
  justify-content:space-between;
  flex-wrap:wrap;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  overflow: hidden;
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(124deg) brightness(1000%);
`;

export const OwnerSubCount = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Brand = styled.span`
  color: #fff;
  font-size: 15px;
`;

export const SubCount = styled.span`
  color: #fff;
  font-size: 10px;
`;

export const SubscribeButton = styled.button`
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

export const Tup = styled.button`
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
export const Tdown = styled.button`
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
export const Owner = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`;
export const ShareButton = styled.button`
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
export const SocialInteraction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Download = styled.button`
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
export const ThreeDot = styled.div`
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
export const Dot = styled.div`
  width:4px;
  height:4px;
  border-radius:50px;
  background-color:white;
  
`;
export const MoreInfo = styled.div`
  display:flex;
  flex-direction:column;
  background-color:  rgba(96, 96, 96, 0.5);
  border-radius:5px;
  margin:5px;
  padding:5px;
`;
export const ViewsTime = styled.p`
  margin-top:0;
  margin-bottom:5px;
  color:white;
  font-size:11px;
`;
export const Description = styled.p`
  margin-top:0;
  margin-bottom:5px;
  color:white;
  font-size:11px;
`;