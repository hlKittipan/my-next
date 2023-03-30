import {
  Box,
  Container,
  Grid,
  Typography,
  BottomNavigation,
} from "@mui/material";
import styles from "@styles/Home.module.css";

export const Footer = () => {
  return (
    <BottomNavigation>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          bottom: "0",
        }}
      >
        <Container maxWidth="lg">
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
              <Typography color="textSecondary" variant="subtitle1">
                Power by <span className={styles.logo}> Kittipan </span>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </BottomNavigation>
  );
};
