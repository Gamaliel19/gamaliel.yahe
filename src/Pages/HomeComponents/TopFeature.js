import { Box, Card, Grid, GridItem, Image, Heading, CardBody, Text, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import SectionHeading from "./SectionHeading";
import Img from '../../images/background.jpeg'
import Img2 from '../../images/img5.jpg'
import Img3 from '../../images/img2.jpg'
import Img4 from '../../images/background.jpeg'




export default function TopFeatures() {
    return (
        <Box
            w={'100%'}
            px={'2rem'}
            bg={'gray.700'}
        >
            <SectionHeading title="Mes événéments" />

            <Grid templateColumns={{ base: 'repeat(1,fr)', md: 'repeat(2,1fr)', lg: 'repeat(4,1fr)' }} >
                <GridItem mr={{ base: 0, lg: 2 }} mt={{ base: 2, lg: 0 }}>
                    <Card
                        w={{ base: 'xs', lg: 'xs' }}
                        position={'relative'}
                        m={'0.5rem'}
                        bgColor='gray.400'

                    >
                        <CardBody>
                            <Image src={Img2} alt={""} borderRadius='md' />
                            <Stack mt='6' spacing='2'>
                                <Flex justify={'space-between'} align={'center'} >
                                    <Heading size='sm'>Stage à l'Office National des Médias Audiovisuels(ONAMA/Tchad).</Heading>
                                </Flex>
                            </Stack>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem mr={{ base: 0, lg: 2 }} mt={{ base: 2, lg: 0 }}>
                    <Card
                        bgColor='gray.400'
                        w={{ base: 'xs', lg: 'xs' }}
                        position={'relative'}
                        m={'0.5rem'}
                    >
                        <CardBody>
                            <Image src={Img3} alt={""} borderRadius='md' />
                            <Stack mt='6' spacing='2'>
                                <Flex justify={'space-between'} align={'center'} >
                                    <Heading size='sm'>Présentation d'une application de gestion/Pharmacie du 10.déc.2023 à Igo-Tech(Tchad).</Heading>
                                </Flex>
                            </Stack>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem mr={{ base: 0, lg: 2 }} mt={{ base: 2, lg: 0 }}>
                    <Card
                        w={{ base: 'xs', lg: 'xs' }}
                        position={'relative'}
                        bgColor='gray.400'
                        m={'0.5rem'}
                    >
                        <CardBody>
                            <Image src={Img2} alt={""} borderRadius='md' />
                            <Stack mt='6' spacing='2'>
                                <Flex justify={'space-between'} align={'center'} >
                                    <Heading size='sm'>Stage à l'Office National des Médias Audiovisuels(ONAMA/Tchad).</Heading>
                                </Flex>
                            </Stack>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem mr={{ base: 0, lg: 2 }} mt={{ base: 2, lg: 0 }}>
                    <Card
                        w={{ base: 'xs', lg: 'xs' }}
                        position={'relative'}
                        m={'0.5rem'}
                        bgColor='gray.400'
                    >
                        <CardBody>
                            <Image src={Img3} alt={""} borderRadius='md' />
                            <Stack mt='6' spacing='2'>
                                <Flex justify={'space-between'} align={'center'} >
                                    <Heading size='sm'>Présentation d'une application de gestion/Pharmacie du 10.déc.2023 à Igo-Tech(Tchad).</Heading>
                                </Flex>
                            </Stack>
                        </CardBody>
                    </Card>
                </GridItem>
            </Grid>
        </Box>
    )
};