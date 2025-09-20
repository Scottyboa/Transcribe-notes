// sttStorage.js
export const STT_PROVIDERS = {
  openai: 'openai',     // gpt-4o-transcribe
  soniox: 'soniox',
  assembly: 'assembly'
};

const KEY_PROVIDER = 'stt_provider'; // localStorage
const KEY_PREFIX   = 'stt_key_';     // sessionStorage.stt_key_<provider>

// --- Provider selection ---
export function getProvider() {
  return localStorage.getItem(KEY_PROVIDER) || STT_PROVIDERS.openai;
}
export function setProvider(p) {
  localStorage.setItem(KEY_PROVIDER, p);
}

// --- Per-provider API keys in sessionStorage ---
export function setProviderKey(provider, key) {
  if (!provider) return;
  if (key) sessionStorage.setItem(KEY_PREFIX + provider, key);
  else     sessionStorage.removeItem(KEY_PREFIX + provider);
}
export function getProviderKey(provider) {
  return sessionStorage.getItem(KEY_PREFIX + provider) || '';
}

// --- OpenAI key for note generation (stable home) ---
const OPENAI_KEY = 'openai_api_key';
export function setOpenAIKey(key) {
  if (key) sessionStorage.setItem(OPENAI_KEY, key);
  else     sessionStorage.removeItem(OPENAI_KEY);
}
export function getOpenAIKey() {
  return sessionStorage.getItem(OPENAI_KEY) || '';
}
