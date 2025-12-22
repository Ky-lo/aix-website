/**
 * Get the correct asset path considering the basePath configuration
 * This ensures images load correctly on both GitHub Pages and other deployments
 */
export function getAssetPath(path: string): string {
  const isProd = process.env.NODE_ENV === 'production';
  const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true';
  const basePath = isProd && isGitHubPages ? '/aix-website' : '';

  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return `${basePath}${normalizedPath}`;
}
