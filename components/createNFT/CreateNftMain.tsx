import { Box, Typography, Container, Grid } from "@material-ui/core";
import nftExploreData from "../../data/nftExploreData";
import NftCard from "../cards/NftCard";
import UploadFile from "./UploadFile";

const CreateNftMain = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={7} lg={9}>
          <Box border={1} borderColor="grey.300" borderRadius={2} p={2}>
            <UploadFile />
          </Box>
        </Grid>
        <Grid item xs={12} md={5} lg={3}>
          <Typography variant="h6" component="h2" gutterBottom>
            Preview Item
          </Typography>
          <NftCard data={nftExploreData[0]} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateNftMain;
