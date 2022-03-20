import React, { useState, useEffect } from 'react'
import userData from '../user.json'
import Logo from '../source/logoMin.png'
import Banner from '../source/123test.jpg'
import Blender from '../source/minBlender.png'
import Unity from '../source/minUnity.png'
import Photoshop from '../source/photoshop.png'
import { 
  CardAvatar, 
  CardBadge, 
  CardBanner, 
  CardUsername, 
  CardUsernameContainer, 
  CardUserSkills, 
  CardUserSkillsContainer, 
  CardUserSoftware, 
  CardUserSoftwareContainer, 
  CardWrapper, 
  CardXpBar, 
  CardXpLevelBar, 
  CardXpWrapper, 
  Container, 
  SkillItem, 
  SoftwareItem 
} from './AppStyled';

export default function CardUser() {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)

        async function fetchData() {
        try {
            const response = userData
            const data = response
            setData(data)
        } catch (error) {
            console.error("Bad request", error)
            setError(true)
        } finally {
            setLoading(false);
        }
        }
        fetchData()
    }, [])

    const [hisXp, setXp] = useState()
    const [hisLevel, setLevel] = useState()
  
    useEffect(() => {
        const hisXp = data.map((item) => (item.xp))
        const xpBar = document.getElementById("xp-bar")

        
        for (let i = 0; i < hisXp; i++) {
        xpBar.style.width = `${i + 1}%`
        }
    })

  return (
    <Container>
        {data.map((user, index) => (
            <CardWrapper key={index}>
                <CardBanner>
                    <img src={Banner} alt="banner-user" height="81" width="350" />
                    <CardAvatar>
                        <img src={Logo} height="120" width="120" alt='logo-user'/>
                    </CardAvatar>
                    <CardBadge>
                        <span></span>
                    </CardBadge>
                </CardBanner>
                <CardUsernameContainer>
                    <CardUsername>
                        {user.verified === "true" ? <span></span> : null}
                        {user.username}
                    </CardUsername>
                </CardUsernameContainer>
                <CardXpWrapper>
                    <p>Level : {user.level}</p>
                    <CardXpLevelBar>
                        <CardXpBar id='xp-bar' />
                        <p>{user.xp} xp</p>
                    </CardXpLevelBar>
                </CardXpWrapper>
                {user.skills.map((skill, index) => (
                    <CardUserSkills key={index}>
                        <h3>Compétences :</h3>
                        <CardUserSkillsContainer>
                            <SkillItem>
                                <p>{skill.first}</p>
                            </SkillItem>
                            <SkillItem>
                                <p>{skill.second}</p>
                            </SkillItem>
                            <SkillItem>
                                <p>{skill.third}</p>
                            </SkillItem>
                            <SkillItem>
                                <p>{skill.fourth}</p>
                            </SkillItem>
                            <SkillItem>
                                <p>{skill.fifth}</p>
                            </SkillItem>
                        </CardUserSkillsContainer>
                    </CardUserSkills>
                ))}
                <CardUserSoftware>
                    <h3>Logiciels :</h3>
                        <CardUserSoftwareContainer>
                            <SoftwareItem>
                            <img src={Blender} alt="soft-logo" height="40" width="40"/>
                            </SoftwareItem>
                            <SoftwareItem>
                            <img src={Unity} alt="soft-logo" height="40" width="40"/>
                            </SoftwareItem>
                            <SoftwareItem>
                            <img src={Photoshop} alt="soft-logo" height="40" width="40"/>
                            </SoftwareItem>
                        </CardUserSoftwareContainer>
                </CardUserSoftware>
            </CardWrapper>
        ))}
    </Container>
  )
}
