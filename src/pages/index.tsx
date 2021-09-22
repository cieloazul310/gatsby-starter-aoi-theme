import * as React from 'react';
// import Typography from '@material-ui/core/Typography';
import Typography from '@mui/material/Typography';
import Jumbotron from 'gatsby-theme-aoi/src/components/Jumbotron';
import AppLink, { AppLinkButton } from 'gatsby-theme-aoi/src/components/AppLink';
import Section, { SectionDivider } from 'gatsby-theme-aoi/src/components/Section';
import Article, { ArticleSection, H3 } from 'gatsby-theme-aoi/src/components/Article';
import Layout from 'gatsby-theme-aoi/src/layout';
import { useAppState } from 'gatsby-theme-aoi-top-layout/src/utils/AppStateContext';

function IndexPage() {
  const { count } = useAppState();
  return (
    <Layout>
      <Jumbotron title="Gatsby Theme Aoi" />
      <SectionDivider />
      <Section>
        <Article>
          <ArticleSection>
            <H3>Features</H3>
            <Typography component="ul" paragraph>
              <Typography component="li">TypeScript</Typography>
              <Typography component="li">Material-UI</Typography>
              <Typography component="li">Mobile friendlly responsive UI layout</Typography>
              <Typography component="li">Holding App State / Count: {count}</Typography>
              <Typography component="li">Dark Mode</Typography>
              <Typography component="li">Storybook</Typography>
            </Typography>
          </ArticleSection>
          <ArticleSection>
            <H3>Layouts</H3>
            <Typography component="ul" paragraph>
              <Typography component="li">Simple with Drawer</Typography>
              <Typography component="li">
                Tab Layout <AppLink to="/tab-page/">Example</AppLink>
              </Typography>
              <Typography component="li">
                Jumbotron <AppLink to="/jumbotron/">Example</AppLink>
              </Typography>
              <Typography component="li">
                Full Width <AppLink to="/without-drawer/">Example</AppLink>
              </Typography>
            </Typography>
          </ArticleSection>
          <AppLinkButton to="/page-2/">Go to Page 2</AppLinkButton>
        </Article>
      </Section>
    </Layout>
  );
}

export default IndexPage;
