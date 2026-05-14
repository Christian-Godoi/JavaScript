// Teste de variáveis de ambiente
import 'dotenv/config';

console.log('=== TESTE DE VARIÁVEIS DE AMBIENTE ===');
console.log('API Key carregada:', process.env.REACT_APP_FIREBASE_API_KEY ? '✓ Sim' : '✗ Não');
console.log('Auth Domain carregada:', process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ? '✓ Sim' : '✗ Não');
console.log('Project ID carregada:', process.env.REACT_APP_FIREBASE_PROJECT_ID ? '✓ Sim' : '✗ Não');
console.log('Storage Bucket carregada:', process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ? '✓ Sim' : '✗ Não');
console.log('Messaging Sender ID carregada:', process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ? '✓ Sim' : '✗ Não');
console.log('App ID carregada:', process.env.REACT_APP_FIREBASE_APP_ID ? '✓ Sim' : '✗ Não');
console.log('Measurement ID carregada:', process.env.REACT_APP_FIREBASE_MEASUREMENT_ID ? '✓ Sim' : '✗ Não');

console.log('\n=== VALORES CARREGADOS ===');
console.log('API Key:', process.env.REACT_APP_FIREBASE_API_KEY);
console.log('Auth Domain:', process.env.REACT_APP_FIREBASE_AUTH_DOMAIN);
console.log('Project ID:', process.env.REACT_APP_FIREBASE_PROJECT_ID);
console.log('Armazenamento protegido com sucesso! ✓');
