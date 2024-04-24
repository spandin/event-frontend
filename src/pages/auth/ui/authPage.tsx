import { useState } from 'react'

import { AUTH_FORMS } from '../model/types'
import { BottomFormText } from './bottomText'
import { AuthLayout } from '@/app/layouts/authPageLayout'
import { SignUpForm } from './register/signUpForm'
import { SignUpContent } from './register/signUpContent'
import { SignInContent } from './login/signInContent'
import { SignInForm } from './login/singInForm'

export const AuthPage: React.FC = () => {
  const [authFormActive, setAuthFormActive] = useState(AUTH_FORMS.REGISTER)

  const handleFormToggle = () => {
    setAuthFormActive((prevForm) =>
      prevForm === AUTH_FORMS.LOGIN ? AUTH_FORMS.REGISTER : AUTH_FORMS.LOGIN
    )
  }
  return (
    <AuthLayout
      form={authFormActive === AUTH_FORMS.LOGIN ? <SignInForm /> : <SignUpForm />}
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
