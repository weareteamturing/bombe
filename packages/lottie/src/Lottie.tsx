import { Player as BasePlayer, IPlayerProps as BasePlayerProps } from '@lottiefiles/react-lottie-player';

type Props = {} & BasePlayerProps;

const Lottie = ({ ...props }: Props) => <BasePlayer {...props} />;

export default Lottie;
export type { Props as LottieProps };
