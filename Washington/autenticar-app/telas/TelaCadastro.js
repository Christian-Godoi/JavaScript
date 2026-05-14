import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { autenticacao } from '../config/firebaseConfig';

export default function TelaCadastro({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const fazerCadastro = async () => {
    if (!email || !senha || !confirmaSenha) {
      setErro('Preencha todos os campos');
      return;
    }

    if (senha !== confirmaSenha) {
      setErro('As senhas não correspondem');
      return;
    }

    if (senha.length < 6) {
      setErro('A senha deve ter no mínimo 6 caracteres');
      return;
    }

    setCarregando(true);
    try {
      await createUserWithEmailAndPassword(autenticacao, email, senha);
      setEmail('');
      setSenha('');
      setConfirmaSenha('');
      setErro('');
      navigation.navigate('Login');
    } catch (erro) {
      if (erro.code === 'auth/email-already-in-use') {
        setErro('Este email já está cadastrado');
      } else if (erro.code === 'auth/invalid-email') {
        setErro('Email inválido');
      } else {
        setErro('Erro ao cadastrar. Tente novamente.');
      }
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
          <Text style={estilos.titulo}>sign up</Text>

          <View style={estilos.inputContainer}>
            <Text style={estilos.label}>Email</Text>
            <TextInput
              style={estilos.input}
              placeholder="Digite seu email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
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

          <View style={estilos.inputContainer}>
            <Text style={estilos.label}>Confirm Password</Text>
            <TextInput
              style={estilos.input}
              placeholder="Confirme sua senha"
              placeholderTextColor="#999"
              value={confirmaSenha}
              onChangeText={setConfirmaSenha}
              secureTextEntry
              editable={!carregando}
            />
          </View>

          <TouchableOpacity
            style={[estilos.botaoRegistro, carregando && estilos.botaoDesabilitado]}
            onPress={fazerCadastro}
            disabled={carregando}
          >
            <Text style={estilos.textoBotao}>
              {carregando ? 'CADASTRANDO...' : 'SIGN UP'}
            </Text>
          </TouchableOpacity>

          {erro ? <Text style={estilos.erro}>{erro}</Text> : null}

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={estilos.linkVoltar}>Já tem conta? Faça login</Text>
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
  botaoRegistro: {
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
  linkVoltar: {
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 20,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});