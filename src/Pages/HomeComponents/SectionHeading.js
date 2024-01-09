import { Heading } from '@chakra-ui/react';
import React from 'react'

function SectionHeading({title}) {
    return (
        <Heading size={'md'} my={'1.5rem'} ml={2} color={'white'}>
            {title}
        </Heading>
    );
}

export default SectionHeading
