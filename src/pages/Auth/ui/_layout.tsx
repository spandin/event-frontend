import { ReactNode } from 'react'
import { Grid, Flex, HStack, Heading, Image } from '@chakra-ui/react'

import { ICONS } from '@/shared/assets/_index'

interface Props {
  authForm: ReactNode
  bottomFormText: ReactNode
  content: ReactNode
}

export const AuthPageLayout = ({ authForm, bottomFormText, content }: Props) => {
  return (
    <Grid templateColumns={{ base: '1fr', xl: '40% 1fr' }} h={'100dvh'}>
      <Flex
        direction={'column'}
        justify={'space-between'}
        align={'center'}
        py={{ base: 6, md: 12 }}
        px={8}
      >
        <HStack alignSelf={{ base: 'flex-start', lg: 'center' }} gap={2}>
          <Image boxSize={6} src={ICONS.APP_LOGO} />
          <Heading variant={'h3'}>Event App</Heading>
        </HStack>

        {authForm}

        {bottomFormText}
      </Flex>

      <Flex
        display={{ base: 'none', xl: 'flex' }}
        justify={'center'}
        align={'center'}
        p={10}
        bg={'lightBrand.900'}
        color={'white'}
      >
        {content}
      </Flex>
    </Grid>
  )
}
