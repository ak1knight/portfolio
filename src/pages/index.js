/** @jsxImportSource theme-ui */
import React from "react"
import { Flex, Box, Link } from 'theme-ui'
import logo from '../images/icon.png'
import main from '../images/main.jpeg'

// markup
const IndexPage = () => {
    return <Flex sx={{ height: '100vh' }}>
        <Box p={2} bg="background" sx={{ flexGrow: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRight: '5px solid', borderRightColor: 'primary' }}>
            <h1>Alexis Rogers</h1>
            <header
                sx={{
                    py: 4,
                    variant: 'styles.header',
                    flex: 'none'
                }}>
                <div
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    <Link
                        to="/work"
                        sx={{
                            variant: 'styles.navlink',
                            p: 2,
                        }}>
                        Work
                    </Link>
                    <Link
                        to="/about"
                        sx={{
                            variant: 'styles.navlink',
                            p: 2,
                        }}>
                        About
                    </Link>
                    <Link
                        to="/contact"
                        sx={{
                            variant: 'styles.navlink',
                            p: 2,
                        }}>
                        Contact
                    </Link>
                </div>
            </header>
        </Box>
        <Box p={2} bg="primary" sx={{ flexGrow: 7, backgroundImage: `url(${main})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            
        </Box>
    </Flex>
}

export default IndexPage
