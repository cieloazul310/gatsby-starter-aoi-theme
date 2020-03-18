import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { faCreativeCommons, faReact, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import Layout from 'gatsby-theme-aoi/src/layout';
import AppLink, { AppLinkButton } from 'gatsby-theme-aoi/src/components/AppLink';
import FabIcon from 'gatsby-theme-aoi/src/components/FabIcon';
import { useAppState, useDispatch } from 'gatsby-theme-aoi-top-layout/src/utils/AppStateContext';
import { useToggleDark, useToggleUseSystem, useThemeContextState } from 'gatsby-theme-aoi-top-layout/src/utils/ThemeStateContext';

function SecondPage() {
  const { count } = useAppState();
  const dispatch = useDispatch();
  const { darkMode, useSystemTheme } = useThemeContextState();
  const _toggleDark = useToggleDark();
  const _toggleUseSystem = useToggleUseSystem();
  const _increment = () => {
    dispatch({ type: 'INCREMENT' });
  };
  return (
    <Layout title="Catalogue" maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Catalogue
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Gatsby Theme Aoi layouts, components and hooks.
      </Typography>
      <Section>
        <Typography variant="h4" component="h3" gutterBottom>
          Layouts
        </Typography>
        <Section>
          <Typography variant="h5" component="h4" gutterBottom>
            Default Layout
          </Typography>
          <Typography paragraph>Gatsby Theme Aoi Basic Layout. Easy to customize.</Typography>
        </Section>
        <Section>
          <Typography variant="h5" component="h4" gutterBottom>
            Tab Page Layout
          </Typography>
          <Typography paragraph>Gatsby Theme Aoi Tab Page Layout</Typography>
          <AppLink to="/tab-page/">Example</AppLink>
        </Section>
        <Section>
          <Typography variant="h5" component="h4" gutterBottom>
            Jumbotron Layout
          </Typography>
          <Typography paragraph>Gatsby Theme Aoi Jumbotron Layout</Typography>
          <AppLink to="/jumbotron/">Example</AppLink>
        </Section>
        <Section>
          <Typography variant="h5" component="h4" gutterBottom>
            Full Width Layout
          </Typography>
          <Typography paragraph>Gatsby Theme Aoi Full Width Layout</Typography>
          <AppLink to="/without-drawer/">Example</AppLink>
        </Section>
      </Section>
      <Section>
        <Typography variant="h4" component="h3" gutterBottom>
          Components
        </Typography>
        <Section>
          <Typography variant="h5" component="h4" gutterBottom>
            AppLink
          </Typography>
          <Typography paragraph>Gatsby Link composed to MuiLink</Typography>
          <AutoMargin>
            <AppLink to="/">This is AppLink</AppLink>
          </AutoMargin>
          <AutoMargin>
            <AppLink to="/" color="primary">
              App Link Color Primary
            </AppLink>
          </AutoMargin>
        </Section>
        <Section>
          <Typography variant="h5" component="h4" gutterBottom>
            AppLinkButton
          </Typography>
          <Typography paragraph>Gatsby Link composed to MuiButton</Typography>
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
        </Section>
        <Section>
          <Typography variant="h5" component="h4" gutterBottom>
            FabIcon
          </Typography>
          <Typography paragraph>
            Enable to use{' '}
            <MuiLink href="https://fontawesome.com/" color="secondary" target="_blank" rel="noopener noreferrer">
              Font-Awasome
            </MuiLink>{' '}
            Icons as a Material Icon Component.
          </Typography>
          <AutoMargin>
            <FabIcon icon={faReact} />
          </AutoMargin>
          <AutoMargin>
            <FabIcon icon={faGithubAlt} color="primary" />
          </AutoMargin>
          <AutoMargin>
            <FabIcon icon={faCreativeCommons} color="secondary" />
          </AutoMargin>
        </Section>
      </Section>
      <Section>
        <Typography variant="h4" component="h3" gutterBottom>
          Custom Hooks
        </Typography>
        <Section>
          <Typography variant="h5" component="h4" gutterBottom>
            useSiteMetadata
          </Typography>
          <Typography paragraph>Easy to use site metadata. Gatsby Static Query</Typography>
        </Section>
        <Section>
          <Typography variant="h5" component="h4" gutterBottom>
            useSocialShare
          </Typography>
          <Typography paragraph>Easy to use Social Share Url for Twitter, Facebook and Line.</Typography>
        </Section>
        <Section>
          <Typography variant="h5" component="h4" gutterBottom>
            useAppState
          </Typography>
          <Typography paragraph>Returns current App State.</Typography>
          <Typography paragraph>Count: {count}</Typography>
        </Section>
        <Section>
          <Typography variant="h5" component="h4" gutterBottom>
            useDispatch
          </Typography>
          <Typography paragraph>Returns dispatch of App State.</Typography>
          <Button variant="contained" onClick={_increment}>
            Increment
          </Button>
        </Section>
        <Section>
          <Typography variant="h5" component="h4" gutterBottom>
            useThemeContextState
          </Typography>
          <Typography paragraph>Returns theme Context State.</Typography>
          <Typography>darkMode: {`${darkMode}`}</Typography>
          <Typography>useSystemTheme: {`${useSystemTheme}`}</Typography>
        </Section>
        <Section>
          <Typography variant="h5" component="h4" gutterBottom>
            useToggleDark
          </Typography>
          <Typography paragraph>Returns callback to toggle lightmode / darkmode state.</Typography>
          <Button variant="contained" onClick={_toggleDark}>
            Toggle Dark
          </Button>
        </Section>
        <Section>
          <Typography variant="h5" component="h4" gutterBottom>
            useToggleUseSystem
          </Typography>
          <Typography paragraph>Returns callback to toggle useSystemTheme (enable auto dark mode) state.</Typography>
          <Button variant="contained" onClick={_toggleUseSystem}>
            Toggle Use System Theme
          </Button>
        </Section>
      </Section>
    </Layout>
  );
}

export default SecondPage;

interface SectionProps {
  children: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
}

function Section({ children }: SectionProps) {
  return (
    <Box py={2} component="section">
      {children}
    </Box>
  );
}

function AutoMargin({ children }: { children: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[] }) {
  return (
    <Box component="span" mr={2} py={1}>
      {children}
    </Box>
  );
}
