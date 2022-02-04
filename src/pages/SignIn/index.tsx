import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Alert } from 'react-native';
import Logo from '../../assets/logo.svg';
import AppleIcon from '../../assets/apple-icon.svg';
import GoogleIcon from '../../assets/google-icon.svg';
import { SignInSocialButton } from '../../components/SignInSocialButton';
import { useAuth } from '../../hooks/authHook';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  ButtonWrapper,
} from './styles';

export const SignIn = () => {
  const { signInWithGoogle } = useAuth();

  const hadnleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar a conta Google');
    }
  };

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Logo width={RFValue(120)} height={RFValue(68)} />
          <Title>Controle suas finanças de forma muito simples</Title>
        </TitleWrapper>
        <SignInTitle>
          Faça seu login com {'\n'} uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <ButtonWrapper>
          <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleIcon}
            onPress={signInWithGoogle}
          />
          <SignInSocialButton title="Entrar com Apple" svg={AppleIcon} />
        </ButtonWrapper>
      </Footer>
    </Container>
  );
};
