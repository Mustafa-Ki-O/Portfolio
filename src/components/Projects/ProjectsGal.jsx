import { Container, Title,Text,Flex ,Grid} from "@mantine/core"
import home from '../../assets/css/home.module.css'
import ndbImage from '../../assets/images/ndb.png'
import bb from '../../assets/images/bugBounty.png'
import lb from '../../assets/images/book.jpg'
import my from '../../assets/images/my.jpg'
import frozen from '../../assets/images/frozen.jpg'
import taxi from '../../assets/images/taxi.jpg'
import zoom from '../../assets/images/zoom.jpg'
import classes from './Demo.module.css';
import TiltedCard from "../FramerMotion/TiltedCard"
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from "@mantine/carousel"
import { useTranslation } from "react-i18next"
import { useMediaQuery } from "@mantine/hooks"
const ProjectsGal = ({active}) => {
    const {t,i18n} = useTranslation()
    const autoplay = useRef(Autoplay({ delay: 4000 }));
    const isLargeScreen = useMediaQuery('(min-width: 767px)');
    const scaleValue = isLargeScreen ? 1.3 : 1;
    const defaultItems = [
        {
            image: ndbImage,
            text: 'National Diabetes Program',
            info: t('A project that aims to manage the National Diabetes Program, ensure the availability and follow-up of drug doses, and achieve effective communication between health centers and patients.'),
            url: 'https://national-diabetes-program-tgvh.vercel.app/',
            state: t('Developed'),
            lang: 'React • JS • CSS • Redux • Mantine-UI'
          },
          {
            image: bb,
            text: 'BUG BOUNTY SYRIA',
            info: t('A site for discovering security vulnerabilities, which forms the link between the company and the security researcher who will search for the problem and attach the vulnerability report and obtain awards'),
            url: 'https://mustafa-ki-o.github.io/Bug_Bounty_Syria/',
            state: t('Developed'),
            lang: 'React • JS • CSS • Mantine-UI'
          },
            {
            image:my,
            text:'My Portoflio',
            info: t("This is my personal website that provides an overview of my experiences and works."),
            url:'https://moustafa-hasan.vercel.app/',
            state: t('Developed'),
            lang : 'React • JS • CSS • FramerMotion • Mantine-UI '
          },
          // {
          //   image:taxi,
          //   text:'CallTaxi',
          //   info: t('An on-demand taxi booking application, allowing users to easily request and track rides in their area.'),
          //   url:'',
          //   state:('Under development'),
          //   lang :'React • TS • CSS • Tailwind • Chakra-UI'
          // },

          // {
          //   image:zoom,
          //   text:'ZoomShop',
          //   info: t('An online e-commerce platform designed to provide users with a seamless and efficient shopping experience.'),
          //   url:'',
          //   state:('Under development'),
          //   lang :'React • TS • CSS • Tailwind • Chakra-UI'
          // },
          // {
          //   image:frozen,
          //   text:'FrozenTime',
          //   info: t('An online store specializing in a variety of delicious frozen desserts, offering convenient ordering and delivery.'),
          //   url:'',
          //   state:('Under development'),
          //   lang :'React • JS • CSS • Tailwind • Mantine-UI'
          // },
          {
            image: lb,
            text: 'ReadingHour',
            info: t('A project that simulates a library that includes many types of books where the customer can request or book the book and see the history of reservations'),
            url: 'https://mustafa-ki-o.github.io/libraryProject/',
            state: t('Developed'),
            lang: 'React • JS • CSS • Bootstrap • Material-UI • Redux'
          },
]
    return(
        <>
        <Container fluid px={40} style={{opacity:active?1:0,transition:'all 1s'}} >
            <Flex justify={'flex-start'}  gap={10} align={'center'} mb={'2rem'}>
                <span className={home.span} ></span>
                <Text fz={{base:'1.4rem',md:'1.7vw'}} c={'#08454C'} fw={600} className="title" >{t("My Projects")}</Text>
            </Flex>
            <Carousel classNames={classes}

            withIndicators plugins={[autoplay.current]}  slideSize={'60%'} w={{base:'100%',md:'100%'}} height={'30rem'} slideGap={'0.7rem'} withControls={false} loop align="center" m={'auto'} style={{cursor:'grab'}} >
            {defaultItems?.map((item,i)=>(
            <Carousel.Slide key={i}  style={{placeContent:'center'}} mb={'6rem'}>
              <TiltedCard
              key={i}
              info={item.info}
              url={item.url}
              lang={item.lang}
              state={item.state}
              imageSrc={item.image}
              altText={item.text}
              captionText={item.text}
              containerHeight="20rem"
              containerWidth="20rem"
              imageHeight={"17rem"}
              imageWidth="17rem"
              rotateAmplitude={15}
              scaleOnHover={scaleValue}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">
                 {item.text}
                </p>
              }
            />
            </Carousel.Slide>
            ))}
            </Carousel>
        </Container>
        </>
    )
}
export default ProjectsGal 