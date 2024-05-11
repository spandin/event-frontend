import { ReactNode } from 'react'
import { Grid, Flex } from '@chakra-ui/react'
import { Logo } from '@/shared/ui/logo'

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
        <Logo withName={true} justify={{ base: 'flex-start', lg: 'center' }} />

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
