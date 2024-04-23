import React, { ReactNode } from 'react'
import { AbsoluteCenter, Box, Divider, Text } from '@chakra-ui/react'

interface TextDividerProps {
  children: ReactNode
}

const TextDivider: React.FC<TextDividerProps> = ({ children }) => {
  return (
    <Box position={'relative'} w={'full'}>
      <Divider variant={'thick'} />
      <AbsoluteCenter bg={'white'} p={2} top={'-1px'}>
        <Text color={'gray.500'} fontSize={'md'} whiteSpace={'nowrap'}>
          {children}
        </Text>
      </AbsoluteCenter>
    </Box>
  )
}

export default TextDivider
