import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { autenticacao } from '../config/firebaseConfig';

export default function TelaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const fazerLogin = async () => {
    if (!email || !senha) {
      setErro('Preencha todos os campos');
      return;
    }
    
    setCarregando(true);
    try {
      await signInWithEmailAndPassword(autenticacao, email, senha);
    } catch (erro) {
      setErro('Erro ao fazer login. Verifique seus dados.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <LinearGradient
      colors={['#FF4757', '#C44569', '#9B2E6F']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={estilos.gradientContainer}
    >
      <ScrollView contentContainerStyle={estilos.scrollContainer}>
        <View style={estilos.container}>
          <Text style={estilos.titulo}>sign in</Text>

          <View style={estilos.inputContainer}>
            <Text style={estilos.label}>Username</Text>
            <TextInput
              style={estilos.input}
              placeholder="Digite seu email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              editable={!carregando}
            />
          </View>

          <View style={estilos.inputContainer}>
            <Text style={estilos.label}>Password</Text>
            <TextInput
              style={estilos.input}
              placeholder="Digite sua senha"
              placeholderTextColor="#999"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              editable={!carregando}
            />
          </View>

          <TouchableOpacity
            style={[estilos.botaoLogin, carregando && estilos.botaoDesabilitado]}
            onPress={fazerLogin}
            disabled={carregando}
          >
            <Text style={estilos.textoBotao}>
              {carregando ? 'CARREGANDO...' : 'LOGIN'}
            </Text>
          </TouchableOpacity>

          {erro ? <Text style={estilos.erro}>{erro}</Text> : null}

          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={estilos.linkCadastro}>Não tem conta? Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const estilos = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 40,
    textTransform: 'lowercase',
  },
  inputContainer: {
    width: '100%',
    maxWidth: 300,
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 8,
    marginLeft: 5,
    textTransform: 'capitalize',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 14,
    fontSize: 14,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  botaoLogin: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: '#C41E3A',
    borderRadius: 25,
    paddingVertical: 14,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  botaoDesabilitado: {
    opacity: 0.6,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  erro: {
    color: '#FFFFFF',
    marginTop: 20,
    fontSize: 14,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  linkCadastro: {
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 20,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});