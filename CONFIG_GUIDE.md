# CV Generator Config Tool - Quick Guide

## Overview
The Python configuration manager allows you to easily customize your CV generator without manually editing CSS or HTML files.

## Files Created
- **cv_config.py** - Main configuration tool (run this to customize)
- **cv_config.json** - Stores all your settings in JSON format

## Quick Start

### Run the Interactive Tool
```bash
python cv_config.py
```

### Command Line Usage
```python
from cv_config import CVConfig

# Initialize
config = CVConfig()

# Change colors
config.set_color("primary_blue_dark", "#003366")
config.set_color("accent_yellow", "#FF6B6B")

# Change fonts
config.set_font("family_primary", "Georgia, serif")
config.set_font("size_heading1", "3em")

# Change layout
config.set_layout("sidebar_width", "350px")
config.set_layout("profile_image_size", "180px")

# View all settings
config.show_all()

# Apply changes to CSS
config.apply_to_css()
```

## Available Customizations

### 🎨 Colors
- `primary_blue_dark` - Dark blue sidebar background (default: #1e3c72)
- `primary_blue_light` - Light blue sidebar gradient (default: #2a5298)
- `accent_yellow` - Section headers and accents (default: #ffc107)
- `text_white` - Text on dark backgrounds (default: #ffffff)
- `text_dark` - Main body text (default: #333333)
- `text_light_gray` - Secondary text (default: #666666)
- `background_white` - Page background (default: #ffffff)
- `border_gray` - Borders and dividers (default: #e0e0e0)

### 🔤 Fonts
- `family_primary` - Main font family (default: Arial, sans-serif)
- `family_secondary` - Alternative font (default: Segoe UI, sans-serif)
- `size_base` - Base font size (default: 16px)
- `size_heading1` - Large headings (default: 2em)
- `size_heading2` - Medium headings (default: 1.5em)
- `size_heading3` - Small headings (default: 1.2em)
- `size_small` - Small text (default: 0.9em)
- `weight_normal` - Normal font weight (default: 400)
- `weight_bold` - Bold font weight (default: 700)

### 📐 Layout
- `sidebar_width` - Width of left sidebar (default: 300px)
- `max_width` - Maximum page width (default: 1400px)
- `padding_default` - Default padding (default: 25px)
- `cv_width` - CV preview width (default: 210mm, A4 standard)
- `cv_height` - CV preview height (default: 297mm, A4 standard)
- `profile_image_size` - Profile picture size (default: 150px)

### 📄 CV Name & Summary
- `name_font_size` - Name display size (default: 2.6em)
- `summary_font_size` - Summary text size (default: 1em)
- `summary_style` - Summary styling (default: italic)

### ✨ Effects
- `box_shadow` - Shadow effect (default: 0 10px 40px rgba(0, 0, 0, 0.2))
- `border_radius` - Rounded corners (default: 8px)
- `transition` - Animation transitions (default: all 0.3s ease)

## Examples

### Example 1: Dark Professional Theme
```bash
python cv_config.py
# Choose option 5 and set:
# primary_blue_dark: #0a0e27
# primary_blue_light: #1a1f3a
# accent_yellow: #ffd700
```

### Example 2: Modern Minimalist
```bash
python cv_config.py
# Choose option 5 and set:
# primary_blue_dark: #2c3e50
# accent_yellow: #3498db (change to blue)
# text_dark: #2c3e50
```

### Example 3: Larger Profile Image
```bash
python cv_config.py
# Choose option 7 (layout) and set:
# profile_image_size: 200px
# sidebar_width: 350px
```

## Tips
- All hex colors must be in format: #RRGGBB
- Font sizes can use px, em, or rem units
- You can save multiple configurations and import them later
- Changes are applied immediately to cv_config.json
- Use "Apply config to CSS" (option 8) to sync changes to style.css
- Reset to defaults anytime (option 9)

## Need Help?
View all current settings: `python cv_config.py` → Choose option 1
