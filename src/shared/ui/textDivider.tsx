import { ReactNode } from 'react'
import { AbsoluteCenter, Box, Divider, Text } from '@chakra-ui/react'

interface Props {
  children: ReactNode
}

export const TextDivider = ({ children }: Props) => {
  return (
    <Box position={'relative'} w={'70%'}>
      <Divider variant={'thick'} />
      <AbsoluteCenter bg={'white'} p={2} top={'-1px'}>
        <Text color={'gray.500'} fontSize={'md'} whiteSpace={'nowrap'}>
          {children}
        </Text>
      </AbsoluteCenter>
    </Box>
  )
}
