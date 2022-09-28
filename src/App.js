import { Button, Checkbox, FormControlLabel, TextField, Link, Grid, Typography, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Container } from '@mui/system';

function App() {
	return (
		<>
    <Container component='main' maxWidth='xs'>
			<Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' sx={{mb: 3, fontWeight: 700}}>Sign in</Typography>
				<TextField margin='normal' label='Email Address' required fullWidth name='email' autoComplete='email' autoFocus  />
				<TextField label='Password' type='password' required fullWidth name='password' autoComplete='current-password' sx={{ mb: 1 }} />
				<FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember Me' />
				<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 3 }}>
					Log in
				</Button>
				<Grid container sx={{ pt: '10px' }}>
					<Grid item xs>
						<Link>Forgot password?</Link>
					</Grid>
					<Grid item>
						<Link>Sign up</Link>
					</Grid>
				</Grid>
			</Box>
      </Container>
		</>
	);
}

export default App;
