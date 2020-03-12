# gatsby-starter-aoi-theme

> A starter kit for TypeScript-based Gatsby projects Material-UI.

DEMO: https://cieloazul310.github.io/gatsby-starter-aoi-theme/

## Features

- TypeScript
- Material-UI
- Storybook
- Responsive UI
- Hold App State
- Dark Mode

## Getting Started

```sh
gatsby new ${your_project} https://github.com/cieloazul310/gatsby-starter-aoi-theme
```

## Use Aoi-Layout

```tsx
import Layout from 'gatsby-theme-aoi/src/layout/';

export default function Page() {
  return (
    <Layout maxWidth="md">
      <p>Hello, Aoi!</p>
    </Layout>
  );
}
```

### Aoi Layout Structure

```tsx
<Box>
  <Header /> //fixed
  <Drawer />
  <Container>
    <Box>
      <main>{children}</main>
      <Footer />
    </Box>
  </Container>
  <Fab /> //fixed
  <BottomNavigation /> //fixed
</Box>
```

## Customize Themes and Layouts

Gatsby Shadowing is good.

```txt
src
├── gatsby-theme-aoi //shadowing
│   ├── components
│   └── layout
├── gatsby-theme-aoi-top-layout //shadowing
│   └── utils
│       ├── AppState.ts
│       ├── ThemeState.ts
│       └── theme.ts
└── pages
    ├── 404.tsx
    ├── index.tsx
    └── page-2.tsx
```

### Set Your Theme

#### ./src/gatsby-theme-aoi-top-layout/utils/theme.ts

```tsx
// Your Primary Color
import teal from '@material-ui/core/colors/teal';
// Your Secondary Color
import orange from '@material-ui/core/colors/orange';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
});

export default responsiveFontSizes(theme);
```

### Custom Layout

#### ./src/gatsby-theme-aoi/layout/Drawer/



<!--
The [default Gatsby starter](https://github.com/gatsbyjs/gatsby-starter-default) converted to [TypeScript](https://www.typescriptlang.org/).

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/)

Install this starter (assuming Gatsby is installed) by running from your CLI:
```
gatsby new gatsby-starter-typescript https://github.com/haysclark/gatsby-starter-typescript
```

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/haysclark/gatsby-starter-typescript)
-->
