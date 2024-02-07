// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import {
  IconList,
  RoleText,
  SwipeImg,
  SwipeInfo,
  SwipeLink,
  SwipeTitle,
  TaskList,
} from "./TeamModal.styled";
import vika from "../../assets/images/team/vika@1x.png";
import server from "../../assets/images/team/server@1x.png";
import vitalii from "../../assets/images/team/vitalii@1x.png";
import anastasiia from "../../assets/images/team/anastasiia@1x.png";
import tatiana from "../../assets/images/team/tatiana@1x.png";
import ludmila from "../../assets/images/team/ludmila@1x.png";
import oksana from "../../assets/images/team/oksana@1x.png";
import marina from "../../assets/images/team/marina@1x.png";
import sofiia from "../../assets/images/team/sofiia@1x.png";
import natasha from "../../assets/images/team/natasha@1x.png";
import ostap from "../../assets/images/team/ostap@1x.png";
import Icon from "../Icon/Icon";

const TeamModal = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Pagination]}
      pagination={true}
      effect="flip"
    >
      <div className="swiper">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <SwipeImg src={server} alt="Server Ibraimov" />
            <SwipeInfo>
              <SwipeTitle>Server Ibraimov</SwipeTitle>
              <RoleText>Team Lead Frontend</RoleText>
              <TaskList>
                <li>
                  <p>Routing</p>
                </li>
                <li>
                  <p>Redux</p>
                </li>
                <li>
                  <p>Technical guiding</p>
                </li>
              </TaskList>
              <IconList>
                <li>
                  <SwipeLink href="https://github.com/ServerIbraimovUa">
                    <Icon id="github" className="swipe-icon" />
                  </SwipeLink>
                </li>
                <li>
                  <SwipeLink href="https://www.linkedin.com/in/serveribraimov/">
                    <Icon id="linkedin" className="swipe-icon" />
                  </SwipeLink>
                </li>
              </IconList>
            </SwipeInfo>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <SwipeImg src={vitalii} alt="Vitalii Beiar" />
            <SwipeInfo>
              <SwipeTitle>Vitalii Beiar</SwipeTitle>
              <RoleText>Team Lead Backend</RoleText>
              <TaskList>
                <li>
                  <p>Backend Water + Swagger</p>
                </li>
                <li>
                  <p>ForgotPasswordPage</p>
                </li>
                <li>
                  <p>UpdatePasswordPage</p>
                </li>
              </TaskList>
              <IconList>
                <li>
                  <SwipeLink href="https://github.com/nightven">
                    <Icon id="github" className="swipe-icon" />
                  </SwipeLink>
                </li>
                <li>
                  <SwipeLink href="https://www.linkedin.com/in/vitaliybeyar/">
                    <Icon id="linkedin" className="swipe-icon" />
                  </SwipeLink>
                </li>
              </IconList>
            </SwipeInfo>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <SwipeImg src={vika} alt="Viktoriia Cherkashyna" />
            <SwipeInfo>
              <SwipeTitle>Viktoriia Cherkashyna</SwipeTitle>
              <RoleText>Scrum master</RoleText>
              <TaskList>
                <li>
                  <p>Redux + CSS styles</p>
                </li>
                <li>
                  <p>WaterRatio panel</p>
                </li>
                <li>
                  <p>Team Modal</p>
                </li>
              </TaskList>
              <IconList>
                <li>
                  <SwipeLink href="https://github.com/Viktoriia-Ch08">
                    <Icon id="github" className="swipe-icon" />
                  </SwipeLink>
                </li>
                <li>
                  <SwipeLink href="https://www.linkedin.com/in/viktoriia-cherkashyna/">
                    <Icon id="linkedin" className="swipe-icon" />
                  </SwipeLink>
                </li>
              </IconList>
            </SwipeInfo>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <SwipeImg src={tatiana} alt="Tetiana Dub" />
            <SwipeInfo>
              <SwipeTitle>Tetiana Dub</SwipeTitle>
              <RoleText>Frontend Developer</RoleText>
              <TaskList>
                <li>
                  <p>SignUpPage</p>
                </li>
                <li>
                  <p>SignInPage</p>
                </li>
                <li>
                  <p>Styles for Reset & ForgotPassword Pages</p>
                </li>
              </TaskList>
              <IconList>
                <li>
                  <SwipeLink href="https://github.com/Tasha852209">
                    <Icon id="github" className="swipe-icon" />
                  </SwipeLink>
                </li>
                <li>
                  <SwipeLink href="https://www.linkedin.com/in/tetiana-dub/">
                    <Icon id="linkedin" className="swipe-icon" />
                  </SwipeLink>
                </li>
              </IconList>
            </SwipeInfo>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <SwipeImg src={anastasiia} alt="Anastasiia Diatchuk" />
            <SwipeInfo>
              <SwipeTitle>Anastasiia Diatchuk</SwipeTitle>
              <RoleText>Frontend Developer</RoleText>
              <TaskList>
                <li>
                  <p>WaterConsumptionTracker</p>
                </li>
                <li>
                  <p>WhyDrinkWater</p>
                </li>
              </TaskList>
              <IconList>
                <li>
                  <SwipeLink href="https://github.com/AnastasiiaDia">
                    <Icon id="github" className="swipe-icon" />
                  </SwipeLink>
                </li>
                <li>
                  <SwipeLink href="https://www.linkedin.com/in/anastasiia-diatchuk/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <Icon id="linkedin" className="swipe-icon" />
                  </SwipeLink>
                </li>
              </IconList>
            </SwipeInfo>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <SwipeImg src={ludmila} alt="Liudmyla Horobets" />
            <SwipeInfo>
              <SwipeTitle>Liudmyla Horobets</SwipeTitle>
              <RoleText>Frontend Developer</RoleText>
              <TaskList>
                <li>
                  <p>Setting Modal</p>
                </li>
                <li>
                  <p>LogOut Modal</p>
                </li>
              </TaskList>
              <IconList>
                <li>
                  <SwipeLink href="https://github.com/LiudmylaHorobets">
                    <Icon id="github" className="swipe-icon" />
                  </SwipeLink>
                </li>
                <li>
                  <SwipeLink href="https://www.linkedin.com/in/liudmyla-horobets/">
                    <Icon id="linkedin" className="swipe-icon" />
                  </SwipeLink>
                </li>
              </IconList>
            </SwipeInfo>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <SwipeImg src={oksana} alt="Oksana Tantsiura" />
            <SwipeInfo>
              <SwipeTitle>Oksana Tantsiura</SwipeTitle>
              <RoleText>Frontend Developer</RoleText>
              <TaskList>
                <li>
                  <p>DailyNorma </p>
                </li>
                <li>
                  <p>DailyNorma Modal</p>
                </li>
                <li>
                  <p>CSS styles</p>
                </li>
              </TaskList>
              <IconList>
                <li>
                  <SwipeLink href="https://github.com/Oksana-Tnt">
                    <Icon id="github" className="swipe-icon" />
                  </SwipeLink>
                </li>
                <li>
                  <SwipeLink href="https://www.linkedin.com/in/oksana-tantsiura/">
                    <Icon id="linkedin" className="swipe-icon" />
                  </SwipeLink>
                </li>
              </IconList>
            </SwipeInfo>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <SwipeImg src={marina} alt="Marina Aleksandrova" />
            <SwipeInfo>
              <SwipeTitle>Marina Aleksandrova</SwipeTitle>
              <RoleText>Frontend Developer</RoleText>
              <TaskList>
                <li>
                  <p>Header</p>
                </li>
                <li>
                  <p>UserLogo</p>
                </li>
              </TaskList>
              <IconList>
                <li>
                  <SwipeLink href="https://github.com/hotgorod">
                    <Icon id="github" className="swipe-icon" />
                  </SwipeLink>
                </li>
                <li>
                  <SwipeLink href="https://www.linkedin.com/in/maryna-aleksandrova-91591324/">
                    <Icon id="linkedin" className="swipe-icon" />
                  </SwipeLink>
                </li>
              </IconList>
            </SwipeInfo>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <SwipeImg src={sofiia} alt="Sofiia Karpova" />
            <SwipeInfo>
              <SwipeTitle>Sofiia Karpova</SwipeTitle>
              <RoleText>Backend Developer</RoleText>
              <TaskList>
                <li>
                  <p>Backend User</p>
                </li>
                <li>
                  <p>ForgotPassword & UpdatePassword Page</p>
                </li>
                <li>
                  <p>Tour by page & translation</p>
                </li>
              </TaskList>
              <IconList>
                <li>
                  <SwipeLink href="https://github.com/sofiialives">
                    <Icon id="github" className="swipe-icon" />
                  </SwipeLink>
                </li>
                <li>
                  <SwipeLink href="https://www.linkedin.com/in/sofiiakarpova/">
                    <Icon id="linkedin" className="swipe-icon" />
                  </SwipeLink>
                </li>
              </IconList>
            </SwipeInfo>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <SwipeImg
              src={natasha}
              alt="Natalia Kulibaba
 "
            />
            <SwipeInfo>
              <SwipeTitle>Natalia Kulibaba</SwipeTitle>
              <RoleText>Frontend Developer</RoleText>
              <TaskList>
                <li>
                  <p>TodayList</p>
                </li>
                <li>
                  <p>Add & Edit Modal</p>
                </li>
                <li>
                  <p>Delete Modal</p>
                </li>
              </TaskList>
              <IconList>
                <li>
                  <SwipeLink href="https://github.com/NatashaKul7">
                    <Icon id="github" className="swipe-icon" />
                  </SwipeLink>
                </li>
                <li>
                  <SwipeLink href="https://www.linkedin.com/in/natalia-kulibaba/">
                    <Icon id="linkedin" className="swipe-icon" />
                  </SwipeLink>
                </li>
              </IconList>
            </SwipeInfo>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <SwipeImg src={ostap} alt="Ostap Kryven" />
            <SwipeInfo>
              <SwipeTitle>Ostap Kryven</SwipeTitle>
              <RoleText>Frontend Developer</RoleText>
              <TaskList>
                <li>
                  <p>Calendar</p>
                </li>
                <li>
                  <p>Calendar Modal</p>
                </li>
              </TaskList>
              <IconList>
                <li>
                  <SwipeLink href="https://github.com/Ostap2">
                    <Icon id="github" className="swipe-icon" />
                  </SwipeLink>
                </li>
                <li>
                  <SwipeLink href="https://www.linkedin.com/in/ostap-kryven/">
                    <Icon id="linkedin" className="swipe-icon" />
                  </SwipeLink>
                </li>
              </IconList>
            </SwipeInfo>
          </SwiperSlide>
        </div>
        {/* <!-- If we need pagination --> */}
        <div className="swiper-pagination"></div>

        {/* <!-- If we need navigation buttons --> */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        {/* <!-- If we need scrollbar --> */}
        <div className="swiper-scrollbar"></div>
      </div>
    </Swiper>
  );
};

export default TeamModal;
