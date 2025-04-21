import { Container, Title,Text,Flex ,Grid} from "@mantine/core"
import home from '../../assets/css/home.module.css'
// import RollingGallery from "../FramerMotion/CircularGallery"
import ndb from '../../assets/images/ndb.png'
import bb from '../../assets/images/bugBounty.png'
import lb from '../../assets/images/library.png'
// import CircularGallery from "../FramerMotion/CircularGallery"
import TiltedCard from "../FramerMotion/TiltedCard"
const ProjectsGal = ({active}) => {

    const defaultItems = [
        {image:ndb ,text:'National Diabetes Program', info:'A project that aims to manage the National Diabetes Program ,ensure the availability and follow-up of drug doses, and achieve effective communication between health centers and patients.' , url:'https://mustafa-ki-o.github.io/National_Diabetes_Program/' ,state:'Under development',lang:'React • JS • CSS • Redux • Mantine-UI'},
        {image:lb ,text:'library', info:'A project that simulates a library that includes many types of books where the customer can request or book the book and see the history of reservations' , url:'https://mustafa-ki-o.github.io/libraryProject/' ,state:'Developed',lang:'React • JS • CSS • Bootstrap • Material-UI • Redux'},
        {image:bb ,text:'BUG BOUNTY SYRIA' , info:'A site for discovering security vulnerabilities, which forms the link between the company and the security researcher who will search for the problem and attach the vulnerability report and obtain awards' , url:'https://mustafa-ki-o.github.io/BugBountySyria/' ,state:'Developed',lang:'React • JS • CSS • Mantine-UI'},

]
    return(
        <>
        <Container fluid px={40} style={{opacity:active?1:0,transition:'all 1s'}} >
            <Flex justify={'flex-start'}  gap={10} align={'center'} mb={'4rem'}>
                <span className={home.span} ></span>
                <Text fz={{base:'1.1rem',md:'1.4rem'}} c={'#08454C'} fw={600} >My Projects</Text>
            </Flex> 
            <Grid gutter={'5rem'}>
{defaultItems?.map((item,i)=>(
 <Grid.Col span={{base:12,md:4}}>
    <TiltedCard
    key={i}
    info={item.info}
    url={item.url}
    lang={item.lang}
    state={item.state}
  imageSrc={item.image}
  altText={item.text}
  captionText={item.text}
  containerHeight="18rem"
  containerWidth="18rem"
  imageHeight="17rem"
  imageWidth="17rem"
  rotateAmplitude={15}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">
     {item.text}
    </p>
  }
/>
 </Grid.Col>
))}</Grid>
        </Container>
        </>
    )
}
export default ProjectsGal 