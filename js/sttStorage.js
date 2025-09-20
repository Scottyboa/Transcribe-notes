// sttStorage.js

// --- Provider IDs used everywhere ---
export const STT_PROVIDERS = {
  openai: 'openai',     // gpt-4o-transcribe
  soniox: 'soniox',
  assembly: 'assembly',
};

// --- Selected provider (persists across reloads) ---
const KEY_PROVIDER = 'stt_provider';
export function getProvider() {
  return localStorage.getItem(KEY_PROVIDER) || STT_PROVIDERS.openai;
}
export function setProvider(p) {
  localStorage.setItem(KEY_PROVIDER, p);
}

// --- Per-provider API keys (write to both; read preferring session) ---
export function setProviderKey(provider, key) {
  if (!provider) return;
  const k = 'stt_key_' + provider;
  if (key) {
    sessionStorage.setItem(k, key);
    localStorage.setItem(k, key);
  } else {
    sessionStorage.removeItem(k);
    localStorage.removeItem(k);
  }
}

export function getProviderKey(provider) {
  const k = 'stt_key_' + provider;
  return (
    sessionStorage.getItem(k) ??
    localStorage.getItem(k) ??
    ''
  );
}

// --- Canonical OpenAI key for note generation (also across tabs) ---
export function setOpenAIKey(key) {
  const K = 'openai_api_key';
  if (key) {
    sessionStorage.setItem(K, key);
    localStorage.setItem(K, key);
  } else {
    sessionStorage.removeItem(K);
    localStorage.removeItem(K);
  }
}
export function getOpenAIKey() {
  return (
    sessionStorage.getItem('openai_api_key') ??
    localStorage.getItem('openai_api_key') ??
    ''
  );
}
