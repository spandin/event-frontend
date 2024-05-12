import {
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  VStack
} from '@chakra-ui/react'
import { Field, Formik } from 'formik'
import { ReactNode } from 'react'

export const CreateEventForm = ({ membersWidget }: { membersWidget?: ReactNode }) => {
  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        location: '',
        date: '',
        participants: ['']
      }}
      onSubmit={(values, actions) => {
        console.log(values)
        actions.setSubmitting(false)
      }}
    >
      {({ handleSubmit, errors, touched, isSubmitting, resetForm }) => (
        <chakra.form
          onSubmit={handleSubmit}
          h={'full'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
          gap={4}
        >
          <VStack align="start" gap={4}>
            <FormControl isInvalid={!!errors.title && touched.title}>
              <FormLabel htmlFor="title">Название</FormLabel>
              <Field
                as={Input}
                id="title"
                name="title"
                type="text"
                variant="base"
                placeholder="Введите название встречи"
              />
              <FormErrorMessage>{errors.title}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.description && touched.description}>
              <FormLabel htmlFor="description">Описание</FormLabel>
              <Field
                as={Input}
                id="description"
                name="description"
                type="text"
                variant="base"
                placeholder="Введите описание встречи"
              />
              <FormErrorMessage>{errors.description}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.location && touched.location}>
              <FormLabel htmlFor="location">Место</FormLabel>
              <Field
                as={Input}
                id="location"
                name="location"
                type="text"
                variant="base"
                placeholder="Введите место встречи"
              />
              <FormErrorMessage>{errors.location}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.date && touched.date}>
              <FormLabel htmlFor="date">Дата</FormLabel>
              <Field as={Input} id="date" name="date" type="datetime-local" variant="base" />
              <FormErrorMessage>{errors.date}</FormErrorMessage>
            </FormControl>

            {membersWidget}
          </VStack>

          <HStack w={'full'} pb={4} gap={4}>
            <Button w={'full'} h={12} variant={'outline'} type="submit" isLoading={isSubmitting}>
              Создать
            </Button>

            <Button w={'full'} h={12} variant={'solidDark'} onClick={() => resetForm()}>
              Очистить
            </Button>
          </HStack>
        </chakra.form>
      )}
    </Formik>
  )
}
