import Logo from '../source/logoMin.png'
import Banner from '../source/123test.jpg'
import Blender from '../source/minBlender.png'
import Unity from '../source/minUnity.png'
import Photoshop from '../source/photoshop.png'
import { CardAvatar, CardBadge, CardBanner, CardUsername, CardUsernameContainer, CardUserSkills, CardUserSkillsContainer, CardUserSoftware, CardUserSoftwareContainer, CardWrapper, CardXpBar, CardXpLevelBar, CardXpWrapper, Container, SkillItem, SoftwareItem } from './AppStyled';

function App() {
  return (
    <Container>
      <CardWrapper>
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
            <span></span>
            UsernameX51
          </CardUsername>
        </CardUsernameContainer>
        <CardXpWrapper>
          <p>Level : 2</p>
          <CardXpLevelBar>
            <CardXpBar/>
            <p>720 xp</p>
          </CardXpLevelBar>
        </CardXpWrapper>
        <CardUserSkills>
          <h3>Compétences :</h3>
          <CardUserSkillsContainer>
            <SkillItem>
              <p>3D Artist</p>
            </SkillItem>
            <SkillItem>
              <p>Concept Artist</p>
            </SkillItem>
            <SkillItem>
              <p>3D Modeling</p>
            </SkillItem>
            <SkillItem>
              <p>Illustration</p>
            </SkillItem>
            <SkillItem>
              <p>Environment design</p>
            </SkillItem>
          </CardUserSkillsContainer>
        </CardUserSkills>
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
    </Container>
  );
}

export default App;
