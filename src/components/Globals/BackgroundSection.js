import React from "react"
import BackgroundImage from "gatsby-background-image"

export const BackgroundSection = ({ img, styleClass, title, children }) => {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center font-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
