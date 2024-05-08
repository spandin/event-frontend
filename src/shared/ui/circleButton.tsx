import { Button, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface Props {
  icon: IconType
}

export const CircleButton = ({ icon }: Props) => {
  return (
    <Button variant={'circle'}>
      <Icon as={icon} strokeWidth={'3px'} />
    </Button>
  )
}
