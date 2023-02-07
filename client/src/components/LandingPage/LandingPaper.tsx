import { Box, Button, Link, Paper, styled, Typography } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  maxWidth: '620px',
  margin: '1rem',
  padding: '1rem 2.5rem 3rem 2.5rem',
  position: 'absolute',
  textAlign: 'center',
  zIndex: '5000',
}));

const LandingPaper = () => (
  <StyledPaper>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 6,
      }}
    >
      <Typography
        sx={{
          fontWeight: '700',
          marginBottom: '1rem',
        }}
        variant="h3"
      >
        Find true love today
      </Typography>
      <Typography>
        Make your connection and start building something real with us. Join
        imibonano  or sign in if you already have an account.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          mt: 1,
          width: '100%',
        }}
      >
        <Link
          href="/signup"
          variant="body2"
          sx={{
            mb: 2,
            mt: 2,
            width: '35%',
          }}
        >
          <Button fullWidth sx={{ mb: 2, mt: 2 }} variant="contained">
            Join
          </Button>
        </Link>
        <Link
          href="/login"
          variant="body2"
          sx={{
            mb: 2,
            mt: 2,
            width: '35%',
          }}
        >
          <Button fullWidth sx={{ mb: 2, mt: 2 }} variant="outlined">
            Sign in
          </Button>
        </Link>
      </Box>
    </Box>
  </StyledPaper>
);

export default LandingPaper;