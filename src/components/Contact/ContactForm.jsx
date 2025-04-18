import { Button, Grid, GridCol, Textarea, TextInput } from "@mantine/core";
import Circle from "../Portfolio/Circle";
import { useMantineTheme } from "@mantine/core";
import { useState } from "react";
const ContactForm = () =>{
 const theme = useMantineTheme();
 const [active,setActive] = useState(false)
    return(
        <>
        <Grid gutter={'2rem'}>
            <Grid.Col span={12} >
               <TextInput
               label={'Name'}
               w={'100%'}
               radius={'md'}
               variant="default"
               size="lg"
               placeholder="Input your name"
               labelProps={{ style: { textAlign: 'start', width: '100%', marginLeft:5,letterSpacing:2 } }}
               />
            </Grid.Col>
            <Grid.Col span={12} >
               <TextInput
               label={'Email'}
               type="email"
               w={'100%'}
               size="lg"
               radius={'md'}
               variant="default"
               placeholder="Input your email"
               labelProps={{ style: { textAlign: 'start', width: '100%', marginLeft:5,letterSpacing:2 } }}
               />
            </Grid.Col>
            <Grid.Col span={12} >
               <Textarea
               label={'Description'}
               w={'100%'}
               radius={'md'}
               size="xl"
               variant="default"
               placeholder="Input your message"
               labelProps={{ style: { textAlign: 'start', width: '100%', marginLeft:5,letterSpacing:2 } }}
               />
            </Grid.Col>
            <Grid.Col>
                <Button pos={'relative'} radius={'md'} fullWidth variant={!active?'filled':'outline'} color={'#16aabb'} size="xl" 
                onMouseEnter={()=>setActive(true)} 
                onMouseLeave={()=>setActive(false)} 
                onTouchStart={()=>setActive(true)}
                onTouchEnd={()=>setActive(false)}>
                    SEND
                    <Circle
                     w={1}
                     color1={active?'#16aabb':'#fff'}
                     color2={active?'#16aabb':'#fff'}
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
                     color1={active?'#16aabb':'#fff'}
                     color2={active?'#16aabb':'#fff'}
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
                     color1={active?'#16aabb':'#fff'}
                     color2={active?'#16aabb':'#fff'}
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
        </>
    )
}
export default ContactForm;