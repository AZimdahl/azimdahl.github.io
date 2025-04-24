// Use Vite's `import.meta.glob` to import all SVG files in the skills directory.
// `eager: true` tells Vite to import them immediately, so we get their actual paths at build time.
const iconFiles = import.meta.glob('../assets/skills/*.svg', { eager: true });

// Create a typed object that maps icon names (like 'react') to their file paths (string URLs).
export const icons: Record<string, string> = Object.fromEntries(
  Object.entries(iconFiles).map(([path, mod]) => {
    // Extract just the filename from the full path (e.g., '../assets/skills/react.svg' => 'react')
    const name = path.split('/').pop()?.replace('.svg', '').toLowerCase() ?? '';

    // Return a tuple: [iconName, iconUrl]
    // `mod.default` contains the resolved path to the SVG image
    return [name, (mod as { default: string }).default];
  })
);
