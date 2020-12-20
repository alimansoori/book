import { Container, Grid, Segment } from "semantic-ui-react";
import SideBar from "./SideBar";

function StoreLayout({ children, sidebar, centered, router }) {


    return (
        <Grid centered={centered} columns={2} style={{ marginTop: "100px" }}>
            {sidebar ? (
                <Grid.Column width={4}><SideBar router={router} /></Grid.Column>
            ) : ('')}
            
            <Grid.Column width={sidebar ? 12 : 16}>
                <div className='article'>
                    <Container className="main" >
                        <Grid>
                            {children}
                        </Grid>
                    </Container>
                </div>
            </Grid.Column>
        </Grid>
    )
}

export default StoreLayout;