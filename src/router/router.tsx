import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Layout from "../pages/Layout";

const AnimatedGlowButton = lazy(() => import("../Widgets/AnimatedGlowButton"));
const CSSEyes = lazy(() => import("../Widgets/CSSEyes"));
const DrumKit = lazy(() => import("../Widgets/DrumKit"));
const ImageConverter = lazy(() => import("../Widgets/ImageConverter"));
const QRCodeGenerator = lazy(() => import("../Widgets/QRCodeGenerator"));
const StopwatchCSS = lazy(() => import("../Widgets/StopwatchCSS"));
const Clock = lazy(() => import("../Widgets/Clock"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "CSSEyes",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <CSSEyes />
          </Suspense>
        ),
      },
      {
        path: "StopwatchCSS",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <StopwatchCSS />
          </Suspense>
        ),
      },
      {
        path: "AnimatedGlowButton",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <AnimatedGlowButton />
          </Suspense>
        ),
      },
      {
        path: "QRCodeGenerator",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <QRCodeGenerator />
          </Suspense>
        ),
      },
      {
        path: "ImageConverter",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <ImageConverter />
          </Suspense>
        ),
      },
      {
        path: "DrumKit",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <DrumKit />
          </Suspense>
        ),
      },
      {
        path: "Clock",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <Clock />
          </Suspense>
        ),
      },
    ],
  },
]);
