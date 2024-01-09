import {
    Box, Button, Link, Flex, FormControl, FormLabel, Heading,
    Input, Stack, useColorMode, useColorModeValue, Text, Checkbox
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsSun, BsMoonStarsFill } from 'react-icons/bs'
import httpClient from '../../httpClient'


function Login() {
    return (
        <Flex
            justify={'center'}
            align={'center'}
            minHeight={'100vh'}
            p={{ base: "1rem", lg: "4rem" }}
            mx={'auto'}
            bg={useColorModeValue('white', 'gray.700')}
        >
            <Box
                p={4}
                w={{ base: "100%", lg: "50%" }}
                maxWidth={'500px'}
                borderRadius={5}
                textAlign={'center'}
                boxShadow={'lg'}
            >
                <ColorModeToggle />
                <Box p={4}>
                    <LoginHeader />
                    <LoginForm />
                </Box>
            </Box>
        </Flex>
    )
}

export default Login

//Toogle color
function ColorModeToggle() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box textAlign={'right'} py={4}>
            <Button
                bg={'transparent'}
                aria-label="Toggle Color Mode"
                onClick={toggleColorMode}
                _focus={{ boxShadow: 'none' }}>
                {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
            </Button>
        </Box>
    )
}

//l'en-tête de la page d'authentification
const LoginHeader = () => {
    return (
        <Box textAlign={'center'}>
            <Heading>Authentification</Heading>
        </Box>
    )
}
//le formulaire d'authentification
const LoginForm = () => {
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    const logInAdmin = async () => {
        try {
            if (email === "yagalinaf@gmail.com" && password==="admin123") {
                window.location.href = "/admin"
            } else {
                alert("Vous n'êtes pas YAGALI NAFOU Gamaliel.")
            }

        } catch (error) {
            if (error.response.status === 401) {
                alert("La connexion a échouée. Réessayez plus tard!")
            }
        }
    }

    return (
        <Box my={8} textAlign={'left'}>
            <form>
                <FormControl>
                    <FormLabel>Adresse Email</FormLabel>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type='email'
                        placeholder='Entrez votre email svp!'
                    />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Mot de passe</FormLabel>
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        placeholder='Entrez votre mot de passe svp!'
                    />
                </FormControl>
                <Button
                    onClick={() => logInAdmin()}
                    variant={'solid'}
                    colorScheme='blue'
                    borderRadius={5}
                    width={'full'}
                    mt={10}>
                    Connexion
                </Button>

            </form>
        </Box>
    )
}
