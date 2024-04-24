import { useState } from 'react'

import { AUTH_FORMS } from '../model/types'
import { BottomFormText } from './bottomText'
import { AuthLayout } from '@/app/layouts/authLayout'
import { RegisterForm } from '@/features'
import { SignUpContent } from './register/signUpContent'
import { SignInContent } from './login/signInContent'
import { SignInForm } from '../../../features/LoginForm/ui/loginForm'

export const AuthPage: React.FC = () => {
  const [authFormActive, setAuthFormActive] = useState(AUTH_FORMS.REGISTER)

  const handleFormToggle = () => {
    setAuthFormActive((prevForm) =>
      prevForm === AUTH_FORMS.LOGIN ? AUTH_FORMS.REGISTER : AUTH_FORMS.LOGIN
    )
  }
  return (
    <AuthLayout
      form={authFormActive === AUTH_FORMS.LOGIN ? <SignInForm /> : <RegisterForm />}
      bottomFormText={
        authFormActive === AUTH_FORMS.LOGIN ? (
          <BottomFormText
            text={'Нет аккаунта?'}
            linkText={'Зарегистрироваться'}
            onLinkClick={handleFormToggle}
          />
        ) : (
          <BottomFormText
            text={'Уже есть аккаунт?'}
            linkText={'Вернуться к входу'}
            onLinkClick={handleFormToggle}
          />
        )
      }
      content={authFormActive === AUTH_FORMS.LOGIN ? <SignInContent /> : <SignUpContent />}
    />
  )
}
