import { useAuth } from '@/shared/hooks/_index'
import { PasswordInput } from '@/shared/ui/_index'
import {
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack
} from '@chakra-ui/react'
import { Formik, Field } from 'formik'
import { motion } from 'framer-motion'

export const RegisterForm = () => {
  const { registerAndAuthenticate, isLoading } = useAuth()

  return (
    <motion.div
      key="signUp"
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
          registerAndAuthenticate(email, password)
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <chakra.form onSubmit={handleSubmit} noValidate w={{ base: '100%', lg: '80%' }}>
            <VStack spacing={8}>
              <VStack spacing={0} align={'center'}>
                <Heading variant={'h2'}>Зарегистрируйте аккаунт</Heading>
                <Text color={'gray.500'} fontSize={'md'}>
                  используя email и пароль
                </Text>
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

                <Button
                  w={'full'}
                  mt={6}
                  variant={'solid'}
                  isLoading={isLoading}
                  loadingText="Регистрация"
                  type="submit"
                  isDisabled={isLoading}
                >
                  Зарегистрироваться
                </Button>
              </VStack>
            </VStack>
          </chakra.form>
        )}
      </Formik>
    </motion.div>
  )
}
