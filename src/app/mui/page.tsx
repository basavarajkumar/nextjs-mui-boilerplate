import Typography from "@mui/material/Typography";
import Buttons from "components/mui/Buttons";
import Layout from "components/mui/Layout";
import TextFields from "components/mui/TextFields";

export default function MuiPage() {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Scrollable Content Area
      </Typography>
      <Buttons />
      <TextFields />
    </Layout>
  );
}
