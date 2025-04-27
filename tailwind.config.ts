/* eslint-disable @typescript-eslint/no-require-imports */

import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		sm: '576px',
  		md: '768px',
  		lg: '992px',
  		xl: '1200px',
  		'2xl': '1560px'
  	},
  	extend: {
  		animation: {
  			bounce: 'bounce 2s infinite ease-in-out',
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
  			'arrow-hover': 'link-arrow-hover 0.4s ease',
  			'tp-scaleout': 'tp-scaleout 1s infinite ease-in-out',
  			'tp-bounce': 'tp-bounce 2s infinite ease-in-out',
  			'tp-rotateplane': 'tp-rotateplane 1.2s infinite ease-in-out',
  			'tp-rotate': 'tp-rotate 2s infinite linear',
  			'tp-bouncedelay': 'tp-bouncedelay 1.4s infinite ease-in-out',
  			'rev-ani-mouse': 'rev-ani-mouse 2.5s linear infinite',
  			'text-rotate': '',
  			'swiper-preloader-spin': 'swiper-preloader-spin 1s infinite linear',
  			'progress-bar-stripes': 'progress-bar-stripes 1s linear infinite',
  			'spinner-border': 'spinner-border 0.75s linear infinite',
  			'spinner-grow': 'spinner-grow 0.75s linear infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			'spinner-grow': {
  				'0%': {
  					'-webkit-transform': 'scale(0)',
  					transform: 'scale(0)'
  				},
  				'50%': {
  					opacity: '1',
  					'-webkit-transform': 'none',
  					transform: 'none'
  				}
  			},
  			'spinner-border': {
  				to: {
  					'-webkit-transform': 'rotate(360deg)',
  					transform: 'rotate(360deg)'
  				}
  			},
  			'progress-bar-stripes': {
  				from: {
  					'background-position': '1rem 0'
  				},
  				to: {
  					'background-position': '0 0'
  				}
  			},
  			'swiper-preloader-spin': {
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			'tp-bounce': {
  				'0% , 100%': {
  					transform: 'scale(0)'
  				},
  				'50%': {
  					transform: 'scale(1)'
  				}
  			},
  			'tp-rotate': {
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			'tp-bouncedelay': {
  				'0% , 100% , 80%': {
  					transform: 'scale(0)'
  				},
  				'40%': {
  					transform: 'scale(1)'
  				}
  			},
  			'tp-scaleout': {
  				'0%': {
  					transform: 'scale(0)'
  				},
  				'100%': {
  					transform: 'scale(1)',
  					opacity: '0'
  				}
  			},
  			'tp-rotateplane': {
  				'0%': {
  					transform: 'perspective(120px) rotateX(0) rotateY(0)'
  				},
  				'50%': {
  					transform: 'perspective(120px) rotateX(-180.1deg) rotateY(0)'
  				},
  				'100%': {
  					transform: 'perspective(120px) rotateX(-180deg) rotateY(-179.9deg)'
  				}
  			},
  			'rev-ani-mouse': {
  				'0%': {
  					opacity: '1',
  					top: '29%'
  				},
  				'15%': {
  					opacity: '1',
  					top: '50%'
  				},
  				'50%': {
  					opacity: '0',
  					top: '50%'
  				},
  				'100%': {
  					opacity: '0',
  					top: '29%'
  				}
  			},
  			'text-rotate': {
  				'0%': {
  					transform: 'rotate(0)'
  				},
  				'100%': {
  					transform: 'rotate(-360deg)'
  				}
  			},
  			bounce: {
  				'0%, 100%': {
  					transform: 'scale(0)'
  				},
  				'50%': {
  					transform: 'scale(1)'
  				}
  			},
  			'link-arrow-hover': {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'50%': {
  					transform: 'translateX(3px)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
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
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
