import { Flex, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { Outlet } from 'react-router-dom'
import Footer from "../Components/Footer";
import Bg from '../images/background.jpeg'


function Layout() {
    return (
        <Flex
            flexDir={'column'}
            display={'flex'}
            bg={useColorModeValue('white', 'gray.700')}
            backgroundImage={Bg}
            backgroundSize={{ lg: 'cover' }}
            backgroundPosition={'center'}
            backgroundAttachment={'fixed'}
            backgroundRepeat={{ lg: 'no-repeat' }}
        >
            <Navbar />
            <Outlet />
            <Footer />
        </Flex>
    )
}
export default Layout