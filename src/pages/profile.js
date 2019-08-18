import React, { Component } from 'react'
import userDetails from './userDetails'
import Grid from '@material-ui/core/Grid';

class profile extends Component {
    render() {
       
        return (
            <Grid container>
                <Grid item sm={8} xs={12}>
                    <p>Content....</p>
               

                </Grid>
                <Grid item sm={4} xs={12}>
                    <userDetails/>

                </Grid>

            </Grid>
           
               
                
                 
            
           
        
           
        )
    }
}
export default profile



