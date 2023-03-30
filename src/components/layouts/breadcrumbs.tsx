import {
  Breadcrumbs,
  Typography,
  Link,
  Box,
  Container,
  Grid,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const AppBreadCrumbs = () => {
  return (
    <Container sx={{ pt: 2, pb: 2 }}>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        <Grid item xs={12}>
          <Box>
            <Breadcrumbs
              maxItems={2}
              aria-label="breadcrumb"
              separator={<NavigateNextIcon fontSize="small" />}
            >
              <Link underline="hover" color="inherit" href="#">
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Home
              </Link>
              <Link underline="hover" color="inherit" href="#">
                <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Catalog
              </Link>
              <Link underline="hover" color="inherit" href="#">
                <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Accessories
              </Link>
              <Typography color="text.primary">Belts</Typography>
            </Breadcrumbs>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
