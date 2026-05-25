import DashboardRounded from "@mui/icons-material/DashboardRounded";
import StorefrontRounded from "@mui/icons-material/StorefrontRounded";
import UploadRounded from "@mui/icons-material/UploadRounded";
import {
  AppBar,
  Box,
  Button,
  Chip,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";

export default function Header({ view, setView, health }) {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: "1px solid", borderColor: "divider", backdropFilter: "blur(14px)" }}
    >
      <Toolbar sx={{ minHeight: "74px", gap: 2, px: { xs: 2, md: 4 } }}>
        <Stack direction="row" spacing={1.25} alignItems="center">
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 1,
              display: "grid",
              placeItems: "center",
              bgcolor: "text.primary",
              color: "background.paper",
              fontWeight: 900,
              fontSize: 12,
            }}
          >
            RN
          </Box>
          <Box>
            <Typography variant="h6" lineHeight={1}>
              RentNest
            </Typography>
            <Chip
              size="small"
              label={health?.dataMode === "mongodb" ? "MongoDB live" : "Demo data mode"}
              sx={{ height: 18, fontSize: 11, bgcolor: "rgba(8,123,108,0.12)", color: "text.secondary" }}
            />
          </Box>
        </Stack>

        <Box sx={{ ml: "auto" }}>
          <ToggleButtonGroup exclusive value={view} onChange={(_, next) => next && setView(next)} size="small">
            <ToggleButton value="marketplace">
              <StorefrontRounded sx={{ mr: 0.75, fontSize: 18 }} />
              Marketplace
            </ToggleButton>
            <ToggleButton value="admin">
              <DashboardRounded sx={{ mr: 0.75, fontSize: 18 }} />
              Admin Portal
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Button
          href="#rent-out"
          variant="contained"
          color="primary"
          startIcon={<UploadRounded />}
          sx={{ display: { xs: "none", sm: "inline-flex" } }}
        >
          List your item
        </Button>
      </Toolbar>
    </AppBar>
  );
}
