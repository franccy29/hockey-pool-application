import React from "react";
import { TopBannerStyled } from "./Top-Banner.style";

export const TopBanner = () => {
  return (
    <TopBannerStyled className={ 'top-banner' } >
      <div className={'top-bar-left'}>
        <p>burger</p>
      </div>
      <div className={'top-bar-right'}>
        <p>random stats</p>
        <p>mon équipe</p>
      </div>
    </TopBannerStyled>
  )
}
