import { Card, CardBody, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Img2 from '../../images/img2.jpg'


export default function DesktopCarte() {

    return (
        <Flex
            id='apropos'
            bg={'gray.100'}
            align={'center'}
            justify={'center'}
            display={{ base: 'none', sm: 'none', lg: 'flex' }}
        >
            <Card
                direction={'row'}
                bg={'gray.100'}
            >
                <Image
                    objectFit='cover'
                    maxW={'400px'}
                    src={Img2}
                    alt='photo'
                />
                <Stack>
                    <CardBody w={'xl'}>
                        <Heading size='md' color={'black'} >À propos de Yahe Gamaliel</Heading>
                        <Text py='2' color={'black'} flexDir={'row'}>
                            Né le 10.déc.2001 à KOYOM/Tchad,
                            YAGALI NAFOU Gamaliel est un ingénieur de Conception en Génie Logiciel.<br />
                            En effet, entré à l'ecole primaire "La Savane" de KOYOM, il termine son cursus sécondaire à NDjaména où il décrocha son baccalauréatrocha son baccalauréat
                            série D. Admis au concours d'entrée en prémière année à l'Institut National Supérieur des Sciences et Techniques d'Abéché/Tchad(INSTA)es d'Abéché/Tchad(INSTA),
                            c'est là que la personne de l'Ingénieur fut concrétisée. Pationné par le Développement,
                            Ing. Gamaliel, le Designer fait des merveilles dans le Web et les Apps mobiles.
                        </Text>
                    </CardBody>
                </Stack>

            </Card>
        </Flex>
    )
}
