import styled from "styled-components";
import Verified from '../source/verified.png'
import Badge from '../source/badge.png'

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
position: relative;
`

export const CardWrapper = styled.div`
width: 350px;
height: 550px;
background-color: #141414;
border-radius: 10px;
box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.5);
position: relative;
`

export const CardBanner = styled.div`
width: 350px;
height: 81px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
position: relative;

&>img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
`

export const CardAvatar = styled.div`
width: 120px;
height: 120px;
border-radius: 50%;
position: absolute;
top: 21px;
left: 115px;
overflow: hidden;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const CardBadge = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
position: absolute;
top: 109px;
right: 107px;
left: 203px;
background-color: #000;
box-shadow: -5px -5px 8px rgba(0,0,0,.5); 
display: flex;
align-items: center;
justify-content: center;
&>span {
    display:block;
    background-image: url("${Badge}");
    background-size: cover;
    height: 21px;
    width: 21px;
}
`

export const CardUsernameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CardUsername = styled.h3`
color: #fff;
font-size: 13px;
text-align: center;
margin-top: 4.5rem;
display:flex;
align-items: center;
&>span {
    display: block;
    width: 9px;
    height: 10.9px;
    background-image: url("${Verified}");
    background-size: cover;
    margin-right: 8px;
}
`

export const CardXpWrapper = styled.div`
    width: 300px;
    height: 42px;
    border-radius: 8px;
    margin: 0 25px;
    background-color: #C4C4C4;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &>p {
        font-size: 8px;
        display: block;
        position: absolute;
        top: -4px;
        left: 17px;
    }
`

export const CardXpLevelBar = styled.div`
    background-color: #221a1a;
    width: 266.9px;
    height: 5px;
    border-radius: 8px;
    display:flex;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0,0,0,.25);
    position: relative;
    &>p {
        font-size: 8px;
        position: absolute;
        bottom: -20px;
        right: 4px;
    }
`

export const CardXpBar = styled.div`
border-radius: 8px;
width: 0%;
height: 3px;
background-color: #f1f1e4;
box-shadow: inset 0px 4px 4px rgba(0,0,0,.25);
transition: width 1s ease-in-out;
`
export const CardUserSkills = styled.div`
margin: 21px 25px 0 25px;
width: 300px;
height: 128px;
display: flex;
flex-direction: column;
&>h3 {
    color: #fff;
    font-size: 13px;
}
`

export const CardUserSkillsContainer = styled.div`
    height: 94px;
    padding: 10px;
    background-color: #221a1a;
    border-radius: 8px;
    box-shadow: inset 0px 4px 4px rgba(0,0,0,.25);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    grid-auto-row: minmax(300px, auto)
`

export const SkillItem = styled.div`
border: 1px solid #fff;
display: flex;
align-items: center;
justify-content: center;
min-width: 89px;
height: 21px;
color: #fff;
font-size: 8px;
font-weight: 200;
&>p {
    text-transform: uppercase;
    text-align: center;
}
`

export const CardUserSoftware = styled.div`
width: 300px;
height: 128px;
margin: 21px 25px 0 25px; 
&>h3 {
    color: #fff;
    font-size: 13px;

}
`

export const CardUserSoftwareContainer = styled.div`
    height: 94px;
    background-color: #221a1a;
    border-radius: 8px;
    box-shadow: inset 0px 4px 4px rgba(0,0,0,.25);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 5px;
    grid-auto-row: minmax(300px, auto)
`

export const SoftwareItem = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 40px;
height: 40px;
margin: 5px;
`