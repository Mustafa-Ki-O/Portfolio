import { Button, Grid, Textarea, TextInput } from "@mantine/core";
import Circle from "../Portfolio/Circle";
import { useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from 'emailjs-com';


const ContactForm = () => {
  const theme = useMantineTheme();
  const [active, setActive] = useState(false);
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading ,setLoading] = useState(false);

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userId = import.meta.env.VITE_EMAILJS_USER_ID;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name !=='' && email !== '' && message !== ''){

      const templateParams = {
      name: name,     
      email: email,   
      message: message 
    };

    try {
      
      setLoading(true);
      // console.log(loading)
      emailjs.send(
      serviceId,
      templateId, 
      templateParams,    
      userId      
    ).then((response) => {
       setLoading(false)
      setName('');
      setEmail('');
      setMessage('');
      window.alert(' تم إرسال الرسالة بنجاح!, سيتم التوصل معكم قريبا');
      // console.log('تم إرسال البريد الإلكتروني بنجاح:', response);

     
    })
      
    } catch (error) {
      setLoading(false)
      // console.log(error)
      window.alert('فشل في إرسال الرسالة.'); 
      // console.error('حدث خطأ في إرسال البريد الإلكتروني:', error);
      
    }
    
    

    }else{
      window.alert('You should complete all fields in the form !')
    }

    
    
  };


  return (
    <>
    <form onSubmit={handleSubmit}>
       <Grid gutter={'2rem'} >
        <Grid.Col span={12}>
          <TextInput
            label={t('Name')}
            w={'100%'}
            radius={'md'}
            variant="default"
            size="lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('Input your name')}
            labelProps={{ style: { textAlign: 'start', width: '100%', marginLeft: 5, letterSpacing: 2 } }}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            label={t('Email')}
            type="email"
            w={'100%'}
            size="lg"
            radius={'md'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="default"
            placeholder={t('Input your email')}
            labelProps={{ style: { textAlign: 'start', width: '100%', marginLeft: 5, letterSpacing: 2 } }}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Textarea
            label={t('Description')}
            w={'100%'}
            radius={'md'}
            size="xl"
            variant="default"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t('Input your message')}
            labelProps={{ style: { textAlign: 'start', width: '100%', marginLeft: 5, letterSpacing: 2 } }}
          />
        </Grid.Col>
        <Grid.Col>
          <Button 
            loading={loading}
            loaderProps={{ type: 'dots' }}
            pos={'relative'} 
            radius={'md'} 
            fullWidth 
            variant={!active ? 'filled' : 'outline'} 
            color={'#16aabb'} 
            size="xl"
            type={'submit'}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onTouchStart={() => setActive(true)}
            onTouchEnd={() => setActive(false)}
          >
            {t('SEND')}
            <Circle
              w={1}
              color1={active ? '#16aabb' : '#fff'}
              color2={active ? '#16aabb' : '#fff'}
              degree='145deg'
              top='39%'
              right='13%'
              translateX={4}
              translateY={0}
              className="mini1"
              duration='4s'
            />
            <Circle
              w={0.6}
              color1={active ? '#16aabb' : '#fff'}
              color2={active ? '#16aabb' : '#fff'}
              degree='145deg'
              top='19%'
              right='63%'
              translateX={-8}
              translateY={14}
              className="mini2"
              duration='6s'
            />
            <Circle
              w={0.5}
              color1={active ? '#16aabb' : '#fff'}
              color2={active ? '#16aabb' : '#fff'}
              degree='145deg'
              top='6%'
              right='56%'
              translateX={-2}
              translateY={4}
              className="mini3"
              duration='9s'
            />
          </Button>
        </Grid.Col>
      </Grid>

    </form>
     
    </>
  );
};

export default ContactForm;