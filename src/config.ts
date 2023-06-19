const getParamOrExit = (name: string) => {
  const param = process.env[name];
  if (!param) {
    console.error(`Required config param '${name}' missing`);
    process.exit(1);
  }
  return param;
};

const getParam = (name: string) => {
  const param = process.env[name];
  if (!param) {
    return null;
  }
  return param;
};

export const PK = getParamOrExit('PK');

export const MUMBAI_RPC_URL = getParamOrExit('MUMBAI_RPC_URL');

export const LENS_API = getParamOrExit('LENS_API');

export const LENS_HUB_CONTRACT = getParamOrExit('LENS_HUB_CONTRACT');

export const LENS_PERIPHERY_CONTRACT = getParamOrExit('LENS_PERIPHERY_CONTRACT');

export const LENS_PERIPHERY_NAME = 'LensPeriphery';

export const PROFILE_ID = getParam('PROFILE_ID');

export const INFURA_PROJECT_ID = getParam('INFURA_PROJECT_ID');

export const INFURA_SECRET = getParam('INFURA_SECRET');