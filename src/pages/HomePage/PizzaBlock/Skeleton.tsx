import React from 'react'
import ContentLoader from 'react-content-loader'

export const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={360}
    viewBox="0 0 280 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="120" cy="100" r="100" />
    <rect x="20" y="220" rx="5" ry="5" width="220" height="30" />
    <rect x="20" y="260" rx="5" ry="5" width="220" height="30" />
    <rect x="20" y="300" rx="5" ry="5" width="220" height="30" />
  </ContentLoader>
)
