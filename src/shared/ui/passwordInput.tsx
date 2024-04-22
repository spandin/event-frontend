import { useState } from 'react'
import { Button, Input, InputGroup, InputProps, InputRightElement } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

interface PasswordInputProps extends InputProps {}

const PasswordInput = (props: PasswordInputProps) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup variant="filled">
      <Input type={show ? 'text' : 'password'} placeholder="Введите пароль" {...props} />
      <InputRightElement>
        <Button variant={'unstyled'} top={1} right={2} h={8} onClick={handleClick}>
          {show ? <ViewOffIcon /> : <ViewIcon />}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default PasswordInput
