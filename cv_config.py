#!/usr/bin/env python3
"""
CV Generator Configuration Manager
Easily customize colors, fonts, and other properties without manual file editing
"""

import json
import re
from pathlib import Path
from typing import Dict, Any, Optional

class CVConfig:
    """Manage CV Generator configuration"""
    
    def __init__(self):
        self.config_file = Path(__file__).parent / "cv_config.json"
        self.style_file = Path(__file__).parent / "style.css"
        self.index_file = Path(__file__).parent / "index.html"
        self.config = self.load_config()
    
    def load_config(self) -> Dict[str, Any]:
        """Load configuration from JSON file"""
        if self.config_file.exists():
            with open(self.config_file, 'r') as f:
                return json.load(f)
        return self.get_default_config()
    
    def get_default_config(self) -> Dict[str, Any]:
        """Return default configuration"""
        return {
            "colors": {
                "primary_blue_dark": "#1e3c72",
                "primary_blue_light": "#2a5298",
                "accent_yellow": "#ffc107",
                "text_white": "#ffffff",
                "text_dark": "#333333",
                "text_light_gray": "#666666",
                "background_white": "#ffffff",
                "border_gray": "#e0e0e0"
            },
            "fonts": {
                "family_primary": "Arial, sans-serif",
                "family_secondary": "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
                "size_base": "16px",
                "size_heading1": "2em",
                "size_heading2": "1.5em",
                "size_heading3": "1.2em",
                "size_small": "0.9em",
                "weight_normal": "400",
                "weight_bold": "700"
            },
            "layout": {
                "sidebar_width": "300px",
                "max_width": "1400px",
                "padding_default": "25px",
                "cv_width": "210mm",
                "cv_height": "297mm",
                "profile_image_size": "150px"
            },
            "cv_name": {
                "name_font_size": "2.6em",
                "summary_font_size": "1em",
                "summary_style": "italic"
            },
            "effects": {
                "box_shadow": "0 10px 40px rgba(0, 0, 0, 0.2)",
                "border_radius": "8px",
                "transition": "all 0.3s ease"
            }
        }
    
    def save_config(self) -> None:
        """Save configuration to JSON file"""
        with open(self.config_file, 'w') as f:
            json.dump(self.config, f, indent=4)
        print(f"✅ Configuration saved to {self.config_file}")
    
    def apply_to_css(self) -> None:
        """Apply configuration to style.css"""
        css_content = self.style_file.read_text()
        
        # Apply colors
        colors = self.config.get("colors", {})
        for color_name, color_value in colors.items():
            # Replace CSS variables or hardcoded colors
            pattern = f"(--{color_name}|{color_name}):\\s*[#\\w()\\s,.-]+;"
            replacement = f"--{color_name}: {color_value};"
            css_content = re.sub(pattern, replacement, css_content, flags=re.IGNORECASE)
        
        # Apply layout values
        layout = self.config.get("layout", {})
        for layout_key, layout_value in layout.items():
            # Replace width: 300px; with new value
            if layout_key == "sidebar_width":
                css_content = re.sub(
                    r"\.sidebar-section\s*{[^}]*width:\s*\d+px",
                    f".sidebar-section {{ width: {layout_value}",
                    css_content
                )
        
        self.style_file.write_text(css_content)
        print(f"✅ CSS updated with configuration")
    
    def set_color(self, color_name: str, hex_value: str) -> None:
        """Set a specific color"""
        if color_name not in self.config["colors"]:
            print(f"❌ Color '{color_name}' not found. Available colors:")
            print(", ".join(self.config["colors"].keys()))
            return
        
        self.config["colors"][color_name] = hex_value
        self.save_config()
        print(f"✅ Set {color_name} to {hex_value}")
    
    def set_font(self, font_property: str, value: str) -> None:
        """Set a specific font property"""
        if font_property not in self.config["fonts"]:
            print(f"❌ Font property '{font_property}' not found. Available properties:")
            print(", ".join(self.config["fonts"].keys()))
            return
        
        self.config["fonts"][font_property] = value
        self.save_config()
        print(f"✅ Set {font_property} to {value}")
    
    def set_layout(self, layout_key: str, value: str) -> None:
        """Set a layout property"""
        if layout_key not in self.config["layout"]:
            print(f"❌ Layout property '{layout_key}' not found. Available properties:")
            print(", ".join(self.config["layout"].keys()))
            return
        
        self.config["layout"][layout_key] = value
        self.save_config()
        print(f"✅ Set {layout_key} to {value}")
    
    def show_colors(self) -> None:
        """Display all colors"""
        print("\n" + "="*50)
        print("📋 CURRENT COLOR SCHEME")
        print("="*50)
        for color_name, color_value in self.config["colors"].items():
            print(f"  {color_name:.<30} {color_value}")
    
    def show_fonts(self) -> None:
        """Display all fonts"""
        print("\n" + "="*50)
        print("🔤 CURRENT FONTS")
        print("="*50)
        for font_prop, font_value in self.config["fonts"].items():
            print(f"  {font_prop:.<30} {font_value}")
    
    def show_layout(self) -> None:
        """Display all layout properties"""
        print("\n" + "="*50)
        print("📐 CURRENT LAYOUT")
        print("="*50)
        for layout_key, layout_value in self.config["layout"].items():
            print(f"  {layout_key:.<30} {layout_value}")
    
    def show_all(self) -> None:
        """Display entire configuration"""
        self.show_colors()
        self.show_fonts()
        self.show_layout()
        print("\n" + "="*50 + "\n")
    
    def reset_to_default(self) -> None:
        """Reset configuration to defaults"""
        self.config = self.get_default_config()
        self.save_config()
        print("✅ Configuration reset to defaults")
    
    def export_config(self, filename: str) -> None:
        """Export configuration to a file"""
        output_path = Path(__file__).parent / filename
        with open(output_path, 'w') as f:
            json.dump(self.config, f, indent=4)
        print(f"✅ Configuration exported to {output_path}")
    
    def import_config(self, filename: str) -> None:
        """Import configuration from a file"""
        input_path = Path(__file__).parent / filename
        if not input_path.exists():
            print(f"❌ File not found: {input_path}")
            return
        
        with open(input_path, 'r') as f:
            self.config = json.load(f)
        self.save_config()
        print(f"✅ Configuration imported from {filename}")


def main():
    """Interactive CLI menu"""
    config = CVConfig()
    
    while True:
        print("\n" + "="*50)
        print("🎨 CV GENERATOR CONFIG TOOL")
        print("="*50)
        print("1. View all settings")
        print("2. View colors")
        print("3. View fonts")
        print("4. View layout")
        print("5. Change a color")
        print("6. Change a font")
        print("7. Change a layout property")
        print("8. Apply config to CSS")
        print("9. Reset to defaults")
        print("10. Export configuration")
        print("11. Import configuration")
        print("0. Exit")
        print("="*50)
        
        choice = input("Enter your choice (0-11): ").strip()
        
        if choice == "0":
            print("👋 Goodbye!")
            break
        elif choice == "1":
            config.show_all()
        elif choice == "2":
            config.show_colors()
        elif choice == "3":
            config.show_fonts()
        elif choice == "4":
            config.show_layout()
        elif choice == "5":
            config.show_colors()
            color_name = input("\nEnter color name to change: ").strip()
            hex_value = input("Enter new hex value (e.g., #FF5733): ").strip()
            config.set_color(color_name, hex_value)
        elif choice == "6":
            config.show_fonts()
            font_prop = input("\nEnter font property to change: ").strip()
            font_value = input("Enter new value: ").strip()
            config.set_font(font_prop, font_value)
        elif choice == "7":
            config.show_layout()
            layout_key = input("\nEnter layout property to change: ").strip()
            layout_value = input("Enter new value: ").strip()
            config.set_layout(layout_key, layout_value)
        elif choice == "8":
            config.apply_to_css()
        elif choice == "9":
            confirm = input("Are you sure? This will reset all to defaults (y/n): ").strip().lower()
            if confirm == 'y':
                config.reset_to_default()
        elif choice == "10":
            filename = input("Enter filename to export (e.g., my_config.json): ").strip()
            config.export_config(filename)
        elif choice == "11":
            filename = input("Enter filename to import: ").strip()
            config.import_config(filename)
        else:
            print("❌ Invalid choice. Please try again.")


if __name__ == "__main__":
    main()
