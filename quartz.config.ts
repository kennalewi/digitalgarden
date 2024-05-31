import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "kenna's digital garden",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "kennalewis.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Chakra Petch",
        body: "Maven Pro",
        code: "Tomorrow"
      },
      colors: {
        lightMode: {
          light2: "#f8f1e4",
          light: "#fbf7ee",       // adapted from #DAD7CD to #fbf7ee
          lightgray: "#e0dcd3",   // adapted from #abb0ad to #e0dcd3
          gray: "#88976e",        // same in both modes
          darkgray: "#2c3831",    // adapted from #2c3831 to #2a354b
          dark: "#161a18",        // adapted from #161a18 to #08142c
          secondary: "#3a5a40",   // adapted from #3A5A40 to #274b75
          tertiary: "#5e7e64",    // same in both modes
          highlight: "#8f9fa926"  // same in both modes
        },
        darkMode: {
          light2: "#101512",
          light: "#161a18",
          lightgray: "#2c3831",
          gray: "#A3B18A",
          darkgray: "#abb0ad",
          dark: "#DAD7CD",
          secondary: "#3A5A40",
          tertiary: "#dad7cdc2",
          highlight: "#8f9fa926"
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Poetry(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
