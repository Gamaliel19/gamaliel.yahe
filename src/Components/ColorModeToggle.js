import { Button, Flex, Link, useColorMode } from "@chakra-ui/react"
import { BsSun, BsMoonStarsFill } from 'react-icons/bs'

export default function ColorModeToggle() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex w={{ base: '100%', lg: '50%' }} justifyContent="center" alignItems="center">
            <Link borderRadius={5}>
                <Button
                    bg={'transparent'}
                    aria-label="Toggle Color Mode"
                    onClick={toggleColorMode}
                >
                    {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
                </Button>
            </Link>
        </Flex>
    )
}

/*
        <Flex w={{ base: '100%', lg: '50%' }} justifyContent="center" alignItems="center">
            <Button
                bg={'transparent'}
                aria-label="Toggle Color Mode"
                onClick={toggleColorMode}
                _focus={{ boxShadow: 'none' }}
                size={16}
            >
                {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
            </Button>
        </Flex>
        */
