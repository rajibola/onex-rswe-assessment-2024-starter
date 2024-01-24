import localFont from "next/font/local";

export const graphikFont = localFont({
  src: [
    {
      path: "./Graphik-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Graphik-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./Graphik-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Graphik-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Graphik-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Graphik-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Graphik-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./Graphik-Thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
});
