import { Container, Title,Text,Flex ,Grid} from "@mantine/core"
import home from '../../assets/css/home.module.css'
import RollingGallery from "../FramerMotion/CircularGallery"
import ndb from '../../assets/images/NDB.png'
import bb from '../../assets/images/bugBounty.png'
import lb from '../../assets/images/library.png'
import CircularGallery from "../FramerMotion/CircularGallery"
const ProjectsGal = () => {

    const IMGS = [
        {image:ndb,text:'National Diabetes Program'},
        {image:lb,text:'library'},
        {image:bb,text:'BUG BOUNTY SYRIA'},
    ];
    return(
        <>
        <Container fluid px={40} >
            <Flex justify={'flex-start'}  gap={10} align={'center'} mb={'6rem'}>
                <span className={home.span} ></span>
                <Text fz={{base:'1.1rem',md:'1.4rem'}} c={'#08454C'} fw={600} >My Projects</Text>
            </Flex> 
            {/* <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery textColor="#16aabb" borderRadius={0.05} />
            </div> */}
        </Container>
        </>
    )
}
export default ProjectsGal 