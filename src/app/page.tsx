import { Box } from "@mui/material";
import Layout from "components/Layout";
import Link from "next/link";

export default function App() {
  return (
    <Layout>
      <Box>
        <Link href="/mui">MUI</Link>
      </Box>
    </Layout>
  );
}
