import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.summarizer',
  appName: 'summarizer',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
