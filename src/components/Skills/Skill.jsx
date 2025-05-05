import { Container, Title,Text,Flex ,Grid} from "@mantine/core"
import SkillCard from "./SkillCard"
import home from '../../assets/css/home.module.css'
import html from '../../assets/vectors/Html.svg'
import css from '../../assets/vectors/CSS.svg'
import js from '../../assets/vectors/JS.svg'
import ts from '../../assets/vectors/TS.svg'
import git from '../../assets/vectors/Git.svg'
import c from '../../assets/vectors/C++.svg'
import java from '../../assets/vectors/Java.svg'
import py from '../../assets/vectors/Python.svg'
import raect from '../../assets/vectors/React.svg'
import bs from '../../assets/vectors/Bootstrap.svg'
import mui from '../../assets/vectors/MUI.svg'
import mantine from '../../assets/vectors/MANTINE.svg'
import vite from '../../assets/vectors/VITE.svg'
import { useState,useEffect } from "react"
import { useTranslation } from "react-i18next"
const Skill = ({isScrolled}) => {
const {t,i18n} = useTranslation()
    const[show,setShow] = useState(false);

    const skills =[
        {name:'HTML',image:html},
        {name:'CSS',image:css},
        {name:'JS',image:js},     
        {name:'TS',image:ts},
        {name:'GIT',image:git}, 
        {name:'VITE',image:vite},
        {name:'React',image:raect},
        {name:'MANTINE',image:mantine},      
        {name:'MUI',image:mui},
        {name:'BOOTSTRAP',image:bs},
        {name:'PYTHON',image:py},
        {name:'JAVA',image:java},      
        {name:'C++',image:c},
       
    ];

        useEffect(()=>{
            setTimeout(()=>{
                if(isScrolled==true){
                    setShow(true);
                }
            },700)
        },[isScrolled])
    return(
        <>
        <Container fluid px={40} className={`${home.fade} ${show? home.visibleFromL:''}`}>
            <Flex justify={'flex-start'}  gap={10} align={'center'} mb={'6rem'}>
                <span className={home.span} ></span>
                <Text fz={{base:'1.4rem',md:'1.7vw'}} c={'#08454C'} fw={600} className="title">{t("My Skills")}</Text>
            </Flex> 
            <Grid w={'100%'} gutter={'5rem'}  justify="center" > 
            {skills.map((skill,index)=>(             
                <SkillCard key={index} name={skill.name} image={skill.image} />    
            ))}
            </Grid>
        </Container>
        </>
    )
}
export default Skill