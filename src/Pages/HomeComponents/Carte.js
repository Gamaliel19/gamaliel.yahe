import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import MobileCarte from './MobileCarte';
import DesktopCarte from './DesktopCarte';


export default function Carte() {

    return (
        <Box id='apropos'>
            <MobileCarte />
            <DesktopCarte/>
        </Box>
    )
}
