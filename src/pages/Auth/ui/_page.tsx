import { useState } from 'react'
import { AUTH_FORMS } from '@/shared/types/types'
import { BottomFormText } from './bottomText'
import { RegisterContent } from './registerContent'
import { LoginContent } from './loginContent'
import { AuthFormWithProviders } from '@/widgets/Auth/authFormWithProviders'
import { AuthPageLayout } from './_layout'

export const AuthPage = () => {
  const [authFormActive, setAuthFormActive] = useState(AUTH_FORMS.LOGIN)

  const handleFormToggle = () => {
    setAuthFormActive((prevForm) =>
      prevForm === AUTH_FORMS.LOGIN ? AUTH_FORMS.REGISTER : AUTH_FORMS.LOGIN
    )
  }
  return (
    <AuthPageLayout
      authForm={<AuthFormWithProviders formActive={authFormActive} />}
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
