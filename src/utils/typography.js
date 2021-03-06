import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    html: {
      backgroundColor: '#ccc',
    },
    footer: {
      fontSize: '0.8rem',
      marginTop: '5rem',
    },
    code: {
      fontSize: '1rem',
      color: '#369',
    },
    pre: {
      overflow: 'auto',
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
