import { useMediaQuery } from "react-responsive";

const Mobile = ({ children }: any) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return <>{isMobile && children}</>;
};

const PC = ({ children }: any) => {
  const isPc = useMediaQuery({ minWidth: 992 });
  return <>{isPc && children}</>;
};

export { Mobile, PC };
