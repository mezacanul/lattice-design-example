import { GetServerSidePropsContext } from "next"
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ChakraProps {
  children: ReactNode;
}

export const Chakra = ({ children }: ChakraProps) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export type ServerSideProps<T> = { props: T } | Promise<{ props: T }>

export function getServerSideProps({
  req,
}: GetServerSidePropsContext): ServerSideProps<{ cookies?: string }> {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  }
}
