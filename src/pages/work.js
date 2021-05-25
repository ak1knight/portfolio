/** @jsxImportSource theme-ui */
import React from "react"
import { Flex, Box, Link } from 'theme-ui'

const WorkPage = () => {
    return <Flex sx={{ height: '100vh', flexDirection: 'column' }}>
        <Box p={2} bg="background" sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                flexDirection: 'column', 
                borderBottom: '5px solid', 
                borderBottomColor: 'primary' 
            }}>
            <h1>Alexis Rogers</h1>
            <header sx={{
                    pb: 3,
                    pt: 1,
                    variant: 'styles.header',
                    flex: 'none'
                }}>
                <div sx={{ display: 'flex', justifyContent: 'center', }}>
                    <Link href="/work" sx={{ p: 2 }}>
                        Work
                    </Link>
                    <Link href="/about" sx={{ p: 2 }}>
                        About
                    </Link>
                    <Link href="/contact" sx={{ p: 2 }}>
                        Contact
                    </Link>
                </div>
            </header>
        </Box>
        <Box p={2} bg="secondary" sx={{ flexGrow: 3 }}>
            
        </Box>
    </Flex>
}

export default WorkPage
