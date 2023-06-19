import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Box,
  Button,
  Flex
} from '@chakra-ui/react'
import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'

function menu () {
  return (
    <Menu>
      <Box display={['block', 'block', 'none']}>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
        />
        <MenuList>
          <MenuItem command='⌘T'>New Tab</MenuItem>
          <MenuItem command='⌘T'>New Tab</MenuItem>
          <MenuItem command='⌘T'>New Tab</MenuItem>
        </MenuList>
      </Box>
      <Box
        display={['none', 'none', 'block']}
        paddingInline={['6', '6', '24']}
        bg='white'
      >
        <Box display='flex' justifyContent='end'>
          <MenuButton as={Button} colorScheme='white' color='black'>
            MenuItem
          </MenuButton>
          <MenuButton as={Button} colorScheme='white' color='black'>
            MenuItem
          </MenuButton>
          <MenuButton as={Button} colorScheme='white' color='black'>
            MenuItem
          </MenuButton>
        </Box>
      </Box>
    </Menu>
  )
}

export default menu
