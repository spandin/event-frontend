import { useState } from 'react'
import { AUTH_FORMS } from '../model/types'
import { BottomFormText } from './bottomText'
import { AuthLayout } from './authLayout'
import { RegisterContent } from './registerContent'
import { LoginContent } from './loginContent'
import { AuthFormWithProviders } from '@/widgets/authFormWithProviders'
import { LoginForm, RegisterForm } from '@/features/AuthByEmail'

export const AuthPage: React.FC = () => {
  const [authFormActive, setAuthFormActive] = useState(AUTH_FORMS.REGISTER)

  const handleFormToggle = () => {
    setAuthFormActive((prevForm) =>
      prevForm === AUTH_FORMS.LOGIN ? AUTH_FORMS.REGISTER : AUTH_FORMS.LOGIN
    )
  }
  return (
    <AuthLayout
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
    >
      <AuthFormWithProviders
        form={authFormActive === AUTH_FORMS.LOGIN ? <LoginForm /> : <RegisterForm />}
      />
    </AuthLayout>
  )
}
