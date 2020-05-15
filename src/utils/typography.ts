import '../styles/global.css'
import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => ({
    a: {
        color: 'var(--anchorLink)',
    },
    // gatsby-remark-autolink-headers - don't underline when hidden
    'a.anchor': {
        boxShadow: 'none',
    },
    // gatsby-remark-autolink-headers - use theme colours for the link icon
    'a.anchor svg[aria-hidden="true"]': {
        stroke: 'var(--textLink)',
    },
    'a.gatsby-resp-image-link': {
        boxShadow: `none`,
    },
    'p code': {
        fontSize: '1rem',
    },
    'h1 code, h2 code, h3 code, h4 code, h5 code, h6 code': {
        fontSize: 'inherit',
    },
    'li code': {
        fontSize: '1rem',
    },
    hr: {
        background: 'var(--hr)',
    },
    blockquote: {
        color: 'inherit',
        borderLeftColor: 'inherit',
        opacity: '0.8',
    },
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
