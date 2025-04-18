import { Button, Grid, GridCol, Textarea, TextInput } from "@mantine/core";

const ContactForm = () =>{

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
                <Button radius={'md'} fullWidth variant="filled" color={'#16aabb'} size="xl">
                    Send
                </Button>
            </Grid.Col>
        </Grid>
        </>
    )
}
export default ContactForm;