import { RNKeycloak } from '@react-keycloak/native';
import KeycloakConfig from './.keycloakconfig.json';
// Setup Keycloak instance as needed
// Pass initialization options as required
const keycloak = new RNKeycloak(KeycloakConfig);

export default keycloak;
