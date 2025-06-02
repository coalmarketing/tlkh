import './index.css';
import './fonts/MundialRegular.otf';
//import "./fonts/fonts.css";
import './utils/i18n.ts';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { LoadScript } from '@react-google-maps/api';

const theme = extendTheme({
	colors: {
		primary: {
			orange: '#F78F31',
			purple: 'rgba(130, 84, 162, 1)',
			blue: 'rgba(62, 166, 222)',
			gray: '#A2A2A2',
			blueTransparent: 'rgba(62, 166, 222, 0.8)',
		},
		secondary: {
			blue: '#3EA6DE',
			purple: 'rgb(191, 165, 209)',
		}
	},
	breakpoints: {
		sm: '320px',
		md: '768px',
		lg: '960px',
		xl: '1310px',
		'2xl': '1536px',
		'3xl': '2240px',
	},
	fonts: {
		body: "'Mundial', sans-serif",
	},
	components: {
		Button: {
			variants: {
				solidOrange: {
					border: '2px solid',
					bg: 'primary.orange',
					borderColor: 'primary.orange',
					transition: '0.3s all',
					color: 'white',
					fontFamily: 'Mundial',
					borderRadius: 0,
					_hover: {
						bg: 'white',
						color: 'primary.orange',
					},
				},
				borderOrange: {
					border: '2px solid',
					color: 'primary.orange',
					borderColor: 'primary.orange',
					transition: '0.3s all',
					fontFamily: 'Mundial',
					bg: 'white',
					borderRadius: 0,
					_hover: {
						color: 'white',
						bg: 'primary.orange',
					},
				},
				solidPurple: {
					border: '2px solid',
					bg: 'primary.purple',
					fontFamily: 'Mundial',
					borderColor: 'primary.purple',
					transition: '0.3s all',
					color: 'white',
					borderRadius: 0,
					_hover: {
						bg: 'transparent',
						color: 'primary.purple',
					},
				},
				borderPurple: {
					border: '2px solid',
					color: 'primary.purple',
					fontFamily: 'Mundial',
					borderColor: 'primary.purple',
					transition: '0.3s all',
					bg: 'white',
					borderRadius: 0,
					_hover: {
						color: 'white',
						bg: 'primary.purple',
					},
				},
				solidBlue: {
					border: '2px solid',
					bg: 'primary.blue',
					borderColor: 'primary.blue',
					fontFamily: 'Mundial',
					transition: '0.3s all',
					color: 'white',
					borderRadius: 0,
					_hover: {
						bg: 'transparent',
						color: 'primary.blue',
					},
				},
				borderBlue: {
					border: '2px solid',
					color: 'primary.blue',
					borderColor: 'primary.blue',
					fontFamily: 'Mundial',
					transition: '0.3s all',
					bg: 'white',
					borderRadius: 0,
					_hover: {
						color: 'white',
						bg: 'primary.blue',
					},
				},
				solidBlack: {
					border: '3px solid',
					bg: 'black',
					borderColor: 'black',
					fontFamily: 'Mundial',
					transition: '0.3s all',
					color: 'white',
					borderRadius: 0,
					_hover: {
						bg: 'transparent',
						color: 'white',
						borderColor: 'white',
					},
				},
				solidGray: {
					border: '2px solid',
					bg: 'primary.gray',
					borderColor: 'primary.gray',
					fontFamily: 'Mundial',
					transition: '0.3s all',
					color: 'white',
					borderRadius: 0,
					_hover: {
						bg: 'white',
						color: 'primary.gray',
					},
				},
				solidOrangeWhite: {
					border: '3px solid',
					bg: 'white',
					borderColor: 'white',
					transition: '0.3s all',
					color: 'primary.orange',
					fontSize: '22px',
					fontWeight: 'normal',
					fontFamily: 'Mundial',
					borderRadius: 0,
					_hover: {
						bg: 'primary.orange',
						color: 'white',
					},
				},
				borderOrangeWhite: {
					border: '3px solid',
					bg: 'primary.orange',
					borderColor: 'white',
					fontFamily: 'Mundial',
					fontWeight: 'normal',
					fontSize: '22px',
					transition: '0.3s all',
					color: 'white',
					borderRadius: 0,
					_hover: {
						bg: 'white',
						color: 'primary.orange',
					},
				},
				solidWhiteBlue: {
					border: '3px solid',
					bg: 'white',
					borderColor: 'white',
					fontWeight: 'normal',
					fontFamily: 'Mundial',
					fontSize: { base: "1.3rem", md: "1.5rem", lg: '1.3rem', xl: '1.5rem' },
					transition: '0.3s all',
					color: 'primary.blue',
					borderRadius: 0,
					_hover: {
						bg: 'transparent',
						color: 'white',
					},
				},
				borderWhiteBlue: {
					border: '3px solid',
					bg: 'transparent',
					borderColor: 'white',
					fontWeight: 'normal',
					fontFamily: 'Mundial',
					fontSize: { base: "1.3rem", md: "1.5rem", lg: '1.3rem', xl: '1.5rem' },
					transition: '0.3s all',
					color: 'white',
					borderRadius: 0,
					_hover: {
						bg: 'white',
						color: 'primary.blue',
					},
				},
				whiteTrasnparent: {
					border: '3px solid',
					borderColor: 'white',
					fontWeight: 'normal',
					fontFamily: 'Mundial',
					fontSize: '22px',
					transition: '0.3s all',
					color: 'white',
					borderRadius: 0,
					_hover: {
						bg: 'white',
						borderColor: 'white',
						color: 'primary.purple',
					},
				},
				solidWhitePurple: {
					border: '3px solid',
					bg: 'white',
					borderColor: 'white',
					fontWeight: 'normal',
					fontFamily: 'Mundial',
					fontSize: { base: "1.3rem", md: "1.5rem", lg: '1.3rem', xl: '1.5rem' },
					transition: '0.3s all',
					color: 'primary.purple',
					borderRadius: 0,
					_hover: {
						bg: 'transparent',
						color: 'white',
					},
				},
				borderWhitePurple: {
					border: '3px solid',
					bg: 'transparent',
					borderColor: 'white',
					fontWeight: 'normal',
					fontFamily: 'Mundial',
					fontSize: { base: "1.3rem", md: "1.5rem", lg: '1.3rem', xl: '1.5rem' },
					transition: '0.3s all',
					color: 'white',
					borderRadius: 0,
					_hover: {
						bg: 'white',
						color: 'primary.purple',
					},
				},
				solidWhiteOrange: {
					border: '3px solid',
					bg: 'white',
					borderColor: 'white',
					fontWeight: 'normal',
					fontFamily: 'Mundial',
					fontSize: { base: "1.3rem", md: "1.5rem", lg: '1.3rem', xl: '1.5rem' },
					transition: '0.3s all',
					color: 'primary.orange',
					borderRadius: 0,
					_hover: {
						bg: 'transparent',
						color: 'white',
						borderColor: 'white',
					},
				},
				borderWhiteOrange: {
					border: '3px solid',
					bg: 'transparent',
					borderColor: 'white',
					fontFamily: 'Mundial',
					fontWeight: 'normal',
					fontSize: { base: "1.3rem", md: "1.5rem", lg: '1.3rem', xl: '1.5rem' },
					transition: '0.3s all',
					color: 'white',
					borderRadius: 0,
					_hover: {
						bg: 'white',
						color: 'primary.orange',
					},
				},
				blueWhite: {
					border: '3px solid',
					bg: 'primary.blue',
					borderColor: 'primary.blue',
					fontFamily: 'Mundial',
					fontWeight: 'normal',
					fontSize: { base: "1.3rem", md: "1.5rem", lg: '1.3rem', xl: '1.5rem' },
					transition: '0.3s all',
					color: 'white',
					borderRadius: 0,
					_hover: {
						bg: 'transparent',
						color: 'white',
						borderColor: "white"
					},
				},
				whiteBlue: {
					border: '3px solid',
					bg: 'transparent',
					borderColor: 'white',
					fontFamily: 'Mundial',
					fontWeight: 'normal',
					fontSize: { base: "1.3rem", md: "1.5rem", lg: '1.3rem', xl: '1.5rem' },
					transition: '0.3s all',
					color: 'white',
					borderRadius: 0,
					_hover: {
						bg: 'primary.blue',
						color: 'white',
						borderColor: 'primary.blue',
					},
				},
				whiteBlack: {
					border: '3px solid',
					bg: 'transparent',
					borderColor: 'white',
					fontFamily: 'Mundial',
					fontWeight: 'normal',
					fontSize: { base: "1.3rem", md: "1.5rem", lg: '1.3rem', xl: '1.5rem' },
					transition: '0.3s all',
					color: 'white',
					borderRadius: 0,
					_hover: {
						bg: 'black',
						color: 'white',
						borderColor: 'black',
					},
				}
			},
		},
	},
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<LoadScript googleMapsApiKey="AIzaSyBW-Sh2TFKtCeUUPRLLz0AXCFXz_Qgo4Zw">
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</LoadScript>
		</ChakraProvider>
	</React.StrictMode>
);
