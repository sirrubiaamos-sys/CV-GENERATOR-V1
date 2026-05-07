# 🎨 CV Generator - Python Configuration Tools

## Overview
Two powerful Python tools to customize your CV generator without touching HTML or CSS files directly!

### Tools Included
1. **cv_config.py** - Interactive menu-driven configuration manager
2. **quick_config.py** - Command-line interface for quick edits

---

## 🚀 Quick Start

### Interactive Mode (cv_config.py)
```bash
python cv_config.py
```
This opens an interactive menu where you can:
- View all settings
- Change colors, fonts, and layout properties
- Import/export configurations
- Reset to defaults

### Command Line Mode (quick_config.py)
Make changes instantly from the terminal:
```bash
# View settings
python quick_config.py --show all
python quick_config.py --show colors

# Change a color
python quick_config.py --color accent_yellow #FF6B6B

# Change a font
python quick_config.py --font size_heading1 3em

# Change layout
python quick_config.py --layout sidebar_width 350px

# Save/load configurations
python quick_config.py --export my_theme.json
python quick_config.py --import my_theme.json

# Reset to defaults
python quick_config.py --reset
```

---

## 🎯 Common Tasks

### Task 1: Change Primary Colors
```bash
python quick_config.py --color primary_blue_dark #003366
python quick_config.py --color accent_yellow #FF6B6B
```

### Task 2: Make Name Larger
```bash
python quick_config.py --font size_heading1 3em
python quick_config.py --show fonts
```

### Task 3: Wider Sidebar
```bash
python quick_config.py --layout sidebar_width 350px
python quick_config.py --layout profile_image_size 180px
```

### Task 4: Change Font Family
```bash
python quick_config.py --font family_primary "Georgia, serif"
python quick_config.py --font family_secondary "Times New Roman, serif"
```

### Task 5: Create Custom Theme
```bash
python cv_config.py
# Choose option 5, 6, 7 to change colors, fonts, layout
# Choose option 10 to export as my_dark_theme.json
```

### Task 6: Load Custom Theme
```bash
python quick_config.py --import my_dark_theme.json
```

---

## 📋 Configuration Reference

### Colors Available
```
primary_blue_dark      - Dark blue sidebar (#1e3c72)
primary_blue_light     - Light blue gradient (#2a5298)
accent_yellow          - Section headers (#ffc107)
text_white             - Light text (#ffffff)
text_dark              - Dark text (#333333)
text_light_gray        - Gray text (#666666)
background_white       - Page background (#ffffff)
border_gray            - Borders (#e0e0e0)
```

### Fonts Available
```
family_primary         - Main font (Arial, sans-serif)
family_secondary       - Alternative (Segoe UI, sans-serif)
size_base              - Base size (16px)
size_heading1          - Large (2em) ← Good for CV name
size_heading2          - Medium (1.5em)
size_heading3          - Small (1.2em)
size_small             - Tiny (0.9em)
weight_normal          - Regular (400)
weight_bold            - Bold (700)
```

### Layout Available
```
sidebar_width          - Left sidebar (300px)
max_width              - Page max width (1400px)
padding_default        - Default space (25px)
cv_width               - A4 width (210mm) ← Keep for printing
cv_height              - A4 height (297mm) ← Keep for printing
profile_image_size     - Profile pic (150px)
```

### CV Name & Summary
```
name_font_size         - CV name size (2.6em)
summary_font_size      - Summary size (1em)
summary_style          - Summary style (italic)
```

### Effects
```
box_shadow             - Shadows (0 10px 40px rgba(0, 0, 0, 0.2))
border_radius          - Corners (8px)
transition             - Animations (all 0.3s ease)
```

---

## 🎨 Theme Examples

### Modern Professional (Blue & Gold)
```bash
python quick_config.py --color primary_blue_dark #1e3c72
python quick_config.py --color accent_yellow #ffc107
python quick_config.py --font family_primary "Segoe UI, sans-serif"
```

### Dark Minimalist
```bash
python quick_config.py --color primary_blue_dark #1a1a1a
python quick_config.py --color accent_yellow #e74c3c
python quick_config.py --color text_dark #f0f0f0
```

### Elegant Classic
```bash
python quick_config.py --font family_primary "Georgia, serif"
python quick_config.py --color accent_yellow #d4af37
python quick_config.py --layout sidebar_width 280px
```

### Corporate
```bash
python quick_config.py --color primary_blue_dark #003366
python quick_config.py --color accent_yellow #003399
python quick_config.py --font weight_bold 600
```

---

## 📁 Files Generated

- **cv_config.json** - Your configuration stored here (automatically created)
- **cv_config.py** - Main interactive tool
- **quick_config.py** - Command-line tool
- **CONFIG_GUIDE.md** - Full documentation

---

## 💡 Tips & Tricks

1. **Keep A4 Dimensions** - Don't change `cv_width` and `cv_height` if you want proper printing!

2. **Color Format** - Always use hex colors: `#RRGGBB` (e.g., `#FF5733`)

3. **Font Sizes** - Can use `px`, `em`, or `rem`:
   - `24px` - Absolute
   - `2em` - Relative (good for responsive)
   - `1.5rem` - Root-relative

4. **Save Themes** - Export your custom theme:
   ```bash
   python quick_config.py --export my_awesome_theme.json
   ```

5. **Share Themes** - Share the `.json` file and others can import it:
   ```bash
   python quick_config.py --import my_awesome_theme.json
   ```

6. **Undo Changes** - Reset anytime:
   ```bash
   python quick_config.py --reset
   ```

---

## 🔧 Advanced Usage

### Python Script Usage
```python
from cv_config import CVConfig

config = CVConfig()

# Change multiple settings
config.set_color("primary_blue_dark", "#003366")
config.set_font("size_heading1", "3em")
config.set_layout("sidebar_width", "350px")

# View settings
config.show_colors()
config.show_fonts()
config.show_layout()

# Save settings
config.save_config()

# Export configuration
config.export_config("my_config.json")
```

---

## ❓ FAQ

**Q: Do I need to restart anything after changing settings?**
A: No! Reload your HTML file in the browser to see changes immediately.

**Q: Can I share my custom theme?**
A: Yes! Export it as JSON and share the file. Others can import it.

**Q: What if I mess up the colors?**
A: Use `python quick_config.py --reset` to restore defaults.

**Q: Can I use custom fonts?**
A: Yes! Just enter the font name. The browser must support it or use a web font.

**Q: Do I need to apply changes to CSS?**
A: The tool updates `cv_config.json` automatically. For CSS changes, use option 8 in interactive mode.

---

## 📞 Support

For detailed documentation, see **CONFIG_GUIDE.md**

For questions about specific properties, run:
```bash
python quick_config.py --show all
```

---

Happy customizing! 🎨✨
