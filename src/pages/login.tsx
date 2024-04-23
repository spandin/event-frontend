import { LoginForm } from '@/feauters/auth/login/ui/loginForm'
import { Box, Flex, Grid, Heading, HStack, Link, Text } from '@chakra-ui/react'

const LoginPage: React.FC = () => {
  return (
    <Grid templateColumns={{ base: '1fr', xl: '40% 1fr' }} maxH={'100dvh'} h={'100dvh'}>
      <Flex
        direction={'column'}
        justify={'space-between'}
        align={'center'}
        py={{ base: 6, md: 12 }}
        px={8}
      >
        <Box>
          <Heading variant={'h4'}>AppName</Heading>
        </Box>
        <LoginForm />
        <HStack>
          <Text>Нет аккаунта?</Text>
          <Link color={'brand.900'}>Зарегистрироваться</Link>
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

export default LoginPage
