import { useAuth } from '@/shared/hooks'
import { PasswordInput } from '@/shared/ui'
import {
  Box,
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  VStack
} from '@chakra-ui/react'
import { Formik, Field } from 'formik'
import { motion } from 'framer-motion'

export const LoginForm: React.FC = () => {
  const { loginAndAuthenticate, isLoading } = useAuth()

  return (
    <motion.div
      key="signIn"
      initial={{ opacity: 0, width: '100%' }}
      animate={{ opacity: 1, width: '100%' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={(values) => {
          const { email, password } = values
          loginAndAuthenticate(email, password)
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <chakra.form onSubmit={handleSubmit} noValidate w={{ base: '100%', lg: '80%' }}>
            <VStack spacing={8}>
              <VStack spacing={0} align={'center'}>
                <Heading variant={'h2'}>Войдите в аккаунт</Heading>
                <Text color={'gray.500'}>используя email и пароль</Text>
              </VStack>

              <VStack w={'full'} spacing={4}>
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel htmlFor="email">Email:</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="base"
                    placeholder="example@example.com"
                    validate={(value: string) => {
                      let error

                      if (!value) {
                        error = 'Введите адрес электронной почты'
                      } else if (!/\S+@\S+\.\S+/.test(value)) {
                        error = 'Неверный формат электронной почты'
                      }

                      return error
                    }}
                  />

                  <FormErrorMessage fontSize={'sm'}>{errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Пароль:</FormLabel>
                  <Field
                    as={PasswordInput}
                    id="password"
                    name="password"
                    variant="base"
                    validate={(value: string) => {
                      let error

                      if (value.length < 8) {
                        error = 'Пароль должен быть больше 8 символов'
                      }

                      return error
                    }}
                  />

                  <FormErrorMessage fontSize={'sm'}>{errors.password}</FormErrorMessage>
                </FormControl>

                <Box textAlign={'end'} w={'full'}>
                  <Link fontSize={'sm'} color={'gray.500'}>
                    Забыли пароль?
                  </Link>
                </Box>

                <Button
                  w={'full'}
                  mt={1}
                  variant={'solid'}
                  isLoading={isLoading}
                  loadingText="Вход"
                  type="submit"
                  disabled={isLoading}
                >
                  Войти
                </Button>
              </VStack>
            </VStack>
          </chakra.form>
        )}
      </Formik>
    </motion.div>
  )
}
