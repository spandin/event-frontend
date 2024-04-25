import { HStack, Text, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface Props {
  text: string
  linkText: string
  onLinkClick: () => void
}

export const BottomFormText: React.FC<Props> = ({ text, linkText, onLinkClick }: Props) => {
  return (
    <motion.div
      key={text}
      initial={{ opacity: 0, width: '100%' }}
      animate={{ opacity: 1, width: '100%' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <HStack>
        <Text>{text}</Text>
        <Link onClick={onLinkClick} color={'brand.900'}>
          {linkText}
        </Link>
      </HStack>
    </motion.div>
  )
}
