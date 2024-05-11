import { Heading, HStack, Image, ResponsiveValue } from '@chakra-ui/react'
import { ICONS } from '../assets/_index'

interface Props {
  size?: number
  display?: ResponsiveValue<string | (string & object)>
  justify?: ResponsiveValue<string | (string & object)>
  withName?: boolean
}

export const Logo = ({ size, display, justify, withName }: Props) => {
  if (withName) {
    return (
      <HStack w={'full'} justify={justify} gap={4} display={display || 'flex'}>
        <Image src={ICONS.APP_LOGO} boxSize={size || 9} />
        <Heading variant={'h2'}>Event App</Heading>
      </HStack>
    )
  }

  return <Image src={ICONS.APP_LOGO} boxSize={size || 9} display={display || 'flex'} />
}
