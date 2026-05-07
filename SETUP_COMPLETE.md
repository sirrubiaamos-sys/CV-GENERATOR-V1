# ✅ Python Configuration Tools - Setup Complete!

## 🎯 What You Now Have

Your CV Generator now includes **3 powerful ways** to customize colors, fonts, and layout:

### 1️⃣ **Interactive Menu Tool** (Easiest)
```bash
python cv_config.py
```
📋 Menu-driven interface with all options displayed

**Pros:**
- Guided step-by-step process
- See all options clearly
- Easy for beginners
- Can import/export themes

### 2️⃣ **Command-Line Tool** (Fastest)
```bash
python quick_config.py --color accent_yellow #FF6B6B
python quick_config.py --font size_heading1 3em
```
⚡ Make changes instantly from terminal

**Pros:**
- Fastest for quick edits
- Perfect for scripting
- Minimal typing
- Great for advanced users

### 3️⃣ **Batch Launcher** (Windows Only)
```bash
run_config.bat
```
🖱️ GUI menu that launches the tools

**Pros:**
- User-friendly for Windows
- No command line needed
- Visual menu system
- One-click operations

---

## 📦 Files Created

```
cv_config.py               - Main configuration tool (Python)
quick_config.py            - Command-line tool (Python)
cv_config.json             - Configuration stored here (Auto-generated)
run_config.bat             - Windows launcher (Batch)
CONFIG_GUIDE.md            - Detailed documentation
PYTHON_CONFIG_README.md    - This complete guide
```

---

## 🚀 Quick Examples

### Change Colors
```bash
# Dark theme
python quick_config.py --color primary_blue_dark #0a0e27
python quick_config.py --color accent_yellow #ffd700

# Modern
python quick_config.py --color accent_yellow #FF6B6B
```

### Change Fonts
```bash
# Make name bigger
python quick_config.py --font size_heading1 3em

# Different font family
python quick_config.py --font family_primary "Georgia, serif"

# Bold everything
python quick_config.py --font weight_bold 700
```

### Change Layout
```bash
# Wider sidebar
python quick_config.py --layout sidebar_width 350px

# Bigger profile picture
python quick_config.py --layout profile_image_size 180px
```

### Save & Load Themes
```bash
# Save your custom theme
python quick_config.py --export my_dark_theme.json

# Load it later
python quick_config.py --import my_dark_theme.json

# Share with friends!
# They can use: python quick_config.py --import my_dark_theme.json
```

---

## 🎨 Available Customizations

### Colors (8 total)
- `primary_blue_dark` - Dark sidebar
- `primary_blue_light` - Light sidebar
- `accent_yellow` - Section headers
- `text_white` - Light text
- `text_dark` - Dark text
- `text_light_gray` - Gray text
- `background_white` - Background
- `border_gray` - Borders

### Fonts (10 total)
- `family_primary` - Main font
- `family_secondary` - Alt font
- `size_base` - Base size
- `size_heading1` - Largest (CV name)
- `size_heading2` - Large
- `size_heading3` - Medium
- `size_small` - Small
- `weight_normal` - Regular
- `weight_bold` - Bold

### Layout (6 total)
- `sidebar_width` - Sidebar size
- `max_width` - Page width
- `padding_default` - Spacing
- `cv_width` - A4 width (210mm)
- `cv_height` - A4 height (297mm)
- `profile_image_size` - Photo size

---

## 💡 Top Tips

✅ **Do's:**
- Save themes you like: `python quick_config.py --export theme_name.json`
- Share themes with friends
- Keep A4 dimensions for proper printing
- Use hex colors: `#RRGGBB`
- Export before major changes

❌ **Don'ts:**
- Don't manually edit `cv_config.json` (use the tools instead)
- Don't change `cv_width` and `cv_height` unless you want different paper sizes
- Don't use colors without # prefix
- Don't use spaces in property names

---

## 🎯 Common Workflows

### Workflow 1: Quick Color Change
```bash
python quick_config.py --show colors
python quick_config.py --color accent_yellow #FF6B6B
# Refresh browser - done!
```

### Workflow 2: Create Custom Theme
```bash
python cv_config.py
# Choose options to change colors, fonts, layout
# Choose option 10 to export as my_theme.json
```

### Workflow 3: Try Multiple Themes
```bash
python quick_config.py --export original.json
python quick_config.py --import dark_theme.json
# Try it out...
python quick_config.py --import original.json
# Back to original!
```

### Workflow 4: Professional Look
```bash
python quick_config.py --color primary_blue_dark #003366
python quick_config.py --font family_primary "Georgia, serif"
python quick_config.py --layout sidebar_width 280px
```

---

## 🔍 How It Works

1. **Store Settings** - All customizations saved in `cv_config.json`
2. **Python Tools** - Modify the JSON safely without manual editing
3. **Browser Reads** - HTML/CSS loads settings from JSON
4. **Instant Changes** - Refresh browser to see updates

---

## ❓ FAQ

**Q: Do I need Python installed?**
A: Yes, Python 3.6+ required. Download from python.org

**Q: Can I use this on Mac/Linux?**
A: Yes! Use `python cv_config.py` or `python quick_config.py`

**Q: What if I mess up?**
A: Run `python quick_config.py --reset` to restore defaults

**Q: Can I share my theme?**
A: Yes! Export JSON and share with others

**Q: Do I need to restart anything?**
A: Just refresh your browser to see changes

**Q: Can I edit JSON directly?**
A: You can, but the tools are safer and easier

---

## 🚦 Getting Started (Pick One!)

### For Windows GUI Users:
```bash
run_config.bat
```
Then choose options from the menu!

### For Quick Command-Line:
```bash
python quick_config.py --show colors
python quick_config.py --color accent_yellow #FF6B6B
```

### For Full Control:
```bash
python cv_config.py
```
Then choose options interactively!

---

## 📚 Documentation

- **CONFIG_GUIDE.md** - Complete reference guide
- **PYTHON_CONFIG_README.md** - Comprehensive documentation
- **This file** - Quick setup overview

---

## ✨ What's Next?

1. ✅ Run one of the tools: `python cv_config.py`
2. ✅ View current settings
3. ✅ Change colors, fonts, or layout
4. ✅ Refresh your CV in browser
5. ✅ Save your theme: `python quick_config.py --export my_theme.json`

---

## 🎉 Enjoy!

You now have professional tools to customize your CV without touching any code!

**Questions?** Check the documentation files or run `python quick_config.py --help`

Happy customizing! 🎨✨
