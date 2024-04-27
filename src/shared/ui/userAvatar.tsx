import { Box, Center } from '@chakra-ui/react'

interface Props {
  size: number
  img?: string
  name: string
}

export const UserAvatar = ({ size, img, name }: Props) => {
  return (
    <Box
      boxSize={size}
      fontSize={size * 1.5}
      bg={img ? 'lightHover' : 'lightHover'}
      bgImg={img}
      bgSize={'cover'}
      bgPosition="center"
      bgRepeat="no-repeat"
      rounded={'full'}
    >
      {img ? null : <Center h={'full'}> {name && name.charAt(0).toUpperCase()}</Center>}
    </Box>
  )
}
