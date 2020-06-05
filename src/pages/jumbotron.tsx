import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Layout from 'gatsby-theme-aoi/src/layouts/JumbotronLayout';
import { AppLinkButton } from 'gatsby-theme-aoi/src/components/AppLink';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    jumbotron: {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.getContrastText(theme.palette.secondary.light),
      height: 280,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: theme.spacing(4),
    },
  })
);

function JumbotronPage() {
  const classes = useStyles();
  return (
    <Layout
      title="JumbotronPage"
      maxWidth="md"
      jumbotron={
        <Box className={classes.jumbotron}>
          <Typography variant="subtitle1">Gatsby Theme Aoi</Typography>
          <Typography variant="h2">Jumbotron Layout</Typography>
        </Box>
      }
    >
      <Typography variant="h4" component="h3" gutterBottom>
        This is Jumbotron Layout
      </Typography>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec quam quis nulla dignissim finibus. Morbi aliquam quam ut efficitur
        feugiat. Duis viverra elit eu diam tincidunt lobortis. Proin lorem justo, faucibus et mollis ut, lobortis nec nisi. Ut nisi mauris,
        varius nec metus id, rhoncus scelerisque nisl. Morbi leo urna, pretium quis maximus ut, suscipit at arcu. Maecenas ultrices, risus
        ac mattis malesuada, risus risus aliquet ex, ac condimentum ex enim eget libero. Sed fermentum rutrum urna, vitae suscipit nunc
        tempus eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse luctus mattis dui,
        quis eleifend enim convallis eget. Phasellus nec luctus leo. Proin condimentum felis nec luctus egestas. In in sagittis augue.
        Quisque feugiat ac diam et laoreet. Curabitur a tempus arcu. Vivamus vulputate posuere vehicula.
      </Typography>
      <AppLinkButton to="/">Back to Top</AppLinkButton>
    </Layout>
  );
}

export default JumbotronPage;
