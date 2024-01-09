import React from "react";
import { InputGroup, Input, Tooltip, useColorModeValue, Flex } from '@chakra-ui/react'

export const Search = () => {
    return (
        <Flex align={'center'} justify={'center'}>
            <InputGroup
                size={'sm'}
                w={{ base: '100%', lg: '20rem' }}
                boxShadow={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'sm'}
            >
                <Input
                    type="text"
                    p={2}
                    size={'md'}
                    bg={'transparent'}
                    placeholder="Rechercher..."
                    focusBorderColor="green.400"
                    borderWidth={'2px'}
                    borderRadius={5}
                    borderColor={'gray.400'}
                />
            </InputGroup>
        </Flex>
    )
}