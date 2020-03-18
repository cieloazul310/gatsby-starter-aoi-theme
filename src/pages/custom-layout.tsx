import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from 'gatsby-theme-aoi/src/layout';
import { AppLinkButton } from 'gatsby-theme-aoi/src/components/AppLink';

function CustomLayout() {
  return (
    <Layout
      componentViewports={{
        PermanentDrawer: 'lgUp',
        Fab: 'lgDown',
      }}
      maxWidth="md"
      title="Custom Layout"
    >
      <Typography variant="h2" gutterBottom>
        Custom Layout
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

export default CustomLayout;
