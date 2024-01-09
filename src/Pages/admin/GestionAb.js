import React, { useEffect, useState } from 'react'
import {
    Box, Container, Flex, Heading, IconButton, Stack,
    TabPanel, TabPanels, Table, TableContainer, Tabs, Tbody, Td, Th, Thead, Tr, useColorModeValue
} from '@chakra-ui/react'
import axios from 'axios'
import { FaTrash } from 'react-icons/fa'


function GestionAb() {

    const [comment, setComment] = useState([])
    const [name, SetName] = useState('Gestion des commentaires')

    useEffect(() => {
        function updateTitle() {
            document.title = name
        }
        updateTitle()
        fetch("http://127.0.0.1:5000/getCommentaire")
            .then(resp => resp.json())
            .then(data => setComment(data))
    }, [])

    return (
        <Flex
            flexDir={'column'}
            mt={{ base: '4rem', lg: '0' }}
            minHeight={'100vh'}
            bg={useColorModeValue('white', 'gray.700')}
        >
            <Stack
                align={'center'}
                justify={'center'}
            >
                <Box>
                    <Heading mt={5} fontSize={20}>Informations des abonnées</Heading>
                </Box>
            </Stack>

            <Stack ml={5} mt={5} mr={'1rem'}>
                <Flex flexDir={'column'} w={'100%'}>
                    <Tabs>

                        <TabPanels>
                            <TabPanel>
                                <ListeAbonnes items={comment} />
                            </TabPanel>

                            <TabPanel>

                            </TabPanel>

                        </TabPanels>
                    </Tabs>
                </Flex>
            </Stack>

        </Flex>
    )
}
export default GestionAb

function ListeAbonnes({ items }) {
    return (
        <Flex flexDir={'column'} boxShadow={'lg'} my={2} justify={'center'} align={'center'}>
            <Flex my={2} align={'center'} justify={'center'} w={'100%'}>
                <TableContainer>
                    <Table variant='striped' colorScheme="gray">
                        <Thead alignItems={'center'} justifyItems={'center'}>
                            <Tr id='titre'>
                                <Th>Messagerie Électronique</Th>
                                <Th>Commentaires</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {Object.values(items).map(item => {
                                return <Tr>

                                    <Td>{item.email}</Td>
                                    <Td>{item.comment}</Td>
                                    <Td>
                                        <IconButton
                                            ml={2}
                                            icon={<FaTrash color={'red'} />}
                                            onClick={e => deleteCommentaire(item.ident)}
                                        />
                                    </Td>
                                </Tr>
                            })
                            }
                        </Tbody>
                    </Table>
                </TableContainer>

            </Flex>
        </Flex>
    )
    function deleteCommentaire(id) {
        const conf = window.confirm(" Attention! Voulez-vous vraiment supprimer ce commentaire?")
        if (conf) {
            axios.delete('http://localhost:5000/deleteCommentaire/' + id)
                .then(res => {
                    alert('Ce commentaire a été supprimé avec succès!')
                    window.location.href = '/admin'
                }).catch(err => console.log(err))
        }
    }
}