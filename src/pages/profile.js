import React, { Component } from "react";
import UserDetails from "../components/UserDetails";
import Grid from "@material-ui/core/Grid";


class profile extends Component {
    render() {
        return(
            <Grid container spacing={10}>
            <Grid item sm={8} xs={12}>
             <p>Content...</p>{/*   To Do: Skills, Search field Trust Button, friends,follow button, Accept and reject button */}
            </Grid> 
            <Grid item sm={4} xs={12}>
              <UserDetails />
            </Grid>
           </Grid>

        )
    }
}
export default profile;
        
    
 