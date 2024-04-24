import { useState } from 'react'

import { AUTH_FORMS } from '../model/types'
import { BottomFormText } from './BottomFormText'
import { LoginContent } from './login/LoginContent'
import { LoginForm } from './login/LoginForm'
import { RegisterContent } from './register/RegisterContent'
import { RegisterForm } from './register/RegisterForm'
import { AuthLayout } from '@/app/layouts/AuthLayout'

export const AuthPage: React.FC = () => {
  const [authFormActive, setAuthFormActive] = useState(AUTH_FORMS.REGISTER)

  const handleFormToggle = () => {
    setAuthFormActive((prevForm) =>
      prevForm === AUTH_FORMS.LOGIN ? AUTH_FORMS.REGISTER : AUTH_FORMS.LOGIN
    )
  }
  return (
    <AuthLayout
      form={authFormActive === AUTH_FORMS.LOGIN ? <LoginForm /> : <RegisterForm />}
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
      content={authFormActive === AUTH_FORMS.LOGIN ? <LoginContent /> : <RegisterContent />}
    />
  )
}
