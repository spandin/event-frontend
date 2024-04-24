import { Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const SignUpContent: React.FC = () => {
  return (
    <motion.div
      key="signUpContent"
      initial={{ opacity: 0, width: '100%' }}
      animate={{ opacity: 1, width: '100%' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Илюстрации для регистрации</Text>{' '}
    </motion.div>
  )
}
