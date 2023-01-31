import { useMediaQuery } from "react-responsive";

const Mobile = ({ children }: any) => {
  const isMobile = useMediaQuery({ maxWidth: 785 });
  return <>{isMobile && children}</>;
};

const PC = ({ children }: any) => {
  const isPc = useMediaQuery({ minWidth: 786 });
  return <>{isPc && children}</>;
};

export { Mobile, PC };
