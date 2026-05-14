import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { signOut } from 'firebase/auth';
import { autenticacao } from '../config/firebaseConfig';

export default function TelaHome() {
  const [carregando, setCarregando] = React.useState(false);

  const fazerLogout = async () => {
    setCarregando(true);
    try {
      await signOut(autenticacao);
    } catch (erro) {
      console.error('Erro ao fazer logout:', erro);
    } finally {
      setCarregando(false);
    }
  };

  const email = autenticacao.currentUser?.email || 'Usuário';

  return (
    <LinearGradient
      colors={['#FF4757', '#C44569', '#9B2E6F']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={estilos.gradientContainer}
    >
      <SafeAreaView style={estilos.container}>
        <View style={estilos.conteudo}>
          <View style={estilos.headerBox}>
            <Text style={estilos.bemvindo}>Bem-vindo!</Text>
            <Text style={estilos.email}>{email}</Text>
          </View>

          <View style={estilos.infoBox}>
            <Text style={estilos.textoInfo}>
              Você está autenticado com sucesso
            </Text>
          </View>

          <TouchableOpacity
            style={[estilos.botaoLogout, carregando && estilos.botaoDesabilitado]}
            onPress={fazerLogout}
            disabled={carregando}
          >
            <Text style={estilos.textoBotao}>
              {carregando ? 'SAINDO...' : 'LOGOUT'}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const estilos = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  conteudo: {
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
  },
  headerBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 25,
    marginBottom: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  bemvindo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  email: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    fontStyle: 'italic',
  },
  infoBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  textoInfo: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.85)',
    textAlign: 'center',
    lineHeight: 22,
  },
  botaoLogout: {
    width: '100%',
    backgroundColor: '#C41E3A',
    borderRadius: 25,
    paddingVertical: 14,
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
});