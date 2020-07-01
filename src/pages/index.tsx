import Head from "next/head";
import { Typography } from "../components/Typography";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Tailwind NextJS </title>
      </Head>

      <main>
        <ul className="divide-y divide-gray-400">
          <li className="py-3">
            <Typography
              className=""
              variant="headline"
              weight="bold"
              underline
              uppercase
              color="text-brand-primary"
            >
              H1 / Title
            </Typography>
          </li>
          <li className="py-3">
            <Typography
              variant="title1"
              weight="bold"
            >
              H2 / Title2
            </Typography>
          </li>
          <li className="py-3">
            <Typography variant="title2" weight="bold">
              H3 / Title3
            </Typography>
          </li>
          <li className="py-3">
            <Typography variant="subtitle1" weight="bold">
              H4 / Title4
            </Typography>
          </li>
          <li className="py-3">
            <Typography variant="subtitle2" weight="bold">
              H5 / Title5
            </Typography>
          </li>
          <li className="py-3">
            <Typography variant="body1">Body 1</Typography>
          </li>
          <li className="py-3">
            <Typography variant="body2">Body 2</Typography>
          </li>
          <li className="py-3">
            <Typography variant="body3">Body 3</Typography>
          </li>
          <li className="py-3">
            <Typography variant="button">
              Button / open sans semibold
            </Typography>
          </li>
          <li className="py-3">
            <Typography variant="caption">Caption text</Typography>
          </li>
          <li className="py-3">
            <Typography variant={"overline"}>
              Overline / Open Sans Semibold
            </Typography>
          </li>
        </ul>
      </main>

      <footer></footer>
    </div>
  );
}
