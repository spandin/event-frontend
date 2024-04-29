import { Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const LoginContent = () => {
  return (
    <motion.div
      key="signInContent"
      initial={{ opacity: 0, width: '100%' }}
      animate={{ opacity: 1, width: '100%' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Илюстрации для входа</Text>
    </motion.div>
  )
}
