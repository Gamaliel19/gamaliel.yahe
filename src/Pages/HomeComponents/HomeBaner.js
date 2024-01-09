import React, { useEffect, useState } from 'react'
import Image from '../../images/img1.png'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { BiDownload } from 'react-icons/bi'

export default function HomeBaner() {

    function handleDownload() {

    }

    return (

        <Flex
            id='banner'
            align={'center'}
            justify={'center'}
            flexDirection={{ base: "column", lg: "row" }}
            w={{ base: "100%", lg: "90%" }}
            mx={'auto'}
            mt={{ base: "0", lg: "-135" }}
        >
            <Flex
                w={{ base: '100%', lg: '50%' }}
                flexDir={'column'}
                justify={{ base: 'center', lg: 'flex-start' }}
                align={{ base: 'center', lg: 'flex-start' }}
            >
                <Heading
                    size={{ base: "xl", lg: "3xl" }}
                    lineHeight={'4rem'}
                    color={'white'}
                    mx={{ base: 8, lg: 0 }}
                >
                    J'suis Gamaliel <br />
                    <Text as={'span'} fontSize={25} color={'teal'}>Développeur Web et App Mobile.</Text>
                </Heading>
                <Text
                    fontSize={{ base: 'md', lg: 'lg' }}
                    py='2rem'
                    maxW='500px'
                    align={{ base: 'center', lg: 'start' }}
                    mx={{ base: 4, lg: 0 }}
                    mt={-5}
                    color={{ base: 'white', lg: 'white' }}
                >
                    Pour vos besoins en développement web et App Mobile, je suis à votre service.
                    <Heading color={'gray'} fontSize={25} fontWeight={'arial'}>235 60 05 23 24/62 80 42 90</Heading>
                </Text>
                <Button
                    borderRadius={5}
                    bg={'green.500'}
                    _hover={{ bg: 'green.700' }}
                >
                    <Text
                        mr={2}
                        color={'white'}
                        fontWeight={'arial'}
                        fontSize={20}
                        onClick={handleDownload}
                    >
                        Avoir mon CV
                    </Text>
                    <BiDownload fontSize={26} />
                </Button>
            </Flex>

            <Flex
                w={{ base: '100%', lg: '50%' }}
                align={{ base: 'center' }}
                justify={{ base: 'center' }}
            >
                <Box
                    mx={'0.000rem'}
                    w={{ base: '400px', lg: '600px' }}
                    h={{ base: '580px', lg: '800px' }}
                    backgroundImage={Image}
                    backgroundSize={'cover'}
                    backgroundRepeat={'no-repeat'}
                    backgroundPosition={'center'}
                />
            </Flex>
        </Flex>
    )
}
