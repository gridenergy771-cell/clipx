import logo from "@/assets/clipx-logo.png.asset.json";
import editorImage from "@/assets/clipx-editor.jpeg.asset.json";
import bannerImage from "@/assets/clipx-banner.jpeg.asset.json";

/** Centralized project configuration — edit here, nowhere else. */
export const PROJECT_NAME = "CLIPX";
export const TOKEN_SYMBOL = "$CLIPX";
export const CA = "COMING SOON";
export const RADARDEX_URL = "https://radardex.pro";
/** Replace with the real X profile URL when available. */
export const X_URL = "#";
export const ARC_LABEL = "Built on ARC";

export const TAGLINE = "Every Clip. An Asset.";
export const POSITIONING = "The onchain layer for creator-owned content.";
export const SUPPORTING = "Create. Own. Earn.";

export const SITE_TITLE = "CLIPX — Every Clip. An Asset.";
export const SITE_DESCRIPTION =
  "CLIPX is the onchain layer for creator-owned content, transforming short-form creativity into digital assets built on ARC.";

export const ASSETS = {
  logo: logo.url,
  editor: editorImage.url,
  banner: bannerImage.url,
};

export const NAV_LINKS = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "App", to: "/app" as const },
];
