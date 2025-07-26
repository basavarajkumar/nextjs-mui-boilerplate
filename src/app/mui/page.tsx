import Typography from "@mui/material/Typography";
import Buttons from "components/mui/Buttons";
import Layout from "components/Layout";
import TextFields from "components/mui/TextFields";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

import DataTable from "components/mui/DataTable";
import Icons from "components/mui/Icons";
import Progress from "components/mui/Progress";
import RadioButtonsGroup from "components/mui/RadioButtonsGroup";
import Selector from "components/mui/Selector";
import Stepper from "components/mui/Stepper";
import Switches from "components/mui/Switches";
import ToolTips from "components/mui/ToolTips";

const CustomDivider = ({ title }: { title: string }) => (
  <Divider sx={{ marginTop: 4, marginBottom: 4 }} color="primary">
    <Chip label={title} size="small" color="primary" />
  </Divider>
);

export default function MuiPage() {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        MUI COMPONENTS
      </Typography>
      <CustomDivider title={"Buttons"} />
      <Buttons />

      <CustomDivider title={"Input Fields"} />
      <TextFields />

      <CustomDivider title={"Selectors"} />
      <Selector />

      <CustomDivider title={"Switches"} />
      <Switches />

      <CustomDivider title={"Radio Buttons Group"} />
      <RadioButtonsGroup />

      <CustomDivider title={"ToolTips"} />
      <ToolTips />

      <CustomDivider title={"Progress"} />
      <Progress />

      <CustomDivider title={"Icons"} />
      <Icons />

      <CustomDivider title={"Stepper"} />
      <Stepper />

      <CustomDivider title={"DataTable"} />
      <DataTable />
    </Layout>
  );
}
