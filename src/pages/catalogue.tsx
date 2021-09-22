import * as React from 'react';
/*
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
*/
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import Button from '@mui/material/Button';

import { faCreativeCommons, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import Layout from 'gatsby-theme-aoi/src/layout';
import Jumbotron from 'gatsby-theme-aoi/src/components/Jumbotron';
import Section, { SectionDivider } from 'gatsby-theme-aoi/src/components/Section';
import Article, { ArticleSection, ArticleTitle, H3, Paragraph } from 'gatsby-theme-aoi/src/components/Article';
import AppLink, { AppLinkButton } from 'gatsby-theme-aoi/src/components/AppLink';
import FabIcon from 'gatsby-theme-aoi/src/components/FabIcon';
import { useAppState, useDispatch } from '../gatsby-theme-aoi-top-layout/utils/AppStateContext';
import { useToggleDark, useToggleUseSystem, useThemeContextState } from '../gatsby-theme-aoi-top-layout/utils/ThemeStateContext';

// import { useAppState, useDispatch } from 'gatsby-theme-aoi-top-layout/src/utils/AppStateContext';
// import { useToggleDark, useToggleUseSystem, useThemeContextState } from 'gatsby-theme-aoi-top-layout/src/utils/ThemeStateContext';

function SecondPage() {
  const { count } = useAppState();
  const dispatch = useDispatch();
  const { darkMode, useSystemTheme } = useThemeContextState();
  const toggleDark = useToggleDark();
  const toggleUseSystem = useToggleUseSystem();
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };
  return (
    <Layout title="Catalogue">
      <Jumbotron title="Catalogue" />
      <SectionDivider />
      <Section>
        <Article>
          <ArticleTitle>Layouts</ArticleTitle>
          <ArticleSection>
            <H3>Default Layout</H3>
            <Paragraph>Gatsby Theme Aoi Basic Layout. Easy to customize.</Paragraph>
          </ArticleSection>
          <ArticleSection>
            <H3>Tab Page Layout</H3>
            <Paragraph>
              Gatsby Theme Aoi Tab Page Layout
              <br />
              <AppLink to="/tab-page/">Example</AppLink>
            </Paragraph>
          </ArticleSection>
          <ArticleSection>
            <H3>Jumbotron Layout</H3>
            <Paragraph>
              Gatsby Theme Aoi Jumbotron Layout
              <br />
              <AppLink to="/jumbotron/">Example</AppLink>
            </Paragraph>
          </ArticleSection>
          <ArticleSection>
            <H3>Full Width Layout</H3>
            <Paragraph>
              Gatsby Theme Aoi Full Width Layout
              <br />
              <AppLink to="/without-drawer/">Example</AppLink>
            </Paragraph>
          </ArticleSection>
        </Article>
      </Section>
      <SectionDivider />
      <Section>
        <Article>
          <ArticleTitle>Components</ArticleTitle>
          <ArticleSection>
            <H3>AppLink</H3>
            <Paragraph>
              Gatsby Link composed to MuiLink
              <br />
              <AutoMargin>
                <AppLink to="/">This is AppLink</AppLink>
              </AutoMargin>
              <AutoMargin>
                <AppLink to="/" color="primary">
                  App Link Color Primary
                </AppLink>
              </AutoMargin>
            </Paragraph>
          </ArticleSection>
          <ArticleSection>
            <H3>AppLinkButton</H3>
            <Paragraph>
              Gatsby Link composed to MuiButton
              <br />
              <AutoMargin>
                <AppLinkButton to="/">This is AppLinkButton</AppLinkButton>
              </AutoMargin>
              <AutoMargin>
                <AppLinkButton to="/" color="primary">
                  AppLinkButton Color Primary
                </AppLinkButton>
              </AutoMargin>
              <AutoMargin>
                <AppLinkButton variant="contained" to="/">
                  AppLinkButton Contained
                </AppLinkButton>
              </AutoMargin>
            </Paragraph>
          </ArticleSection>
          <ArticleSection>
            <H3>FabIcon</H3>
            <Paragraph>
              Enable to use{' '}
              <MuiLink href="https://fontawesome.com/" color="secondary" target="blank" rel="noopener noreferrer">
                Font-Awasome
              </MuiLink>{' '}
              Icons as a Material Icon Component.
            </Paragraph>
            <Paragraph>
              <AutoMargin>
                <FabIcon icon={faReact} />
              </AutoMargin>
              <AutoMargin>
                <FabIcon icon={faNodeJs} color="primary" />
              </AutoMargin>
              <AutoMargin>
                <FabIcon icon={faCreativeCommons} color="secondary" />
              </AutoMargin>
            </Paragraph>
          </ArticleSection>
        </Article>
      </Section>
      <SectionDivider />
      <Section>
        <Article>
          <ArticleTitle>Custom Hooks</ArticleTitle>
          <ArticleSection>
            <H3>useSiteMetadata</H3>
            <Paragraph>Easy to use site metadata. Gatsby Static Query</Paragraph>
            <H3>useSocialShare</H3>
            <Paragraph>Easy to use Social Share Url for Twitter, Facebook and Line.</Paragraph>
          </ArticleSection>
          <ArticleSection>
            <H3>useAppState</H3>
            <Paragraph>
              Returns current App State.
              <br />
              Count: {count}
            </Paragraph>
          </ArticleSection>
          <ArticleSection>
            <H3>useDispatch</H3>
            <Paragraph>
              Returns dispatch of App State.
              <br />
              <Button variant="contained" onClick={increment}>
                Increment
              </Button>
            </Paragraph>
          </ArticleSection>
          <ArticleSection>
            <H3>useThemeContextState</H3>
            <Paragraph>
              Returns theme Context State.
              <br />
              darkMode: {`${darkMode}`}
              <br />
              useSystemTheme: {`${useSystemTheme}`}
            </Paragraph>
          </ArticleSection>
          <ArticleSection>
            <H3>useToggleDark</H3>
            <Paragraph>
              Returns callback to toggle lightmode / darkmode state.
              <br />
              <Button variant="contained" onClick={toggleDark}>
                Toggle Dark
              </Button>
            </Paragraph>
          </ArticleSection>
          <ArticleSection>
            <H3>useToggleUseSystem</H3>
            <Paragraph>
              Returns callback to toggle useSystemTheme (enable auto dark mode) state.
              <br />
              <Button variant="contained" onClick={toggleUseSystem}>
                Toggle Use System Theme
              </Button>
            </Paragraph>
          </ArticleSection>
        </Article>
      </Section>
    </Layout>
  );
}

export default SecondPage;

function AutoMargin({ children }: { children: React.ReactNode }) {
  return (
    <Box component="span" mr={2} py={1}>
      {children}
    </Box>
  );
}
