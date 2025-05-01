import { Image,Button,Text } from "@mantine/core"
import home from '../assets/css/home.module.css';
import dw from '../assets/vectors/Download.svg';  
import { useTranslation } from "react-i18next";
import cv from '../assets/Files/MoustafaHasan-Cv.docx'
import button from '../assets/css/footer.module.css';
import { useEffect, useState } from "react";
const DownloadFileButton = ({visible4}) => {

    const [visible5,setVisible5] =useState(false);

    const {t,i18n} = useTranslation()
    const downloadFile = async () => {
        const fileUrl = cv; 
        const response = await fetch(fileUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Moustafa-Hasan-CV.docx'; 
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      };

      useEffect(()=>{

        if(visible4){
            setTimeout(()=>{
                setVisible5(true)
            },700)
        }
        
      },[visible4])

    return(

        <>
            <Button pos={'relative'} mt={'10rem'} radius={'md'} variant={'filled'} color={'#08454C'} size="xl" 
                    className={`${home.fadeButton} ${visible4 ? home.visibleButton : ''} `} onClick={downloadFile} >
                        <Text fz={'1.3rem'} c={'#fff'} className={`${visible5 ? home.textShown :home.textHide}`}>
                        {t('Download CV')}
                        </Text>
                        <div className={`${home.circle} ${visible5 ?home.visiblec : ''}`}></div>
                        <Image className={visible4 ? home.download: ''} ml={10} src={dw} w={25}/>
                    </Button>
        </>
    )
}
export default DownloadFileButton