#!/usr/bin/env python3
"""
Quick CLI for CV Config - Edit settings from command line
Usage: python quick_config.py --color primary_blue_dark #003366
       python quick_config.py --font size_heading1 3em
       python quick_config.py --layout sidebar_width 350px
"""

import sys
import argparse
from cv_config import CVConfig

def main():
    parser = argparse.ArgumentParser(
        description='Quick configuration editor for CV Generator',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python quick_config.py --show all
  python quick_config.py --show colors
  python quick_config.py --color accent_yellow #FF6B6B
  python quick_config.py --font family_primary "Georgia, serif"
  python quick_config.py --layout sidebar_width 350px
  python quick_config.py --reset
        """
    )
    
    parser.add_argument('--show', choices=['all', 'colors', 'fonts', 'layout'],
                       help='Show configuration')
    parser.add_argument('--color', nargs=2, metavar=('NAME', 'VALUE'),
                       help='Set a color (e.g., primary_blue_dark #003366)')
    parser.add_argument('--font', nargs=2, metavar=('PROPERTY', 'VALUE'),
                       help='Set a font property (e.g., size_heading1 3em)')
    parser.add_argument('--layout', nargs=2, metavar=('PROPERTY', 'VALUE'),
                       help='Set a layout property (e.g., sidebar_width 350px)')
    parser.add_argument('--reset', action='store_true',
                       help='Reset to default configuration')
    parser.add_argument('--export', metavar='FILENAME',
                       help='Export configuration to file')
    parser.add_argument('--import', metavar='FILENAME', dest='import_file',
                       help='Import configuration from file')
    
    args = parser.parse_args()
    config = CVConfig()
    
    if args.show:
        if args.show == 'all':
            config.show_all()
        elif args.show == 'colors':
            config.show_colors()
        elif args.show == 'fonts':
            config.show_fonts()
        elif args.show == 'layout':
            config.show_layout()
    
    elif args.color:
        config.set_color(args.color[0], args.color[1])
        config.show_colors()
    
    elif args.font:
        config.set_font(args.font[0], args.font[1])
        config.show_fonts()
    
    elif args.layout:
        config.set_layout(args.layout[0], args.layout[1])
        config.show_layout()
    
    elif args.reset:
        config.reset_to_default()
        config.show_all()
    
    elif args.export:
        config.export_config(args.export)
    
    elif args.import_file:
        config.import_config(args.import_file)
        config.show_all()
    
    else:
        parser.print_help()

if __name__ == '__main__':
    main()
