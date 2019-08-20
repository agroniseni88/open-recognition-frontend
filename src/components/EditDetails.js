import React, { Component,Fragment } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { connect } from 'react-redux';
import { editUserDetails } from '../redux/actions/userActions'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import EditIcon from '@material-ui/icons/Edit'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button'
const styles =  {
      button: {
        float: "right"

    },
    

}
class EditDetails extends Component {
    state = {
        story: '',
        website: '',
        location: '',
        open: false
    };
    mapUserDetailsToState = (credentials) => {
        this.setState({
            story: credentials.story ? credentials.story : '',
            website: credentials.website ? credentials.website : '',
            location: credentials.location ? credentials.location : '',
    
            });


        }
    handleOpen = () => {
        this.setState({open:true})
        this.mapUserDetailsToState(this.props.credentials)

    }
    handleClose = () => {
        this.setState({open:false});

    }
    componentDidMount(){
        const {credentials} = this.props;
        this.mapUserDetailsToState(credentials);
    }
    
        handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
    
        };
        handleSubmit = () =>{
            const userDetails = {
                story: this.state.story,
                website: this.state.website,
                location: this.state.location


            }
            this.props.editUserDetails(userDetails)
            this.handleClose();

        }
    
    render() {
        const {classes} = this.props;
        return (
         <Fragment>
             <Tooltip title="Edit details" placement="Top">
                 <IconButton onClick={this.handleOpen} classeName={classes.button}>
                     <EditIcon colors="primary"/>


                     
                 </IconButton>

             </Tooltip>
             <Dialog
             open={this.state.open}
             onClose= {this.handleClose}
             fullWidth
             maxWidth="sm">
                 <DialogTitle>Edit your Details</DialogTitle>
                 <DialogContent>
                     <form>
                         <TextField
                         name="story"
                         type="text"
                         label="Story"
                         multiline
                         rows="2"
                         placeholder="A short story about yourself"
                         className={classes.textfield}
                         value={this.state.story}
                         onChange={this.handleChange}
                         fullWidth/>
                         <TextField
                         name="website"
                         type="text"
                         label="Website"
                         placeholder="wiki"
                         className={classes.textfield}
                         value={this.state.website}
                         onChange={this.handleChange}
                         fullWidth/>
                         <TextField
                         name="location"
                         type="text"
                         label="Location"
                         placeholder="Your current address"
                         className={classes.textfield}
                         value={this.state.location}
                         onChange={this.handleChange}
                         fullWidth/>


                     </form>
                 </DialogContent>
                 <DialogActions>
                     <Button onClick={this.handleClose} color="primary">
                         Cancel</Button>
                         <Button onClick={this.handleSubmit} color="primary">
                         Save</Button>
                 </DialogActions>

             </Dialog>
         </Fragment>
        )
    }
}
EditDetails.propTypes = {
    editUserDetails: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    credentials: state.user.credentials

})

export default connect(mapStateToProps,{editUserDetails})(withStyles(styles)(EditDetails))