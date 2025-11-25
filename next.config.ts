import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    turbopackFileSystemCacheForDev: true,
    scrollRestoration: true,
  },

  async redirects() {
    return [
      {
        source: "/barryvox-app",
        has: [
          {
            type: "header",
            key: "User-Agent",
            value: "(.*)Android(.*)",
          },
          {
            type: "header",
            key: "x-country",
            value: "(?<country>DE|CH|AT|US)",
          },
        ],
        destination:
          "https://play.google.com/store/apps/details?id=com.mammut.barryvox.android.novoice",
        permanent: false,
      },
      {
        source: "/barryvox-app",
        has: [
          {
            type: "header",
            key: "User-Agent",
            value: "(.*)iP(hone|od|ad)(.*)",
          },
          {
            type: "header",
            key: "x-country",
            value: "(?<country>DE|CH|AT|US)",
          },
        ],
        destination: "https://apps.apple.com/app/barryvox/id6737979619",
        permanent: false,
      },
      {
        source: "/barryvox-app",
        has: [
          {
            type: "header",
            key: "User-Agent",
            value: "(.*)Android(.*)",
          },
        ],
        destination:
          "https://play.google.com/store/apps/details?id=com.mammut.barryvox.android.world",
        permanent: false,
      },
      {
        source: "/barryvox-app",
        has: [
          {
            type: "header",
            key: "User-Agent",
            value: "(.*)iP(hone|od|ad)(.*)",
          },
        ],
        destination:
          "https://apps.apple.com/us/app/barryvox-companion/id6741917041",
        permanent: false,
      },
      { source: "/mountain-days", destination: "/", permanent: true },
      {
        source: "/the-extraordinary-jacket",
        destination: "/",
        permanent: true,
      },
      { source: "/IMD", destination: "/", permanent: true },
      {
        source: "/stories-guides/trail-running",
        destination: "/stories-guides/journalCategory/trailrunning",
        permanent: true,
      },
      {
        source: "/stories-guides/journalCategory/trail-running",
        destination: "/stories-guides/journalCategory/trailrunning",
        permanent: true,
      },
      {
        source: "/collection/women-bestsellers",
        destination: "/featured/5810-20/bestseller",
        permanent: true,
      },
      {
        source: "/collection/men-bestsellers",
        destination: "/featured/5810-10/bestseller",
        permanent: true,
      },
      {
        source: "/win-avalanche-equipment",
        destination: "/win-essential-4",
        permanent: true,
      },
      {
        source: "/win-avalanche-training",
        destination: "/",
        permanent: false,
      },
      {
        source: "/internal-offer",
        destination: "/mammut-internal-offer",
        permanent: true,
      },
      { source: "/giving-tuesday", destination: "/", permanent: false },
      {
        source: "/collection/crag-ropes",
        destination: "/category/5867/ropes",
        permanent: true,
      },
      {
        source: "/collection/alpine-ropes",
        destination: "/category/5867/ropes",
        permanent: true,
      },
      {
        source: "/collection/gym-ropes",
        destination: "/category/5867/ropes",
        permanent: true,
      },
      {
        source: "/support/trailrunningevents",
        destination: "/",
        permanent: true,
      },
      {
        source: "/gifts-trail-lovers",
        destination: "/activity/hiking/category/5810/products",
        permanent: true,
      },
      {
        source: "/collection/avalanche-safety",
        destination: "/avalanche-hub",
        permanent: true,
      },
      {
        source: "/collection/bestsellers",
        destination: "/featured/5810/bestseller",
        permanent: true,
      },
      {
        source: "/featured/5810/featured-midlayers",
        destination: "/category/5850/midlayers-and-fleece-jackets",
        permanent: true,
      },
      {
        source: "/rope-finder",
        destination: "/category/5867/ropes",
        permanent: true,
      },
      {
        source: "/stories-guides/advice",
        destination: "/stories-guides/postType/advice",
        permanent: true,
      },
      {
        source: "/stories-guides/stories",
        destination: "/stories-guides/postType/stories",
        permanent: true,
      },
      {
        source: "/stories-guides/videos",
        destination: "/stories-guides/postType/videos",
        permanent: true,
      },
      {
        source: "/stories-guides/interviews",
        destination: "/stories-guides/postType/interview",
        permanent: true,
      },
      {
        source: "/stories-guides/responsibility",
        destination: "/stories-guides/journalCategory/responsibility",
        permanent: true,
      },
      {
        source: "/stories-guides/functionalities",
        destination: "/stories-guides/journalCategory/functionalities",
        permanent: true,
      },
      {
        source: "/stories-guides/avalanche-safety",
        destination: "/stories-guides/journalCategory/avalanche-safety",
        permanent: true,
      },
      {
        source: "/stories-guides/expeditions",
        destination: "/stories-guides/journalCategory/expeditions",
        permanent: true,
      },
      {
        source: "/stories-guides/mountaineering",
        destination: "/stories-guides/journalCategory/mountaineering",
        permanent: true,
      },
      {
        source: "/stories-guides/hiking",
        destination: "/stories-guides/journalCategory/hiking",
        permanent: true,
      },
      {
        source: "/stories-guides/skiing",
        destination: "/stories-guides/journalCategory/skiing",
        permanent: true,
      },
      {
        source: "/stories-guides/climbing",
        destination: "/stories-guides/journalCategory/climbing",
        permanent: true,
      },
      {
        source: "/responsibility-report-2023",
        destination:
          "https://downloads.ctfassets.net/l595fda2nfqd/2sORITvV07yOeByJvsJvAS/a31870821e765a61a35262d569c29717/2023_Responsibility_Report_Mammut.pdf",
        permanent: true,
      },
      {
        source: "/support/careers",
        destination: "/careers",
        permanent: true,
      },
      { source: "/suunto-x-mammut", destination: "/", permanent: true },
      {
        source: "/company/jobs",
        destination: "https://recruiting.mammut.com/Jobs/All",
        permanent: true,
      },
      {
        source: "/learn-to-ski-or-ride",
        destination: "/avalanche-hub",
        permanent: true,
      },
      { source: "/crforum", destination: "/", permanent: false },
      {
        source: "/transparency-act-2023",
        destination:
          "https://assets.ctfassets.net/l595fda2nfqd/2kUtXzcdtN6OfNPayQjMOe/cd451f48f5919c2f2604627d9e9cc873/Norwegian_Mammut_Transparency_Act_210623_final_Version_1.1.pdf",
        permanent: true,
      },
      {
        source: "/responsibility-report-2022",
        destination:
          "https://assets.ctfassets.net/l595fda2nfqd/6YcswqWxr9XNPVCmHQlvut/84fba945c27a220091ee860139aafae5/230628_ResReport_2022_final.pdf",
        permanent: true,
      },
      {
        source: "/collection/pre-sale-equipment",
        destination: "/category/5858/equipment",
        permanent: false,
      },
      {
        source: "/collection/pre-sale-equipment-us",
        destination: "/category/5858/equipment",
        permanent: false,
      },
      {
        source: "/collection/footwear-offer-men",
        destination: "/category/5811-10/schuhe",
        permanent: false,
      },
      {
        source: "/collection/footwear-offer-women",
        destination: "/category/5811-20/schuhe",
        permanent: false,
      },
      { source: "/mmd", destination: "/", permanent: true },
      { source: "/MMD", destination: "/", permanent: true },
      {
        source: "/collection/trail-running",
        destination: "/trailrunning",
        permanent: false,
      },
      {
        source: "/support/trailrunningmeetups",
        destination: "/trailrunning",
        permanent: false,
      },
      {
        source: "/change",
        destination: "/journal/responsibility/climeworks",
        permanent: true,
      },
      {
        source: "/unternehmen/jobs",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/aspects-ride",
        destination: "/journal/avalanche-safety/aspects-along-for-the-ride",
        permanent: true,
      },
      { source: "/imd", destination: "/", permanent: false },
      { source: "/unless-x-mammut", destination: "/", permanent: false },
      { source: "/unless-x-imd", destination: "/", permanent: true },
      {
        source: "/care-instructions",
        destination: "/support/product-support/care-instructions",
        permanent: true,
      },
      {
        source: "/care-instruction",
        destination: "/support/product-support/care-instructions",
        permanent: true,
      },
      {
        source: "/careinstruction",
        destination: "/support/product-support/care-instructions",
        permanent: true,
      },
      {
        source: "/careinstructions",
        destination: "/support/product-support/care-instructions",
        permanent: true,
      },
      {
        source: "/care",
        destination: "/support/product-support/care-instructions",
        permanent: true,
      },
      {
        source: "/collection/men-summer-favorites ",
        destination: "/featured/5810-10/bestseller",
        permanent: false,
      },
      {
        source: "/aegility-pro-mid-shoe",
        destination: "/products/3030-04570-00533/aegility-pro-mid-dt-men",
        permanent: true,
      },
      {
        source: "/responsibility-report-2021",
        destination:
          "https://assets.ctfassets.net/l595fda2nfqd/1kiq5dZDyntAdWJUgt4keb/6dddb4e7856587368c19a9ac27eb22da/Mammut_Responsibility_Report_2021.pdf",
        permanent: true,
      },
      {
        source: "/wecare",
        destination: "/responsibility",
        permanent: true,
      },
      {
        source: "/cartridge-rental",
        destination:
          "/support/product-support/avalanche-airbags/cartridge-rental",
        permanent: true,
      },
      {
        source: "/airbags",
        destination: "/support/product-support/avalanche-airbags",
        permanent: true,
      },
      {
        source: "/reachyourpeak.mammut.com/",
        destination: "/",
        permanent: true,
      },
      { source: "/reachyourpeak", destination: "/", permanent: true },
      { source: "/Reachyourpeak", destination: "/", permanent: true },
      { source: "/ReachYourPeak", destination: "/", permanent: true },
      {
        source: "/tfg",
        destination: "/together-for-glaciers",
        permanent: true,
      },
      {
        source: "/BarryvoxServiceSoftware",
        destination: "/support/product-support/barryvox/pc-software-and-tools",
        permanent: true,
      },
      {
        source: "/goretexpro",
        destination: "/gore-tex-pro",
        permanent: true,
      },
      {
        source: "/GoreTexPro",
        destination: "/gore-tex-pro",
        permanent: true,
      },
      {
        source: "/cartridge-refill",
        destination:
          "/support/product-support/avalanche-airbags/cartridge-rental",
        permanent: true,
      },
      {
        source: "/airbags-travel",
        destination:
          "/support/product-support/avalanche-airbags/cartridge-rental",
        permanent: true,
      },
      {
        source: "/barryvox",
        destination: "/support/product-support/barryvox",
        permanent: true,
      },
      {
        source: "/:channel/:locale/journal/:categorySlug/:postSlug",
        destination: "/:channel/:locale/stories-guides/:postSlug",
        permanent: true,
      },
      {
        source: "/:channel/:locale/journal/overview",
        destination: "/:channel/:locale/stories-guides",
        permanent: true,
      },
      {
        source: "/:channel/:locale/journal/overview/:path*",
        destination: "/:channel/:locale/stories-guides",
        permanent: true,
      },
      {
        source: "/:channel/:locale/journal",
        destination: "/:channel/:locale/stories-guides",
        permanent: true,
      },
      {
        source: "/:channel/:locale/cart/wishlist",
        destination: "/:channel/:locale/saved/wishlist",
        permanent: true,
      },
      {
        source: "/:channel/:locale/cart/bag",
        destination: "/:channel/:locale/cart",
        permanent: true,
      },
      {
        source: "/:channel/:locale/cart/products",
        destination: "/:channel/:locale/saved/recently-viewed",
        permanent: true,
      },
      {
        source: "/:channel/:locale/barryvox/registration/:match*",
        destination:
          "/:channel/:locale/support/product-support/barryvox/registration:match*",
        permanent: true,
      },
      {
        source: "/barryvox/registration/:match*",
        destination:
          "/int/en/support/product-support/barryvox/registration:match*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/checkout/login/:match*",
        destination:
          "https://checkout.mammut.com/:channel/:locale/checkout/login/:match*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/category/featured/:categorySlug/:match*",
        destination: "/:channel/:locale/featured/5810/:categorySlug/:match*",
        permanent: true,
      },
      {
        source:
          "/:channel/:locale/category/featured-:gender/:categorySlug/:match*",
        destination:
          "/:channel/:locale/featured/5810-:gender/:categorySlug/:match*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/saved/wishlist",
        destination: "/:channel/:locale/saved",
        permanent: false,
      },
      {
        source: "/:channel/:locale/saved/recently-viewed",
        destination: "/:channel/:locale/saved",
        permanent: false,
      },
      {
        source: "/account/:match*",
        destination: "/int/en/account/:match*",
        permanent: true,
      },
      {
        source: "/referral/:code",
        destination: "https://rwrd.io/:code",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "fr/fr" }],
        destination: "/fr/fr",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "fr/fr" }],
        destination: "/fr/fr",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "fr/fr" }],
        destination: "/fr/fr/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "us/en" }],
        destination: "/us/en",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "us/en" }],
        destination: "/us/en",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "us/en" }],
        destination: "/us/en/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "us-pfas-free/en" }],
        destination: "/us-pfas-free/en",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "us-pfas-free/en" }],
        destination: "/us-pfas-free/en",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "us-pfas-free/en" }],
        destination: "/us-pfas-free/en/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "de/de" }],
        destination: "/de/de",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "de/de" }],
        destination: "/de/de",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "de/de" }],
        destination: "/de/de/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "no/en" }],
        destination: "/no/en",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "no/en" }],
        destination: "/no/en",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "no/en" }],
        destination: "/no/en/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "no/no" }],
        destination: "/no/no",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "no/no" }],
        destination: "/no/no",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "no/no" }],
        destination: "/no/no/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "at/de" }],
        destination: "/at/de",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "at/de" }],
        destination: "/at/de",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "at/de" }],
        destination: "/at/de/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "ch/de" }],
        destination: "/ch/de",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "ch/de" }],
        destination: "/ch/de",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "ch/de" }],
        destination: "/ch/de/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "ch/fr" }],
        destination: "/ch/fr",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "ch/fr" }],
        destination: "/ch/fr",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "ch/fr" }],
        destination: "/ch/fr/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "ch/it" }],
        destination: "/ch/it",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "ch/it" }],
        destination: "/ch/it",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "ch/it" }],
        destination: "/ch/it/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "uk/en" }],
        destination: "/uk/en",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "uk/en" }],
        destination: "/uk/en",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "uk/en" }],
        destination: "/uk/en/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "be/en" }],
        destination: "/be/en",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "be/en" }],
        destination: "/be/en",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "be/en" }],
        destination: "/be/en/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "be/nl" }],
        destination: "/be/nl",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "be/nl" }],
        destination: "/be/nl",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "be/nl" }],
        destination: "/be/nl/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "be/fr" }],
        destination: "/be/fr",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "be/fr" }],
        destination: "/be/fr",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "be/fr" }],
        destination: "/be/fr/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "it/en" }],
        destination: "/it/en",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "it/en" }],
        destination: "/it/en",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "it/en" }],
        destination: "/it/en/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "it/it" }],
        destination: "/it/it",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "it/it" }],
        destination: "/it/it",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "it/it" }],
        destination: "/it/it/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "nl/en" }],
        destination: "/nl/en",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "nl/en" }],
        destination: "/nl/en",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "nl/en" }],
        destination: "/nl/en/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "nl/nl" }],
        destination: "/nl/nl",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "nl/nl" }],
        destination: "/nl/nl",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "nl/nl" }],
        destination: "/nl/nl/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "se/en" }],
        destination: "/se/en",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "se/en" }],
        destination: "/se/en",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "se/en" }],
        destination: "/se/en/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "se/sv" }],
        destination: "/se/sv",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "se/sv" }],
        destination: "/se/sv",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "se/sv" }],
        destination: "/se/sv/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "dk/en" }],
        destination: "/dk/en",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "dk/en" }],
        destination: "/dk/en",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "dk/en" }],
        destination: "/dk/en/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "dk/da" }],
        destination: "/dk/da",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "dk/da" }],
        destination: "/dk/da",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "dk/da" }],
        destination: "/dk/da/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "sk/en" }],
        destination: "/sk/en",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "sk/en" }],
        destination: "/sk/en",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "sk/en" }],
        destination: "/sk/en/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "sk/sk" }],
        destination: "/sk/sk",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "sk/sk" }],
        destination: "/sk/sk",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "sk/sk" }],
        destination: "/sk/sk/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "cz/en" }],
        destination: "/cz/en",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "cz/en" }],
        destination: "/cz/en",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "cz/en" }],
        destination: "/cz/en/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "cz/cs" }],
        destination: "/cz/cs",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "cz/cs" }],
        destination: "/cz/cs",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "cz/cs" }],
        destination: "/cz/cs/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "pl/en" }],
        destination: "/pl/en",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "pl/en" }],
        destination: "/pl/en",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "pl/en" }],
        destination: "/pl/en/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "pl/pl" }],
        destination: "/pl/pl",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "pl/pl" }],
        destination: "/pl/pl",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "pl/pl" }],
        destination: "/pl/pl/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "es/en" }],
        destination: "/es/en",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "es/en" }],
        destination: "/es/en",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "es/en" }],
        destination: "/es/en/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "es/es" }],
        destination: "/es/es",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "es/es" }],
        destination: "/es/es",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "es/es" }],
        destination: "/es/es/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "si/en" }],
        destination: "/si/en",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "si/en" }],
        destination: "/si/en",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "si/en" }],
        destination: "/si/en/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "si/sl" }],
        destination: "/si/sl",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "si/sl" }],
        destination: "/si/sl",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "si/sl" }],
        destination: "/si/sl/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "fi/en" }],
        destination: "/fi/en",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "fi/en" }],
        destination: "/fi/en",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "fi/en" }],
        destination: "/fi/en/:match*",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "cookie", key: "i18n", value: "ie/en" }],
        destination: "/ie/en",
        permanent: false,
      },
      {
        source: "/int",
        has: [{ type: "cookie", key: "i18n", value: "ie/en" }],
        destination: "/ie/en",
        permanent: false,
      },
      {
        source: "/int/en/:match*",
        has: [{ type: "cookie", key: "i18n", value: "ie/en" }],
        destination: "/ie/en/:match*",
        permanent: false,
      },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>FR)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>fr)-(?<langCountry>.*)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/fr/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>FR)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>fr)-(?<langCountry>.*)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/fr/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>FR)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>fr)-(?<langCountry>.*)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/fr/:locale/:match*",
      },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>FR)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/fr/fr",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>FR)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/fr/fr",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>FR)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/fr/fr/:match*",
      },
      {
        source: "/fr",
        has: [
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>fr)-(?<langCountry>.*)",
          },
        ],
        permanent: false,
        destination: "/fr/:locale",
      },
      { source: "/fr", permanent: false, destination: "/fr/fr" },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>US)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/us/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>US)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/us/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>US)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/us/:locale/:match*",
      },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>US)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/us/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>US)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/us/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>US)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/us/en/:match*",
      },
      {
        source: "/us",
        has: [
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        permanent: false,
        destination: "/us/:locale",
      },
      { source: "/us", permanent: false, destination: "/us/en" },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>DE)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>de)-(?<langCountry>.*)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/de/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>DE)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>de)-(?<langCountry>.*)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/de/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>DE)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>de)-(?<langCountry>.*)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/de/:locale/:match*",
      },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>DE)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/de/de",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>DE)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/de/de",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>DE)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/de/de/:match*",
      },
      {
        source: "/de",
        has: [
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>de)-(?<langCountry>.*)",
          },
        ],
        permanent: false,
        destination: "/de/:locale",
      },
      { source: "/de", permanent: false, destination: "/de/de" },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>NO)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/no/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>NO)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/no/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>NO)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/no/:locale/:match*",
      },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>NO)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/no/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>NO)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/no/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>NO)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/no/en/:match*",
      },
      {
        source: "/no",
        has: [
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        permanent: false,
        destination: "/no/:locale",
      },
      { source: "/no", permanent: false, destination: "/no/en" },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>AT)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>de)-(?<langCountry>.*)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/at/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>AT)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>de)-(?<langCountry>.*)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/at/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>AT)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>de)-(?<langCountry>.*)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/at/:locale/:match*",
      },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>AT)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/at/de",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>AT)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/at/de",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>AT)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/at/de/:match*",
      },
      {
        source: "/at",
        has: [
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>de)-(?<langCountry>.*)",
          },
        ],
        permanent: false,
        destination: "/at/:locale",
      },
      { source: "/at", permanent: false, destination: "/at/de" },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>CH)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>de|fr)-(?<langCountry>.*)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/ch/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>CH)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>de|fr)-(?<langCountry>.*)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/ch/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>CH)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>de|fr)-(?<langCountry>.*)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/ch/:locale/:match*",
      },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>CH)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/ch/de",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>CH)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/ch/de",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>CH)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/ch/de/:match*",
      },
      {
        source: "/ch",
        has: [
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>de|fr)-(?<langCountry>.*)",
          },
        ],
        permanent: false,
        destination: "/ch/:locale",
      },
      { source: "/ch", permanent: false, destination: "/ch/de" },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>GB)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/uk/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>GB)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/uk/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>GB)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/uk/:locale/:match*",
      },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>GB)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/uk/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>GB)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/uk/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>GB)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/uk/en/:match*",
      },
      {
        source: "/uk",
        has: [
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        permanent: false,
        destination: "/uk/:locale",
      },
      { source: "/uk", permanent: false, destination: "/uk/en" },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>BE)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/be/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>BE)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/be/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>BE)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/be/:locale/:match*",
      },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>BE)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/be/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>BE)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/be/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>BE)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/be/en/:match*",
      },
      {
        source: "/be",
        has: [
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        permanent: false,
        destination: "/be/:locale",
      },
      { source: "/be", permanent: false, destination: "/be/en" },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>IT)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/it/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>IT)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/it/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>IT)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/it/:locale/:match*",
      },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>IT)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/it/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>IT)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/it/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>IT)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/it/en/:match*",
      },
      {
        source: "/it",
        has: [
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        permanent: false,
        destination: "/it/:locale",
      },
      { source: "/it", permanent: false, destination: "/it/en" },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>NL)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/nl/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>NL)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/nl/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>NL)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/nl/:locale/:match*",
      },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>NL)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/nl/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>NL)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/nl/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>NL)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/nl/en/:match*",
      },
      {
        source: "/nl",
        has: [
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        permanent: false,
        destination: "/nl/:locale",
      },
      { source: "/nl", permanent: false, destination: "/nl/en" },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>SE)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/se/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>SE)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/se/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>SE)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/se/:locale/:match*",
      },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>SE)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/se/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>SE)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/se/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>SE)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/se/en/:match*",
      },
      {
        source: "/se",
        has: [
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        permanent: false,
        destination: "/se/:locale",
      },
      { source: "/se", permanent: false, destination: "/se/en" },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>DK)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/dk/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>DK)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/dk/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>DK)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/dk/:locale/:match*",
      },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>DK)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/dk/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>DK)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/dk/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>DK)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/dk/en/:match*",
      },
      {
        source: "/dk",
        has: [
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        permanent: false,
        destination: "/dk/:locale",
      },
      { source: "/dk", permanent: false, destination: "/dk/en" },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>SK)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/sk/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>SK)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/sk/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>SK)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/sk/:locale/:match*",
      },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>SK)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/sk/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>SK)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/sk/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>SK)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/sk/en/:match*",
      },
      {
        source: "/sk",
        has: [
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        permanent: false,
        destination: "/sk/:locale",
      },
      { source: "/sk", permanent: false, destination: "/sk/en" },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>CZ)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/cz/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>CZ)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/cz/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>CZ)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/cz/:locale/:match*",
      },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>CZ)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/cz/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>CZ)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/cz/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>CZ)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/cz/en/:match*",
      },
      {
        source: "/cz",
        has: [
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        permanent: false,
        destination: "/cz/:locale",
      },
      { source: "/cz", permanent: false, destination: "/cz/en" },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>PL)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/pl/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>PL)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/pl/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>PL)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/pl/:locale/:match*",
      },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>PL)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/pl/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>PL)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/pl/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>PL)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/pl/en/:match*",
      },
      {
        source: "/pl",
        has: [
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        permanent: false,
        destination: "/pl/:locale",
      },
      { source: "/pl", permanent: false, destination: "/pl/en" },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>ES)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/es/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>ES)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/es/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>ES)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/es/:locale/:match*",
      },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>ES)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/es/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>ES)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/es/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>ES)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/es/en/:match*",
      },
      {
        source: "/es",
        has: [
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        permanent: false,
        destination: "/es/:locale",
      },
      { source: "/es", permanent: false, destination: "/es/en" },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>SI)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/si/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>SI)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/si/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>SI)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/si/:locale/:match*",
      },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>SI)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/si/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>SI)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/si/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>SI)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/si/en/:match*",
      },
      {
        source: "/si",
        has: [
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        permanent: false,
        destination: "/si/:locale",
      },
      { source: "/si", permanent: false, destination: "/si/en" },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>FI)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/fi/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>FI)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/fi/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>FI)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/fi/:locale/:match*",
      },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>FI)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/fi/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>FI)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/fi/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>FI)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/fi/en/:match*",
      },
      {
        source: "/fi",
        has: [
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        permanent: false,
        destination: "/fi/:locale",
      },
      { source: "/fi", permanent: false, destination: "/fi/en" },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>IE)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/ie/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>IE)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/ie/:locale",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>IE)",
          },
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/ie/:locale/:match*",
      },
      {
        missing: [{ type: "cookie", key: "i18n" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>IE)",
          },
        ],
        source: "/",
        permanent: false,
        destination: "/ie/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>IE)",
          },
        ],
        source: "/int",
        permanent: false,
        destination: "/ie/en",
      },
      {
        missing: [{ type: "cookie", key: "i18n", value: "int/en" }],
        has: [
          {
            type: "header",
            key: "x-country",
            value: "(?<channel>IE)",
          },
        ],
        source: "/int/en/:match*",
        permanent: false,
        destination: "/ie/en/:match*",
      },
      {
        source: "/ie",
        has: [
          {
            type: "header",
            key: "accept-language",
            value: "(?<locale>en)-(?<langCountry>.*)",
          },
        ],
        permanent: false,
        destination: "/ie/:locale",
      },
      { source: "/ie", permanent: false, destination: "/ie/en" },
      { source: "/int", destination: "/int/en", permanent: false },
      {
        source: "/:match*",
        has: [{ type: "header", key: "x-country", value: "JP" }],
        destination: "https://www.mammut.jp",
        permanent: true,
      },
      {
        source: "/eu/en/:path*",
        destination: "/int/en/:path*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5816/:rest*",
        destination: "/:channel/:locale/:storeType/5812/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5816:gender/:rest*",
        destination: "/:channel/:locale/:storeType/5812:gender/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5817/:rest*",
        destination: "/:channel/:locale/:storeType/5812/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5817:gender/:rest*",
        destination: "/:channel/:locale/:storeType/5812:gender/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5826/:rest*",
        destination: "/:channel/:locale/:storeType/5820/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5826:gender/:rest*",
        destination: "/:channel/:locale/:storeType/5820:gender/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5827/:rest*",
        destination: "/:channel/:locale/:storeType/5819/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5827:gender/:rest*",
        destination: "/:channel/:locale/:storeType/5819:gender/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5829/:rest*",
        destination: "/:channel/:locale/:storeType/5818/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5829:gender/:rest*",
        destination: "/:channel/:locale/:storeType/5818:gender/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5830/:rest*",
        destination: "/:channel/:locale/:storeType/6310/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5830:gender/:rest*",
        destination: "/:channel/:locale/:storeType/6310:gender/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5831/:rest*",
        destination: "/:channel/:locale/:storeType/6311/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5831:gender/:rest*",
        destination: "/:channel/:locale/:storeType/6311:gender/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5846/:rest*",
        destination: "/:channel/:locale/:storeType/5839/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5846:gender/:rest*",
        destination: "/:channel/:locale/:storeType/5839:gender/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5847/:rest*",
        destination: "/:channel/:locale/:storeType/5839/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5847:gender/:rest*",
        destination: "/:channel/:locale/:storeType/5839:gender/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5853/:rest*",
        destination: "/:channel/:locale/:storeType/5848/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5853:gender/:rest*",
        destination: "/:channel/:locale/:storeType/5848:gender/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5856/:rest*",
        destination: "/:channel/:locale/:storeType/5854/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5856:gender/:rest*",
        destination: "/:channel/:locale/:storeType/5854:gender/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5857/:rest*",
        destination: "/:channel/:locale/:storeType/5854/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5857:gender/:rest*",
        destination: "/:channel/:locale/:storeType/5854:gender/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5864/:rest*",
        destination: "/:channel/:locale/:storeType/5934/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5864:gender/:rest*",
        destination: "/:channel/:locale/:storeType/5934:gender/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/6016/:rest*",
        destination: "/:channel/:locale/:storeType/5812/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/6016:gender/:rest*",
        destination: "/:channel/:locale/:storeType/5812:gender/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/6017/:rest*",
        destination: "/:channel/:locale/:storeType/5812/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/6017:gender/:rest*",
        destination: "/:channel/:locale/:storeType/5812:gender/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5824/:rest*",
        destination: "/:channel/:locale/:storeType/5821/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5824:gender/:rest*",
        destination: "/:channel/:locale/:storeType/5821:gender/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5851/:rest*",
        destination: "/:channel/:locale/:storeType/5850/:rest*",
        permanent: true,
      },
      {
        source: "/:channel/:locale/:storeType/5851:gender/:rest*",
        destination: "/:channel/:locale/:storeType/5850:gender/:rest*",
        permanent: true,
      },
      {
        source: "/at/de/support/order-and-shipping",
        destination: "https://help.mammut.com/de/category/7d3bef",
        permanent: true,
      },
      {
        source: "/at/de/support/shipping-tracking",
        destination: "https://help.mammut.com/de/category/c1877a",
        permanent: true,
      },
      {
        source: "/at/de/support/returns",
        destination: "https://help.mammut.com/de/category/6159ac",
        permanent: true,
      },
      {
        source: "/at/de/support/payments",
        destination: "https://help.mammut.com/de/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/at/de/support/warranty-repair",
        destination: "https://help.mammut.com/de/category/6e3cda",
        permanent: true,
      },
      {
        source: "/at/de/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/de/category/f8953e",
        permanent: true,
      },
      {
        source: "/at/de/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/de/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/at/de/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/de/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/at/de/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/de/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/at/de/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/de/category/3c888d",
        permanent: true,
      },
      {
        source: "/at/de/support/product-support/barryvox",
        destination: "https://help.mammut.com/de/category/600f78",
        permanent: true,
      },
      {
        source: "/at/de/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/de/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/at/de/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/de/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/at/de/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/de/category/bdd331",
        permanent: true,
      },
      {
        source: "/at/de/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/de/category/ab2311",
        permanent: true,
      },
      {
        source: "/at/de/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/de/category/be4faf",
        permanent: true,
      },
      {
        source: "/at/de/support/fraudulent",
        destination: "https://help.mammut.com/de/category/be4faf",
        permanent: true,
      },
      {
        source: "/at/de/support/account",
        destination: "https://help.mammut.com/de/category/fcc371",
        permanent: true,
      },
      {
        source: "/at/de/support/sustainability",
        destination: "https://help.mammut.com/de/category/9b6a18",
        permanent: true,
      },
      {
        source: "/be/en/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/be/en/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/be/en/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/be/en/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/be/en/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/be/en/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/be/en/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/be/en/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/be/en/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/be/en/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/be/en/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/be/en/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/be/en/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/be/en/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/be/en/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/be/en/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/be/en/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/be/en/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/be/en/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/be/fr/support/order-and-shipping",
        destination: "https://help.mammut.com/fr/category/7d3bef",
        permanent: true,
      },
      {
        source: "/be/fr/support/shipping-tracking",
        destination: "https://help.mammut.com/fr/category/c1877a",
        permanent: true,
      },
      {
        source: "/be/fr/support/returns",
        destination: "https://help.mammut.com/fr/category/6159ac",
        permanent: true,
      },
      {
        source: "/be/fr/support/payments",
        destination: "https://help.mammut.com/fr/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/be/fr/support/warranty-repair",
        destination: "https://help.mammut.com/fr/category/6e3cda",
        permanent: true,
      },
      {
        source: "/be/fr/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/fr/category/f8953e",
        permanent: true,
      },
      {
        source: "/be/fr/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/fr/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/be/fr/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/fr/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/be/fr/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/fr/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/be/fr/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/fr/category/3c888d",
        permanent: true,
      },
      {
        source: "/be/fr/support/product-support/barryvox",
        destination: "https://help.mammut.com/fr/category/600f78",
        permanent: true,
      },
      {
        source: "/be/fr/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/fr/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/be/fr/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/fr/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/be/fr/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/fr/category/bdd331",
        permanent: true,
      },
      {
        source: "/be/fr/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/fr/category/ab2311",
        permanent: true,
      },
      {
        source: "/be/fr/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/fr/category/be4faf",
        permanent: true,
      },
      {
        source: "/be/fr/support/fraudulent",
        destination: "https://help.mammut.com/fr/category/be4faf",
        permanent: true,
      },
      {
        source: "/be/fr/support/account",
        destination: "https://help.mammut.com/fr/category/fcc371",
        permanent: true,
      },
      {
        source: "/be/fr/support/sustainability",
        destination: "https://help.mammut.com/fr/category/9b6a18",
        permanent: true,
      },
      {
        source: "/be/nl/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/be/nl/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/be/nl/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/be/nl/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/be/nl/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/be/nl/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/be/nl/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/be/nl/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/be/nl/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/be/nl/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/be/nl/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/be/nl/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/be/nl/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/be/nl/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/be/nl/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/be/nl/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/be/nl/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/be/nl/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/be/nl/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/ch/de/support/order-and-shipping",
        destination: "https://help.mammut.com/de_ch/category/7d3bef",
        permanent: true,
      },
      {
        source: "/ch/de/support/shipping-tracking",
        destination: "https://help.mammut.com/de_ch/category/c1877a",
        permanent: true,
      },
      {
        source: "/ch/de/support/returns",
        destination: "https://help.mammut.com/de_ch/category/6159ac",
        permanent: true,
      },
      {
        source: "/ch/de/support/payments",
        destination: "https://help.mammut.com/de_ch/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/ch/de/support/warranty-repair",
        destination: "https://help.mammut.com/de_ch/category/6e3cda",
        permanent: true,
      },
      {
        source: "/ch/de/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/de_ch/category/f8953e",
        permanent: true,
      },
      {
        source: "/ch/de/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/de_ch/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/ch/de/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/de_ch/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/ch/de/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/de_ch/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/ch/de/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/de_ch/category/3c888d",
        permanent: true,
      },
      {
        source: "/ch/de/support/product-support/barryvox",
        destination: "https://help.mammut.com/de_ch/category/600f78",
        permanent: true,
      },
      {
        source: "/ch/de/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/de_ch/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/ch/de/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/de_ch/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/ch/de/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/de_ch/category/bdd331",
        permanent: true,
      },
      {
        source: "/ch/de/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/de_ch/category/ab2311",
        permanent: true,
      },
      {
        source: "/ch/de/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/de_ch/category/be4faf",
        permanent: true,
      },
      {
        source: "/ch/de/support/fraudulent",
        destination: "https://help.mammut.com/de_ch/category/be4faf",
        permanent: true,
      },
      {
        source: "/ch/de/support/account",
        destination: "https://help.mammut.com/de_ch/category/fcc371",
        permanent: true,
      },
      {
        source: "/ch/de/support/sustainability",
        destination: "https://help.mammut.com/de_ch/category/9b6a18",
        permanent: true,
      },
      {
        source: "/ch/fr/support/order-and-shipping",
        destination: "https://help.mammut.com/fr_ch/category/7d3bef",
        permanent: true,
      },
      {
        source: "/ch/fr/support/shipping-tracking",
        destination: "https://help.mammut.com/fr_ch/category/c1877a",
        permanent: true,
      },
      {
        source: "/ch/fr/support/returns",
        destination: "https://help.mammut.com/fr_ch/category/6159ac",
        permanent: true,
      },
      {
        source: "/ch/fr/support/payments",
        destination: "https://help.mammut.com/fr_ch/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/ch/fr/support/warranty-repair",
        destination: "https://help.mammut.com/fr_ch/category/6e3cda",
        permanent: true,
      },
      {
        source: "/ch/fr/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/fr_ch/category/f8953e",
        permanent: true,
      },
      {
        source: "/ch/fr/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/fr_ch/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/ch/fr/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/fr_ch/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/ch/fr/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/fr_ch/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/ch/fr/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/fr_ch/category/3c888d",
        permanent: true,
      },
      {
        source: "/ch/fr/support/product-support/barryvox",
        destination: "https://help.mammut.com/fr_ch/category/600f78",
        permanent: true,
      },
      {
        source: "/ch/fr/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/fr_ch/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/ch/fr/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/fr_ch/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/ch/fr/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/fr_ch/category/bdd331",
        permanent: true,
      },
      {
        source: "/ch/fr/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/fr_ch/category/ab2311",
        permanent: true,
      },
      {
        source: "/ch/fr/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/fr_ch/category/be4faf",
        permanent: true,
      },
      {
        source: "/ch/fr/support/fraudulent",
        destination: "https://help.mammut.com/fr_ch/category/be4faf",
        permanent: true,
      },
      {
        source: "/ch/fr/support/account",
        destination: "https://help.mammut.com/fr_ch/category/fcc371",
        permanent: true,
      },
      {
        source: "/ch/fr/support/sustainability",
        destination: "https://help.mammut.com/fr_ch/category/9b6a18",
        permanent: true,
      },
      {
        source: "/ch/it/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/ch/it/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/ch/it/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/ch/it/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/ch/it/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/ch/it/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/ch/it/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/ch/it/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/ch/it/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/ch/it/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/ch/it/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/ch/it/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/ch/it/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/ch/it/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/ch/it/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/ch/it/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/ch/it/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/ch/it/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/ch/it/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/cz/cs/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/cz/cs/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/cz/cs/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/cz/cs/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/cz/cs/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/cz/cs/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/cz/cs/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/cz/cs/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/cz/cs/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/cz/cs/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/cz/cs/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/cz/cs/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/cz/cs/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/cz/cs/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/cz/cs/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/cz/cs/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/cz/cs/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/cz/cs/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/cz/cs/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/cz/en/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/cz/en/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/cz/en/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/cz/en/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/cz/en/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/cz/en/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/cz/en/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/cz/en/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/cz/en/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/cz/en/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/cz/en/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/cz/en/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/cz/en/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/cz/en/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/cz/en/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/cz/en/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/cz/en/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/cz/en/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/cz/en/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/de/de/support/order-and-shipping",
        destination: "https://help.mammut.com/de/category/7d3bef",
        permanent: true,
      },
      {
        source: "/de/de/support/shipping-tracking",
        destination: "https://help.mammut.com/de/category/c1877a",
        permanent: true,
      },
      {
        source: "/de/de/support/returns",
        destination: "https://help.mammut.com/de/category/6159ac",
        permanent: true,
      },
      {
        source: "/de/de/support/payments",
        destination: "https://help.mammut.com/de/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/de/de/support/warranty-repair",
        destination: "https://help.mammut.com/de/category/6e3cda",
        permanent: true,
      },
      {
        source: "/de/de/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/de/category/f8953e",
        permanent: true,
      },
      {
        source: "/de/de/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/de/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/de/de/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/de/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/de/de/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/de/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/de/de/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/de/category/3c888d",
        permanent: true,
      },
      {
        source: "/de/de/support/product-support/barryvox",
        destination: "https://help.mammut.com/de/category/600f78",
        permanent: true,
      },
      {
        source: "/de/de/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/de/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/de/de/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/de/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/de/de/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/de/category/bdd331",
        permanent: true,
      },
      {
        source: "/de/de/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/de/category/ab2311",
        permanent: true,
      },
      {
        source: "/de/de/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/de/category/be4faf",
        permanent: true,
      },
      {
        source: "/de/de/support/fraudulent",
        destination: "https://help.mammut.com/de/category/be4faf",
        permanent: true,
      },
      {
        source: "/de/de/support/account",
        destination: "https://help.mammut.com/de/category/fcc371",
        permanent: true,
      },
      {
        source: "/de/de/support/sustainability",
        destination: "https://help.mammut.com/de/category/9b6a18",
        permanent: true,
      },
      {
        source: "/dk/da/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/dk/da/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/dk/da/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/dk/da/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/dk/da/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/dk/da/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/dk/da/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/dk/da/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/dk/da/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/dk/da/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/dk/da/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/dk/da/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/dk/da/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/dk/da/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/dk/da/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/dk/da/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/dk/da/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/dk/da/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/dk/da/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/dk/en/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/dk/en/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/dk/en/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/dk/en/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/dk/en/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/dk/en/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/dk/en/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/dk/en/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/dk/en/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/dk/en/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/dk/en/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/dk/en/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/dk/en/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/dk/en/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/dk/en/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/dk/en/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/dk/en/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/dk/en/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/dk/en/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/es/en/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/es/en/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/es/en/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/es/en/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/es/en/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/es/en/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/es/en/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/es/en/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/es/en/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/es/en/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/es/en/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/es/en/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/es/en/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/es/en/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/es/en/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/es/en/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/es/en/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/es/en/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/es/en/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/es/es/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/es/es/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/es/es/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/es/es/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/es/es/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/es/es/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/es/es/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/es/es/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/es/es/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/es/es/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/es/es/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/es/es/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/es/es/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/es/es/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/es/es/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/es/es/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/es/es/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/es/es/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/es/es/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/fr/fr/support/order-and-shipping",
        destination: "https://help.mammut.com/fr/category/7d3bef",
        permanent: true,
      },
      {
        source: "/fr/fr/support/shipping-tracking",
        destination: "https://help.mammut.com/fr/category/c1877a",
        permanent: true,
      },
      {
        source: "/fr/fr/support/returns",
        destination: "https://help.mammut.com/fr/category/6159ac",
        permanent: true,
      },
      {
        source: "/fr/fr/support/payments",
        destination: "https://help.mammut.com/fr/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/fr/fr/support/warranty-repair",
        destination: "https://help.mammut.com/fr/category/6e3cda",
        permanent: true,
      },
      {
        source: "/fr/fr/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/fr/category/f8953e",
        permanent: true,
      },
      {
        source: "/fr/fr/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/fr/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/fr/fr/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/fr/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/fr/fr/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/fr/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/fr/fr/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/fr/category/3c888d",
        permanent: true,
      },
      {
        source: "/fr/fr/support/product-support/barryvox",
        destination: "https://help.mammut.com/fr/category/600f78",
        permanent: true,
      },
      {
        source: "/fr/fr/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/fr/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/fr/fr/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/fr/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/fr/fr/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/fr/category/bdd331",
        permanent: true,
      },
      {
        source: "/fr/fr/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/fr/category/ab2311",
        permanent: true,
      },
      {
        source: "/fr/fr/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/fr/category/be4faf",
        permanent: true,
      },
      {
        source: "/fr/fr/support/fraudulent",
        destination: "https://help.mammut.com/fr/category/be4faf",
        permanent: true,
      },
      {
        source: "/fr/fr/support/account",
        destination: "https://help.mammut.com/fr/category/fcc371",
        permanent: true,
      },
      {
        source: "/fr/fr/support/sustainability",
        destination: "https://help.mammut.com/fr/category/9b6a18",
        permanent: true,
      },
      {
        source: "/it/en/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/it/en/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/it/en/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/it/en/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/it/en/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/it/en/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/it/en/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/it/en/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/it/en/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/it/en/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/it/en/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/it/en/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/it/en/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/it/en/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/it/en/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/it/en/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/it/en/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/it/en/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/it/en/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/it/it/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/it/it/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/it/it/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/it/it/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/it/it/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/it/it/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/it/it/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/it/it/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/it/it/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/it/it/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/it/it/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/it/it/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/it/it/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/it/it/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/it/it/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/it/it/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/it/it/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/it/it/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/it/it/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/nl/en/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/nl/en/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/nl/en/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/nl/en/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/nl/en/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/nl/en/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/nl/en/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/nl/en/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/nl/en/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/nl/en/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/nl/en/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/nl/en/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/nl/en/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/nl/en/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/nl/en/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/nl/en/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/nl/en/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/nl/en/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/nl/en/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/nl/nl/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/nl/nl/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/nl/nl/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/nl/nl/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/nl/nl/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/nl/nl/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/nl/nl/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/nl/nl/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/nl/nl/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/nl/nl/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/nl/nl/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/nl/nl/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/nl/nl/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/nl/nl/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/nl/nl/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/nl/nl/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/nl/nl/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/nl/nl/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/nl/nl/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/no/en/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/no/en/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/no/en/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/no/en/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/no/en/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/no/en/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/no/en/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/no/en/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/no/en/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/no/en/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/no/en/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/no/en/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/no/en/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/no/en/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/no/en/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/no/en/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/no/en/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/no/en/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/no/en/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/no/no/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/no/no/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/no/no/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/no/no/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/no/no/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/no/no/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/no/no/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/no/no/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/no/no/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/no/no/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/no/no/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/no/no/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/no/no/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/no/no/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/no/no/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/no/no/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/no/no/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/no/no/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/no/no/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/pl/en/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/pl/en/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/pl/en/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/pl/en/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/pl/en/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/pl/en/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/pl/en/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/pl/en/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/pl/en/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/pl/en/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/pl/en/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/pl/en/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/pl/en/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/pl/en/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/pl/en/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/pl/en/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/pl/en/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/pl/en/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/pl/en/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/pl/pl/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/pl/pl/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/pl/pl/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/pl/pl/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/pl/pl/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/pl/pl/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/pl/pl/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/pl/pl/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/pl/pl/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/pl/pl/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/pl/pl/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/pl/pl/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/pl/pl/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/pl/pl/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/pl/pl/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/pl/pl/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/pl/pl/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/pl/pl/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/pl/pl/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/se/en/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/se/en/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/se/en/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/se/en/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/se/en/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/se/en/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/se/en/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/se/en/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/se/en/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/se/en/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/se/en/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/se/en/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/se/en/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/se/en/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/se/en/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/se/en/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/se/en/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/se/en/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/se/en/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/se/sv/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/se/sv/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/se/sv/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/se/sv/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/se/sv/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/se/sv/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/se/sv/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/se/sv/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/se/sv/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/se/sv/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/se/sv/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/se/sv/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/se/sv/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/se/sv/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/se/sv/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/se/sv/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/se/sv/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/se/sv/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/se/sv/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/si/en/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/si/en/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/si/en/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/si/en/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/si/en/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/si/en/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/si/en/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/si/en/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/si/en/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/si/en/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/si/en/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/si/en/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/si/en/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/si/en/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/si/en/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/si/en/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/si/en/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/si/en/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/si/en/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/si/sl/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/si/sl/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/si/sl/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/si/sl/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/si/sl/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/si/sl/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/si/sl/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/si/sl/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/si/sl/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/si/sl/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/si/sl/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/si/sl/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/si/sl/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/si/sl/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/si/sl/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/si/sl/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/si/sl/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/si/sl/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/si/sl/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/sk/en/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/sk/en/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/sk/en/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/sk/en/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/sk/en/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/sk/en/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/sk/en/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/sk/en/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/sk/en/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/sk/en/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/sk/en/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/sk/en/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/sk/en/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/sk/en/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/sk/en/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/sk/en/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/sk/en/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/sk/en/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/sk/en/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/sk/sk/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/sk/sk/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/sk/sk/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/sk/sk/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/sk/sk/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/sk/sk/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/sk/sk/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/sk/sk/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/sk/sk/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/sk/sk/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/sk/sk/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/sk/sk/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/sk/sk/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/sk/sk/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/sk/sk/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/sk/sk/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/sk/sk/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/sk/sk/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/sk/sk/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/uk/en/support/order-and-shipping",
        destination: "https://help.mammut.com/en_gb/category/7d3bef",
        permanent: true,
      },
      {
        source: "/uk/en/support/shipping-tracking",
        destination: "https://help.mammut.com/en_gb/category/c1877a",
        permanent: true,
      },
      {
        source: "/uk/en/support/returns",
        destination: "https://help.mammut.com/en_gb/category/6159ac",
        permanent: true,
      },
      {
        source: "/uk/en/support/payments",
        destination: "https://help.mammut.com/en_gb/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/uk/en/support/warranty-repair",
        destination: "https://help.mammut.com/en_gb/category/6e3cda",
        permanent: true,
      },
      {
        source: "/uk/en/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en_gb/category/f8953e",
        permanent: true,
      },
      {
        source: "/uk/en/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en_gb/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/uk/en/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en_gb/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/uk/en/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en_gb/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/uk/en/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en_gb/category/3c888d",
        permanent: true,
      },
      {
        source: "/uk/en/support/product-support/barryvox",
        destination: "https://help.mammut.com/en_gb/category/600f78",
        permanent: true,
      },
      {
        source: "/uk/en/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en_gb/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/uk/en/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en_gb/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/uk/en/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en_gb/category/bdd331",
        permanent: true,
      },
      {
        source: "/uk/en/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en_gb/category/ab2311",
        permanent: true,
      },
      {
        source: "/uk/en/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en_gb/category/be4faf",
        permanent: true,
      },
      {
        source: "/uk/en/support/fraudulent",
        destination: "https://help.mammut.com/en_gb/category/be4faf",
        permanent: true,
      },
      {
        source: "/uk/en/support/account",
        destination: "https://help.mammut.com/en_gb/category/fcc371",
        permanent: true,
      },
      {
        source: "/uk/en/support/sustainability",
        destination: "https://help.mammut.com/en_gb/category/9b6a18",
        permanent: true,
      },
      {
        source: "/us/en/support/order-and-shipping",
        destination: "https://help.mammut.com/en_us/category/7d3bef",
        permanent: true,
      },
      {
        source: "/us/en/support/shipping-tracking",
        destination: "https://help.mammut.com/en_us/category/c1877a",
        permanent: true,
      },
      {
        source: "/us/en/support/returns",
        destination: "https://help.mammut.com/en_us/category/6159ac",
        permanent: true,
      },
      {
        source: "/us/en/support/payments",
        destination: "https://help.mammut.com/en_us/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/us/en/support/warranty-repair",
        destination: "https://help.mammut.com/en_us/category/6e3cda",
        permanent: true,
      },
      {
        source: "/us/en/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en_us/category/f8953e",
        permanent: true,
      },
      {
        source: "/us/en/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en_us/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/us/en/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en_us/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/us/en/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en_us/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/us/en/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en_us/category/3c888d",
        permanent: true,
      },
      {
        source: "/us/en/support/product-support/barryvox",
        destination: "https://help.mammut.com/en_us/category/600f78",
        permanent: true,
      },
      {
        source: "/us/en/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en_us/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/us/en/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en_us/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/us/en/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en_us/category/bdd331",
        permanent: true,
      },
      {
        source: "/us/en/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en_us/category/ab2311",
        permanent: true,
      },
      {
        source: "/us/en/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en_us/category/be4faf",
        permanent: true,
      },
      {
        source: "/us/en/support/fraudulent",
        destination: "https://help.mammut.com/en_us/category/be4faf",
        permanent: true,
      },
      {
        source: "/us/en/support/account",
        destination: "https://help.mammut.com/en_us/category/fcc371",
        permanent: true,
      },
      {
        source: "/us/en/support/sustainability",
        destination: "https://help.mammut.com/en_us/category/9b6a18",
        permanent: true,
      },
      {
        source: "/fi/en/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/fi/en/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/fi/en/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/fi/en/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/fi/en/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/fi/en/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/fi/en/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/fi/en/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/fi/en/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/fi/en/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/fi/en/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/fi/en/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/fi/en/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/fi/en/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/fi/en/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/fi/en/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/fi/en/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/fi/en/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/fi/en/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
      {
        source: "/ie/en/support/order-and-shipping",
        destination: "https://help.mammut.com/en/category/7d3bef",
        permanent: true,
      },
      {
        source: "/ie/en/support/shipping-tracking",
        destination: "https://help.mammut.com/en/category/c1877a",
        permanent: true,
      },
      {
        source: "/ie/en/support/returns",
        destination: "https://help.mammut.com/en/category/6159ac",
        permanent: true,
      },
      {
        source: "/ie/en/support/payments",
        destination: "https://help.mammut.com/en/category/7b1ddc",
        permanent: true,
      },
      {
        source: "/ie/en/support/warranty-repair",
        destination: "https://help.mammut.com/en/category/6e3cda",
        permanent: true,
      },
      {
        source: "/ie/en/support/product-support/avalanche-airbags",
        destination: "https://help.mammut.com/en/category/f8953e",
        permanent: true,
      },
      {
        source: "/ie/en/support/product-support/avalanche-airbags/safety",
        destination: "https://help.mammut.com/en/category/42d7b3",
        permanent: true,
      },
      {
        source:
          "/ie/en/support/product-support/avalanche-airbags/safety-check-airbag-3.0",
        destination: "https://help.mammut.com/en/article/aa99dc",
        permanent: true,
      },
      {
        source:
          "/ie/en/support/product-support/avalanche-airbags/service-bulletin-airbag-2.0",
        destination: "https://help.mammut.com/en/article/da1d33",
        permanent: true,
      },
      {
        source:
          "/ie/en/support/product-support/avalanche-airbags/avalanche-airbags-user-manuals",
        destination: "https://help.mammut.com/en/category/3c888d",
        permanent: true,
      },
      {
        source: "/ie/en/support/product-support/barryvox",
        destination: "https://help.mammut.com/en/category/600f78",
        permanent: true,
      },
      {
        source: "/ie/en/support/product-support/barryvox/faq",
        destination: "https://help.mammut.com/en/category/5fc7fa",
        permanent: true,
      },
      {
        source: "/ie/en/support/product-support/barryvox/support",
        destination: "https://help.mammut.com/en/category/2a2a4d",
        permanent: true,
      },
      {
        source: "/ie/en/support/product-support/barryvox/barryvox-user-manuals",
        destination: "https://help.mammut.com/en/category/bdd331",
        permanent: true,
      },
      {
        source: "/ie/en/support/product-support/barryvox/service-center",
        destination: "https://help.mammut.com/en/category/ab2311",
        permanent: true,
      },
      {
        source: "/ie/en/support/product-support/barryvox/avalanche-training",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/ie/en/support/fraudulent",
        destination: "https://help.mammut.com/en/category/be4faf",
        permanent: true,
      },
      {
        source: "/ie/en/support/account",
        destination: "https://help.mammut.com/en/category/fcc371",
        permanent: true,
      },
      {
        source: "/ie/en/support/sustainability",
        destination: "https://help.mammut.com/en/category/9b6a18",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
