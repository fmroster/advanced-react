/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	center: {
  		display: 'flex',
  		alignItems: 'center',
  		justifyContent: 'center'
  	},
  	extend: {
  		colors: {
  			border: 'var(--border)',
  			input: 'var(--input)',
  			ring: 'var(--ring)',
  			background: 'var(--background)',
  			foreground: {
  				DEFAULT: 'var(--foreground)',
  				secondary: 'var(--foreground-secondary)'
  			},
  			primary: {
  				DEFAULT: 'var(--primary)',
  				foreground: 'var(--primary-foreground)',
  				washed: 'var(--primary-washed)',
  				hover: 'var(--primary-hover)'
  			},
  			secondary: {
  				DEFAULT: 'var(--secondary)',
  				foreground: 'var(--secondary-foreground)'
  			},
  			destructive: {
  				DEFAULT: 'var(--destructive)',
  				foreground: 'var(--destructive-foreground)',
  				hover: 'var(--destructive-hover)',
  				light: 'var(--destructive-light)',
  				washed: 'var(--destructive-washed)'
  			},
  			muted: {
  				DEFAULT: 'var(--muted)',
  				foreground: 'var(--muted-foreground)'
  			},
  			accent: {
  				DEFAULT: '#add6ff',
  				foreground: '#0069d1'
  			},
  			success: {
  				DEFAULT: 'var(--success)',
  				foreground: 'var(--success-foreground)',
  				hover: 'var(--success-hover)',
  				background: 'var(--success-background)',
  				light: 'var(--success-light)'
  			},
  			warning: {
  				DEFAULT: 'var(--warning)',
  				foreground: 'var(--warning-foreground)',
  				hover: 'var(--warning-hover)',
  				light: 'var(--warning-light)',
  				background: 'var(--warning-background)'
  			},
  			error: {
  				foreground: 'var(--error-foreground)',
  				background: 'var(--error-background)'
  			},
  			popover: {
  				DEFAULT: 'var(--popover)',
  				foreground: 'var(--popover-foreground)'
  			},
  			card: {
  				DEFAULT: 'var(--card)',
  				foreground: 'var(--card-foreground)'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		fontFamily: {
  			sans: [
  				'Libre Franklin", sans-serif',
  				'sans'
  			],
  			serif: [
  				'Playfair Display", serif',
  				'serif'
  			],
  			roboto: [
  				'Roboto',
  				'sans-serif'
  			],
  			montserrat: [
  				'Montserrat',
  				'sans-serif'
  			],
  			openSans: [
  				'Open Sans"',
  				'sans-serif'
  			],
  			playfair: [
  				'Playfair Display"',
  				'serif'
  			],
  			lora: [
  				'Lora',
  				'serif'
  			],
  			inconsolata: [
  				'Inconsolata',
  				'monospace'
  			],
  			custom: [
  				'Custom Font"',
  				'Arial',
  				'sans-serif'
  			]
  		}
  	}
  },

  plugins: [require('tailwindcss-animate')]
}
