import React from "react";
import { TopBanner } from "./components/top-banner/Top-Banner";
import { AppStyled, FeatureStyled } from "./App.style";

export const App = () => {
  return (
  <AppStyled>
    <TopBanner />
    <FeatureStyled>
      <span>hockey</span>
    </FeatureStyled>
  </AppStyled>
  )
}
