export function isTestEnvironment(): boolean {
  return process.env.JEST_WORKER_ID !== undefined || process.env.NODE_ENV === 'test';
}

export function isDev(): boolean {
  return __DEV__;
}

export function isDevButTestEnvironment(): boolean {
  return __DEV__ && !isTestEnvironment();
}

export function isHermes(): boolean {
  return !!(global as any)?.HermesInternal;
}

export function isNewArch(): boolean {
  return global.__turboModuleProxy != null;
}
