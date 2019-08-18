import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress'
//import { threadId } from 'worker_threads';
import {connect} from 'react-redux'
import {signupUser} from '../redux/actions/userActions'
const styles = (theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
 form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
class signup extends Component {
  constructor(){
    super();
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        username: '',
        
        errors:{}
    }
}
componentWillReceiveProps(nextProps){
  if(nextProps.UI.errors){
  this.setState({errors: nextProps.UI.errors})
}
}
handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    const newUserData = {
       firstName: this.state.firstName,
       lastName: this.state.lastName,
       username: this.state.username,
       email: this.state.email,
       password: this.state.password,

    }
    this.props.signupUser(newUserData, this.props.history)
  }
    
handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })

}
render() {
  const { classes, UI: {loading} } = this.props;
  const{errors} = this.state;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
       <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                helperText = {errors.email}
                error={errors.email ? true : false}
                value={this.state.firstName} onChange={this.handleChange}
                autoFocus

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                helperText = {errors.email}
                error={errors.email ? true : false}
                
                value={this.state.lastName} onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                helperText = {errors.email}
                error={errors.email ? true : false}
                value={this.state.email} onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                helperText = {errors.email}
                error={errors.email ? true : false}
                value={this.state.username} onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                helperText = {errors.email}
                error={errors.email ? true : false}
                value={this.state.password} onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" align="center">
                {"You agree to the Open Recognition User Agreement, Privacy Policy, and Cookie Policy."}
                </Typography>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Agree & Sign Up
            {loading && (
                <CircularProgress className={classes.progress}/>
              )}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
}
signup.propTypes = {
  classes: PropTypes.object.isRequired,
  user : PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired

}
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI

})



export default connect(mapStateToProps,{signupUser}) (withStyles(styles)(signup));



