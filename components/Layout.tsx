import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import { connect } from "dva-no-router";

type Props = {
  tdk: {
    title: string
  }
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  tdk,
}) => (
  <div>
    <Head>
      <title>{tdk.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/users">
          <a>Users List</a>
        </Link>{" "}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default connect((state:any) => {
  return {
    tdk: state.tdk,
  };
})(Layout);
