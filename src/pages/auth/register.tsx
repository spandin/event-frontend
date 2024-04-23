import { Flex, Grid, Heading, HStack, Image, Link, Text } from '@chakra-ui/react'

import { RegisterForm } from '@/features/auth/register/_index'
import { ICONS } from '@/shared/assets/_index'

export const RegisterPage: React.FC = () => {
  return (
    <Grid templateColumns={{ base: '1fr', xl: '1fr 40% ' }} maxH={'100dvh'} h={'100dvh'}>
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

      <Flex
        direction={'column'}
        justify={'space-between'}
        align={'center'}
        py={{ base: 6, md: 12 }}
        px={8}
      >
        <HStack alignSelf={{ base: 'flex-start', lg: 'center' }} gap={2}>
          <Image boxSize={8} src={ICONS.APP_LOGO} />
          <Heading variant={'h3'}>AppName</Heading>
        </HStack>

        <RegisterForm />

        <HStack>
          <Text>Уже есть аккаунт?</Text>
          <Link href={'/login/'} color={'brand.900'}>
            Вернуться к входу
          </Link>
        </HStack>
      </Flex>
    </Grid>
  )
}
