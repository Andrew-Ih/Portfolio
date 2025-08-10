# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a clean dark theme with smooth animations and a professional layout.

## Features

- 🎨 **Modern Dark Theme**: Pure black background with accent colors
- 📱 **Responsive Design**: Mobile-first approach with smooth mobile menu
- 🖱️ **Mouse Highlight Effect**: Subtle glow that follows the cursor
- 🏗️ **Clean Architecture**: Modular components with clear separation of concerns
- 🎯 **Easy Customization**: Simple theme switching and content updates
- 📄 **Multiple Pages**: Home page with sections + dedicated projects archive page

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── projects/
│       ├── layout.tsx      # Projects page layout
│       └── page.tsx        # Projects archive page
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Tag.tsx         # Technology tags
│   │   ├── LinkWithIcon.tsx # External links with icons
│   │   ├── SocialIcons.tsx # Social media icons
│   │   └── MouseHighlight.tsx # Mouse cursor effect
│   ├── sections/           # Content sections
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   └── ProjectsSection.tsx
│   ├── layout/             # Layout components
│   │   ├── Layout.tsx      # Main layout wrapper
│   │   ├── LeftSide.tsx    # Fixed sidebar
│   │   └── RightSide.tsx   # Scrollable content area
│   ├── ExperienceItem.tsx  # Individual experience entry
│   └── ProjectItem.tsx     # Individual project entry
└── contexts/
    └── ThemeContext.tsx    # Theme management
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Customization

### Personal Information

Update the following files with your information:

- **Name and Title**: `src/components/layout/LeftSide.tsx` (lines 58-62)
- **About Section**: `src/components/sections/AboutSection.tsx`
- **Experience**: `src/components/sections/ExperienceSection.tsx`
- **Projects**: `src/components/sections/ProjectsSection.tsx`
- **Social Links**: `src/components/ui/SocialIcons.tsx`

### Theme Customization

The theme system is built for easy customization. To modify colors:

1. **Edit theme colors**: `src/contexts/ThemeContext.tsx`
2. **Add new themes**: Add new theme objects to the `themes` object
3. **Switch themes**: Use the `setTheme` function from `useTheme` hook

### Adding New Sections

1. Create a new section component in `src/components/sections/`
2. Add it to the navigation in `src/components/layout/LeftSide.tsx`
3. Include it in the `RightSide.tsx` render logic

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Include the `ThemeProvider` in a layout file if needed

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS v4**: Utility-first CSS framework
- **React 19**: Latest React features
- **Context API**: State management for themes

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized with Next.js 15 features
- Lazy loading of components
- Efficient re-renders with React 19
- Minimal bundle size

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, please open an issue on GitHub.
