import React, { useState } from 'react'
import {
    Box,
    Button,
    Container,
    Flex,
    Input,
    Link,
    SimpleGrid,
    Spacer,
    Stack,
    Text,
    Textarea,
    VisuallyHidden,
    chakra,
    useColorModeValue,
} from '@chakra-ui/react'
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import httpClient from '../httpClient';


const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            bg={'blackAlpha.100'}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as='a'
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: 'blackAlpha.200',
                color: 'blue.200'
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function FooterMobile() {
    const [comment, setComment] = useState({
        email: "",
        comment: ""
    })
    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        setComment({ ...comment, [e.target.name]: e.target.value })
    }

    const commenter = async () => {
        try {
            const resp = await httpClient.post("http://localhost:5000/addCommentaire", { ...comment })
            setComment({
                email: "",
                comment: ""
            })
            window.location.href = '/'
        } catch (error) {
            if (error.response.status === 400) {
                alert("Le commentaire n'a pas été envoyé. Réessayez!")
            }
        }
    }

    return (
        <Box bg={'gray.200'} color={'gray.700'} display={{ base: 'flex', lg: 'none' }}>
            <Container align={'center'} as={Stack} maxW={'6xl'} py={10} >
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                    spacing={8}
                >
                    <Stack align={'center'} justify={'center'}  id='contact'>
                        <Flex direction={'column'}>
                            <Input
                                placeholder='Votre adresse e-mail'
                                value={comment.email}
                                type='text'
                                onChange={(e) => handleChange(e)}
                                name='email'
                                bg={'blackAlpha.100'}
                                border={0}
                                _focus={{
                                    bg: 'whiteAlpha.300'
                                }}
                            />
                            <Flex flexDir={'row'}>
                                <Textarea
                                    mt={2}
                                    placeholder='message...'
                                    value={comment.comment}
                                    onChange={(e) => handleChange(e)}
                                    name='comment'
                                    type='text'
                                />
                                <Button onClick={() => commenter()} ml={2} mt={10} colorScheme='green' borderRadius={5}>Envoyer</Button>
                            </Flex>
                        </Flex>
                    </Stack>

                    <Spacer />
                    <Stack spacing={6}>
                        <Flex >

                            <Link _hover={{ textDecor: "none", textColor: useColorModeValue("teal", 'blue.400') }} fontWeight={'bold'} textColor={useColorModeValue('blue.400', 'teal')} >Yahe </Link>
                            <Text fontSize={'sm'}> ¢ 2023. Tous droits réservés.</Text>

                        </Flex>
                        <Stack direction={'row'} spacing={6}>
                            <SocialButton label="Github" href={"https://github.com/Gamaliel19"}>
                                <FaGithub />
                            </SocialButton>
                            <SocialButton label="LinkedIn" href={"https://www.linkedin.com/in/yagali-nafou-gamaliel-655a00246"}>
                                <FaLinkedin />
                            </SocialButton>
                            <SocialButton label="Facebook" href={"https://www.facebook.com/nafou.gamaliel"}>
                                <FaFacebook />
                            </SocialButton>
                            <SocialButton label="Whatsapp" href={"https://whatsapp.com/dl/code=eQ58AYzTJ1"}>
                                <FaWhatsapp />
                            </SocialButton>
                        </Stack>
                    </Stack>




















                </SimpleGrid>
            </Container>
        </Box>
    )
}


