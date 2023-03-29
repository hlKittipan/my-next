import { Breadcrumbs, Typography, Link, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const AppBreadCrumbs = () => {
  return (
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
        <Link underline="hover" color="inherit" href="#">
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          New Collection
        </Link>
        <Typography color="text.primary">Belts</Typography>
      </Breadcrumbs>
    </Box>
  );
};
