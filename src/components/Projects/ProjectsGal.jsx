import { Container, Text,Flex ,Grid} from "@mantine/core"
import home from '../../assets/css/home.module.css'
import ndbImage from '../../assets/images/ndb.png'
import bb from '../../assets/images/bugBounty.png'
import lb from '../../assets/images/book.jpg'
import my from '../../assets/images/my.png'
import apex from '../../assets/images/ApexSolution.png'
// import frozen from '../../assets/images/frozen.jpg'
// import taxi from '../../assets/images/taxi.jpg'
// import zoom from '../../assets/images/zoom.jpg'
// import classes from './Demo.module.css';
// import TiltedCard from "../FramerMotion/TiltedCard"
// import { useRef } from 'react';
// import Autoplay from 'embla-carousel-autoplay';
// import { Carousel } from "@mantine/carousel"
import { useTranslation } from "react-i18next"
import { useMediaQuery } from "@mantine/hooks"
import CardProject from "./CardProject"
const ProjectsGal = ({active}) => {
    const {t,i18n} = useTranslation()
    // const autoplay = useRef(Autoplay({ delay: 4000 }));
    const isLargeScreen = useMediaQuery('(min-width: 767px)');
    // const scaleValue = isLargeScreen ? 1.3 : 1;
    const defaultItems = [
          
        // {
        //   id:1,
        //     image: ndbImage,
        //     text: 'National Diabetes Program',
            
        //     info: t('A project that aims to manage the National Diabetes Program, ensure the availability and follow-up of drug doses, and achieve effective communication between health centers and patients.'),
        //     url: 'https://national-diabetes-program-tgvh.vercel.app/',
        //     state: t('Developed'),
        //     lang: 'React • JS • CSS • Redux • Mantine-UI',
            
        //   },
        //   {
        //     id:2,
        //     image: bb,
        //     text: 'BUG BOUNTY SYRIA',
        //     info: t('A site for discovering security vulnerabilities, which forms the link between the company and the security researcher who will search for the problem and attach the vulnerability report and obtain awards'),
        //     url: 'https://mustafa-ki-o.github.io/Bug_Bounty_Syria/',
        //     state: t('Developed'),
        //     lang: 'React • JS • CSS • Mantine-UI'
        //   },
        //   {
        //     id:3,
        //     image: apex,
        //     text: 'Apex Solutions',
        //     info: t('A startup initiative founded to deliver modern web solutions. This project serves as our core platform for client engagement and showcasing our technical capabilities.'),
        //     url: 'https://apexsolutions.team',
        //     state: t('Developed'), 
        //     lang: 'React • Chakra UI • TS • Framer Motion'
        //   },
        //     {
        //        id:5,
        //     image:my,
        //     text:'My Portoflio',
        //     info: t("This is my personal website that provides an overview of my experiences and works."),
        //     url:'https://moustafa-hasan.vercel.app/',
        //     state: t('Developed'),
        //     lang : 'React • JS • CSS • FramerMotion • Mantine-UI '
        //   },
        //         {
        //            id:4,
        //     image: lb,
        //     text: 'ReadingHour',
        //     info: t('A project that simulates a library that includes many types of books where the customer can request or book the book and see the history of reservations'),
        //     url: 'https://mustafa-ki-o.github.io/libraryProject/',
        //     state: t('Developed'),
        //     lang: 'React • JS • Bootstrap • Material-UI • Redux'
        //   },
          // https://mustafa-ki-o.github.io/kasperT/
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
    id: 1,
    image: ndbImage,
    text: 'National Diabetes Program',
    problem: t('Healthcare providers struggled with manual tracking of diabetes patients, leading to inconsistent drug dosage distribution and fragmented communication'),
    goal: t('To digitalize the national diabetes management infrastructure to ensure that every patient receives the correct life-saving medication on time'),
    solution: t('Developed a centralized healthcare management system that automates dose scheduling and inventory alerts, creating a synchronized data flow between centers and patients'),
    url: 'https://national-diabetes-program-y2ca.vercel.app/',
    state: t('Developed'),
    lang: 'React.js • Redux • Mantine-UI • PWA • CSS ',
  },
  {
    id: 2,
    image: bb,
    text: 'BUG BOUNTY SYRIA',
    problem: t('Organizations lack formal channels for ethical hackers to report vulnerabilities, while researchers lack a secure way to disclose bugs without legal risks'),
    goal: t('To bridge the gap between corporations and the cybersecurity community, fostering a proactive security culture through crowdsourced research'),
    solution: t('Built a specialized platform that acts as a secure intermediary, providing structured reporting for researchers and a management dashboard for companies to reward disclosures'),
    url: 'https://mustafa-ki-o.github.io/Bug_Bounty_Syria/',
    state: t('Developed'),
    lang: 'React.js • Mantine-UI • CSS '
  },
  {
    id: 3,
    image: apex,
    text: 'Apex Solutions',
    problem: t('Small businesses often struggle to establish a high-end digital presence that matches global standards using modern web technologies'),
    goal: t('To create a flagship digital headquarters for a technical agency that demonstrates cutting-edge development capabilities and high-performance standards'),
    solution: t('Designed a sophisticated corporate platform with fluid animations and a modern stack, serving as a live demonstration of the agency’s ability to deliver premium solutions'),
    url: 'https://apexsolutions.team',
    state: t('Developed'), 
    lang: 'React.js • Chakra UI • Framer Motion • TS'
  },
  {
    id: 5,
    image: my,
    text: 'My Portfolio',
    problem: t('In a competitive tech market, a static CV is often insufficient to demonstrate a developer’s true range of skills and interactive design capabilities.'),
    goal: t('To build a high-performance personal brand hub that effectively communicates professional growth, technical expertise, and project history.'),
    solution: t('Created a responsive, interactive portfolio utilizing advanced motion libraries and custom-themed components to reflect a unique professional identity.'),
    url: 'https://mustafahasan.site/',
    state: t('Developed'),
    lang: 'React.js •  Framer Motion • Mantine-UI • CSS '
  },
  {
    id: 4,
    image: lb,
    text: 'ReadingHour',
    problem: t('Traditional library systems are often cumbersome, making it difficult for users to search for titles, check availability, or track reservation history'),
    goal: t('To modernize the library experience by providing a user-centric digital simulation that makes book discovery and reservation simple and fast'),
    solution: t('Developed a comprehensive library ecosystem where users can browse diverse categories, manage virtual reservations, and access a detailed activity history in real-time'),
    url: 'https://mustafa-ki-o.github.io/libraryProject/',
    state: t('Developed'),
    lang: 'React.js • Material-UI • Bootstrap • Redux'
  }
];

        
    return(
        <>
        <Container fluid px={40} style={{opacity:active?1:0,transition:'all 1s'}} pos={'relative'} >
            <Flex justify={'flex-start'}  gap={10} align={'center'} mb={'2rem'}>
                <span className={home.span} ></span>
                <Text fz={{base:'1.4rem',md:'1.7vw'}} c={'#08454C'} fw={600} className="title" >{t("My Projects")}</Text>
            </Flex>
           <Grid justify="center" align="center" gutter={'4rem'} pos={'relative'}  w={'100%'}>
            {defaultItems?.map((item,i)=>(
            <Grid.Col key={i} span={{base:12,md:6,sm:6,lg:4}}>
                <CardProject key={item.id} project={item}/>
            </Grid.Col>
            ))}
            
           </Grid>
        </Container>
        </>
    )
}
export default ProjectsGal 

 {/* <Carousel classNames={classes}

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
            </Carousel> */}