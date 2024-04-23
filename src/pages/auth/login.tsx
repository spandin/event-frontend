import { Flex, Grid, Heading, HStack, Image, Link, Text } from '@chakra-ui/react'

import { LoginForm } from '@/features/auth/login/ui/loginForm'
import { ICONS } from '@/shared/assets/_index'

export const LoginPage: React.FC = () => {
  return (
    <Grid templateColumns={{ base: '1fr', xl: '40% 1fr' }} maxH={'100dvh'} h={'100dvh'}>
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

        <LoginForm />

        <HStack>
          <Text>Нет аккаунта?</Text>
          <Link href={'/register/'} color={'brand.900'}>
            Зарегистрироваться
          </Link>
        </HStack>
      </Flex>

      <Flex
        display={{ base: 'none', xl: 'flex' }}
        justify={'center'}
        align={'center'}
        p={10}
        bg={'brand.900'}
        color={'white'}
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium minus
          voluptatibus. Suscipit, enim quibusdam eum, perspiciatis impedit facere reprehenderit
          provident exercitationem accusantium quas voluptatem aut. Vitae voluptatem ea placeat.e
        </Text>
      </Flex>
    </Grid>
  )
}
