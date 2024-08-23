import React from 'react';

type ProviderType = (param: any) => React.ReactElement | null;
export const withProviders =
  (...Providers: (ProviderType | [ProviderType, any])[]) =>
  (WrappedComponent: React.ComponentType<any>) =>
  (props: any) =>
    Providers.reduceRight((acc, prov) => {
      if (Array.isArray(prov)) {
        const Provider = prov[0];
        return <Provider {...prov[1]}>{acc}</Provider>;
      } else {
        const Provider = prov;
        return <Provider>{acc}</Provider>;
      }
    }, <WrappedComponent {...props} />);
