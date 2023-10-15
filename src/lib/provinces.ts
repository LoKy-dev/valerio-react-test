/**
 * Contains all the provinces and the respective geospatial coordinates.
 *
 * This array was created by filtering the INSTAT CSV and the geospatial data retrieved from OpenStreetMap with this
 * endpoint: `https://nominatim.openstreetmap.org/search?q=${key}&format=json&featureType=city`
 */
export const provinces = [
	{
		key: 'agrigento',
		name: 'Agrigento',
		code: 'AG',
		region: 'Sicilia',
		lat: '37.3122991',
		lon: '13.57465'
	},
	{
		key: 'alessandria',
		name: 'Alessandria',
		code: 'AL',
		region: 'Piemonte',
		lat: '31.1991806',
		lon: '29.8951716'
	},
	{
		key: 'ancona',
		name: 'Ancona',
		code: 'AN',
		region: 'Marche',
		lat: '43.6170137',
		lon: '13.5170982'
	},
	{
		key: 'aosta',
		name: 'Aosta',
		code: 'AO',
		region: 'Valle d\'Aosta',
		lat: '45.7370885',
		lon: '7.3196649'
	},
	{
		key: 'arezzo',
		name: 'Arezzo',
		code: 'AR',
		region: 'Toscana',
		lat: '43.4628957',
		lon: '11.8781675'
	},
	{
		key: 'ascoli',
		name: 'Ascoli Piceno',
		code: 'AP',
		region: 'Marche',
		lat: '42.8546185',
		lon: '13.5755038'
	},
	{
		key: 'asti',
		name: 'Asti',
		code: 'AT',
		region: 'Piemonte',
		lat: '44.900542',
		lon: '8.2068876'
	},
	{
		key: 'avellino',
		name: 'Avellino',
		code: 'AV',
		region: 'Campania',
		lat: '40.9141958',
		lon: '14.7888764'
	},
	{
		key: 'bari',
		name: 'Bari',
		code: 'BA',
		region: 'Puglia',
		lat: '41.1257843',
		lon: '16.8620293'
	},
	{
		key: 'barletta-andria-trani',
		name: 'Barletta-Andria-Trani',
		code: 'BT',
		region: 'Puglia',
		lat: '41.3214976',
		lon: '16.2868696'
	},
	{
		key: 'belluno',
		name: 'Belluno',
		code: 'BL',
		region: 'Veneto',
		lat: '46.1375185',
		lon: '12.2181711'
	},
	{
		key: 'benevento',
		name: 'Benevento',
		code: 'BN',
		region: 'Campania',
		lat: '41.1295587',
		lon: '14.7824639'
	},
	{
		key: 'bergamo',
		name: 'Bergamo',
		code: 'BG',
		region: 'Lombardia',
		lat: '45.6944947',
		lon: '9.6698727'
	},
	{
		key: 'biella',
		name: 'Biella',
		code: 'BI',
		region: 'Piemonte',
		lat: '45.5663358',
		lon: '8.0530903'
	},
	{
		key: 'bologna',
		name: 'Bologna',
		code: 'BO',
		region: 'Emilia-Romagna',
		lat: '44.4938203',
		lon: '11.3426327'
	},
	{
		key: 'bolzano',
		name: 'Bolzano',
		code: 'BZ',
		region: 'Trentino-Alto Adige',
		lat: '46.4981125',
		lon: '11.3547801'
	},
	{
		key: 'brescia',
		name: 'Brescia',
		code: 'BS',
		region: 'Lombardia',
		lat: '45.5398022',
		lon: '10.2200214'
	},
	{
		key: 'brindisi',
		name: 'Brindisi',
		code: 'BR',
		region: 'Puglia',
		lat: '40.6395295',
		lon: '17.945526'
	},
	{
		key: 'cagliari',
		name: 'Cagliari',
		code: 'CA',
		region: 'Sardegna',
		lat: '39.2171994',
		lon: '9.113311'
	},
	{
		key: 'caltanissetta',
		name: 'Caltanissetta',
		code: 'CL',
		region: 'Sicilia',
		lat: '37.4899412',
		lon: '14.0631618'
	},
	{
		key: 'campobasso',
		name: 'Campobasso',
		code: 'CB',
		region: 'Molise',
		lat: '41.5597935',
		lon: '14.6602725'
	},
	{
		key: 'caserta',
		name: 'Caserta',
		code: 'CE',
		region: 'Campania',
		lat: '41.0820827',
		lon: '14.334708'
	},
	{
		key: 'catania',
		name: 'Catania',
		code: 'CT',
		region: 'Sicilia',
		lat: '37.5023612',
		lon: '15.0873718'
	},
	{
		key: 'catanzaro',
		name: 'Catanzaro',
		code: 'CZ',
		region: 'Calabria',
		lat: '38.9076353',
		lon: '16.5960465'
	},
	{
		key: 'chieti',
		name: 'Chieti',
		code: 'CH',
		region: 'Abruzzo',
		lat: '42.3446529',
		lon: '14.1659738'
	},
	{
		key: 'como',
		name: 'Como',
		code: 'CO',
		region: 'Lombardia',
		lat: '45.8115623',
		lon: '9.0830353'
	},
	{
		key: 'cosenza',
		name: 'Cosenza',
		code: 'CS',
		region: 'Calabria',
		lat: '39.3099931',
		lon: '16.2501929'
	},
	{
		key: 'cremona',
		name: 'Cremona',
		code: 'CR',
		region: 'Lombardia',
		lat: '45.1334796',
		lon: '10.0248716'
	},
	{
		key: 'crotone',
		name: 'Crotone',
		code: 'KR',
		region: 'Calabria',
		lat: '39.0806223',
		lon: '17.127196'
	},
	{
		key: 'cuneo',
		name: 'Cuneo',
		code: 'CN',
		region: 'Piemonte',
		lat: '44.389633',
		lon: '7.5479007'
	},
	{
		key: 'enna',
		name: 'Enna',
		code: 'EN',
		region: 'Sicilia',
		lat: '37.5667573',
		lon: '14.2807473'
	},
	{
		key: 'fermo',
		name: 'Fermo',
		code: 'FM',
		region: 'Marche',
		lat: '43.1604184',
		lon: '13.7161408'
	},
	{
		key: 'ferrara',
		name: 'Ferrara',
		code: 'FE',
		region: 'Emilia-Romagna',
		lat: '44.8372737',
		lon: '11.6186451'
	},
	{
		key: 'firenze',
		name: 'Firenze',
		code: 'FI',
		region: 'Toscana',
		lat: '43.7698712',
		lon: '11.2555757'
	},
	{
		key: 'foggia',
		name: 'Foggia',
		code: 'FG',
		region: 'Puglia',
		lat: '41.4620482',
		lon: '15.5432595'
	},
	{
		key: 'forlì-Cesena',
		name: 'Forlì-Cesena',
		code: 'FC',
		region: 'Emilia-Romagna',
		lat: '44.2227278',
		lon: '12.041273'
	},
	{
		key: 'frosinone',
		name: 'Frosinone',
		code: 'FR',
		region: 'Lazio',
		lat: '41.640776',
		lon: '13.3507562'
	},
	{
		key: 'genova',
		name: 'Genova',
		code: 'GE',
		region: 'Liguria',
		lat: '44.40726',
		lon: '8.9338624'
	},
	{
		key: 'gorizia',
		name: 'Gorizia',
		code: 'GO',
		region: 'Friuli-Venezia Giulia',
		lat: '45.9451611',
		lon: '13.625261'
	},
	{
		key: 'grosseto',
		name: 'Grosseto',
		code: 'GR',
		region: 'Toscana',
		lat: '42.7597261',
		lon: '11.1137389'
	},
	{
		key: 'imperia',
		name: 'Imperia',
		code: 'IM',
		region: 'Liguria',
		lat: '43.8861996',
		lon: '8.0285359'
	},
	{
		key: 'isernia',
		name: 'Isernia',
		code: 'IS',
		region: 'Molise',
		lat: '41.600175',
		lon: '14.2383017'
	},
	{
		key: 'l-aquila',
		name: 'L\'Aquila',
		code: 'AQ',
		region: 'Abruzzo',
		lat: '42.3489203',
		lon: '13.3979672'
	},
	{
		key: 'la-spezia',
		name: 'La Spezia',
		code: 'SP',
		region: 'Liguria',
		lat: '44.1033871',
		lon: '9.8217022'
	},
	{
		key: 'latina',
		name: 'Latina',
		code: 'LT',
		region: 'Lazio',
		lat: '41.4672827',
		lon: '12.9037789'
	},
	{
		key: 'lecce',
		name: 'Lecce',
		code: 'LE',
		region: 'Puglia',
		lat: '40.3570373',
		lon: '18.1718482'
	},
	{
		key: 'lecco',
		name: 'Lecco',
		code: 'LC',
		region: 'Lombardia',
		lat: '45.8553764',
		lon: '9.389605'
	},
	{
		key: 'livorno',
		name: 'Livorno',
		code: 'LI',
		region: 'Toscana',
		lat: '43.5507317',
		lon: '10.3091256'
	},
	{
		key: 'lodi',
		name: 'Lodi',
		code: 'LO',
		region: 'Lombardia',
		lat: '45.3138827',
		lon: '9.5024315'
	},
	{
		key: 'lucca',
		name: 'Lucca',
		code: 'LU',
		region: 'Toscana',
		lat: '43.8428381',
		lon: '10.502876'
	},
	{
		key: 'macerata',
		name: 'Macerata',
		code: 'MC',
		region: 'Marche',
		lat: '43.3007275',
		lon: '13.4535897'
	},
	{
		key: 'mantova',
		name: 'Mantova',
		code: 'MN',
		region: 'Lombardia',
		lat: '45.1566683',
		lon: '10.7917191'
	},
	{
		key: 'massa-carrara',
		name: 'Massa-Carrara',
		code: 'MS',
		region: 'Toscana',
		lat: '44.0771026',
		lon: '10.096726'
	},
	{
		key: 'matera',
		name: 'Matera',
		code: 'MT',
		region: 'Basilicata',
		lat: '40.667029',
		lon: '16.6063265'
	},
	{
		key: 'messina',
		name: 'Messina',
		code: 'ME',
		region: 'Sicilia',
		lat: '38.1937571',
		lon: '15.5542082'
	},
	{
		key: 'milano',
		name: 'Milano',
		code: 'MI',
		region: 'Lombardia',
		lat: '45.4641943',
		lon: '9.1896346'
	},
	{
		key: 'modena',
		name: 'Modena',
		code: 'MO',
		region: 'Emilia-Romagna',
		lat: '44.6458885',
		lon: '10.9255707'
	},
	{
		key: 'monza-e-brianza',
		name: 'Monza e Brianza',
		code: 'MB',
		region: 'Lombardia',
		lat: '45.5834418',
		lon: '9.2735257'
	},
	{
		key: 'napoli',
		name: 'Napoli',
		code: 'NA',
		region: 'Campania',
		lat: '40.8358846',
		lon: '14.2487679'
	},
	{
		key: 'novara',
		name: 'Novara',
		code: 'NO',
		region: 'Piemonte',
		lat: '45.4464036',
		lon: '8.619655'
	},
	{
		key: 'nuoro',
		name: 'Nuoro',
		code: 'NU',
		region: 'Sardegna',
		lat: '40.3210601',
		lon: '9.3297339'
	},
	{
		key: 'oristano',
		name: 'Oristano',
		code: 'OR',
		region: 'Sardegna',
		lat: '39.9059497',
		lon: '8.5916112'
	},
	{
		key: 'padova',
		name: 'Padova',
		code: 'PD',
		region: 'Veneto',
		lat: '45.4077172',
		lon: '11.8734455'
	},
	{
		key: 'palermo',
		name: 'Palermo',
		code: 'PA',
		region: 'Sicilia',
		lat: '38.1112268',
		lon: '13.3524434'
	},
	{
		key: 'parma',
		name: 'Parma',
		code: 'PR',
		region: 'Emilia-Romagna',
		lat: '44.8013678',
		lon: '10.3280833'
	},
	{
		key: 'pavia',
		name: 'Pavia',
		code: 'PV',
		region: 'Lombardia',
		lat: '45.1860043',
		lon: '9.1546375'
	},
	{
		key: 'perugia',
		name: 'Perugia',
		code: 'PG',
		region: 'Umbria',
		lat: '43.1119613',
		lon: '12.3890104'
	},
	{
		key: 'pesaro-e-urbino',
		name: 'Pesaro e Urbino',
		code: 'PU',
		region: 'Marche',
		lat: '43.7262608',
		lon: '12.6363135'
	},
	{
		key: 'pescara',
		name: 'Pescara',
		code: 'PE',
		region: 'Abruzzo',
		lat: '42.469613',
		lon: '14.2059269'
	},
	{
		key: 'piacenza',
		name: 'Piacenza',
		code: 'PC',
		region: 'Emilia-Romagna',
		lat: '45.0534751',
		lon: '9.6947461'
	},
	{
		key: 'pisa',
		name: 'Pisa',
		code: 'PI',
		region: 'Toscana',
		lat: '43.7159395',
		lon: '10.4018624'
	},
	{
		key: 'pistoia',
		name: 'Pistoia',
		code: 'PT',
		region: 'Toscana',
		lat: '43.9336213',
		lon: '10.9174238'
	},
	{
		key: 'pordenone',
		name: 'Pordenone',
		code: 'PN',
		region: 'Friuli-Venezia Giulia',
		lat: '45.9562503',
		lon: '12.6597197'
	},
	{
		key: 'potenza',
		name: 'Potenza',
		code: 'PZ',
		region: 'Basilicata',
		lat: '40.6384046',
		lon: '15.8022077'
	},
	{
		key: 'prato',
		name: 'Prato',
		code: 'PO',
		region: 'Toscana',
		lat: '43.880598',
		lon: '11.0969262'
	},
	{
		key: 'ragusa',
		name: 'Ragusa',
		code: 'RG',
		region: 'Sicilia',
		lat: '42.64873625',
		lon: '18.094680152605108'
	},
	{
		key: 'ravenna',
		name: 'Ravenna',
		code: 'RA',
		region: 'Emilia-Romagna',
		lat: '44.4161414',
		lon: '12.2017617'
	},
	{
		key: 'reggio-calabria',
		name: 'Reggio Calabria',
		code: 'RC',
		region: 'Calabria',
		lat: '38.1035389',
		lon: '15.6397556'
	},
	{
		key: 'reggio-emilia',
		name: 'Reggio Emilia',
		code: 'RE',
		region: 'Emilia-Romagna',
		lat: '44.6978389',
		lon: '10.6304971'
	},
	{
		key: 'rieti',
		name: 'Rieti',
		code: 'RI',
		region: 'Lazio',
		lat: '42.4025143',
		lon: '12.8604386'
	},
	{
		key: 'rimini',
		name: 'Rimini',
		code: 'RN',
		region: 'Emilia-Romagna',
		lat: '44.0593886',
		lon: '12.5684371'
	},
	{
		key: 'roma',
		name: 'Roma',
		code: 'RM',
		region: 'Lazio',
		lat: '41.8933203',
		lon: '12.4829321'
	},
	{
		key: 'rovigo',
		name: 'Rovigo',
		code: 'RO',
		region: 'Veneto',
		lat: '45.0698166',
		lon: '11.78882'
	},
	{
		key: 'salerno',
		name: 'Salerno',
		code: 'SA',
		region: 'Campania',
		lat: '40.6803601',
		lon: '14.7594542'
	},
	{
		key: 'sassari',
		name: 'Sassari',
		code: 'SS',
		region: 'Sardegna',
		lat: '40.7232643',
		lon: '8.5610074'
	},
	{
		key: 'savona',
		name: 'Savona',
		code: 'SV',
		region: 'Liguria',
		lat: '44.3080251',
		lon: '8.4810315'
	},
	{
		key: 'siena',
		name: 'Siena',
		code: 'SI',
		region: 'Toscana',
		lat: '43.3185536',
		lon: '11.3316533'
	},
	{
		key: 'siracusa',
		name: 'Siracusa',
		code: 'SR',
		region: 'Sicilia',
		lat: '37.0646139',
		lon: '15.2907196'
	},
	{
		key: 'sondrio',
		name: 'Sondrio',
		code: 'SO',
		region: 'Lombardia',
		lat: '46.1713553',
		lon: '9.8734274'
	},
	{
		key: 'sud-sardegna',
		name: 'Sud Sardegna',
		code: 'SU',
		region: 'Sardegna',
		lat: '39.165332',
		lon: '8.527834'
	},
	{
		key: 'taranto',
		name: 'Taranto',
		code: 'TA',
		region: 'Puglia',
		lat: '40.4712427',
		lon: '17.2432278'
	},
	{
		key: 'teramo',
		name: 'Teramo',
		code: 'TE',
		region: 'Abruzzo',
		lat: '42.6612893',
		lon: '13.6983524'
	},
	{
		key: 'terni',
		name: 'Terni',
		code: 'TR',
		region: 'Umbria',
		lat: '42.5641417',
		lon: '12.6405466'
	},
	{
		key: 'torino',
		name: 'Torino',
		code: 'TO',
		region: 'Piemonte',
		lat: '45.0677551',
		lon: '7.6824892'
	},
	{
		key: 'trapani',
		name: 'Trapani',
		code: 'TP',
		region: 'Sicilia',
		lat: '38.0174321',
		lon: '12.515992'
	},
	{
		key: 'trento',
		name: 'Trento',
		code: 'TN',
		region: 'Trentino-Alto Adige',
		lat: '46.0664228',
		lon: '11.1257601'
	},
	{
		key: 'treviso',
		name: 'Treviso',
		code: 'TV',
		region: 'Veneto',
		lat: '45.6658505',
		lon: '12.2455414'
	},
	{
		key: 'trieste',
		name: 'Trieste',
		code: 'TS',
		region: 'Friuli-Venezia Giulia',
		lat: '45.6496485',
		lon: '13.7772781'
	},
	{
		key: 'udine',
		name: 'Udine',
		code: 'UD',
		region: 'Friuli-Venezia Giulia',
		lat: '46.0634632',
		lon: '13.2358377'
	},
	{
		key: 'varese',
		name: 'Varese',
		code: 'VA',
		region: 'Lombardia',
		lat: '45.817549',
		lon: '8.8263532'
	},
	{
		key: 'venezia',
		name: 'Venezia',
		code: 'VE',
		region: 'Veneto',
		lat: '45.4371908',
		lon: '12.3345898'
	},
	{
		key: 'verbano-cusio-ossola',
		name: 'Verbano-Cusio-Ossola',
		code: 'VB',
		region: 'Piemonte',
		lat: '45.988976',
		lon: '8.344519'
	},
	{
		key: 'vercelli',
		name: 'Vercelli',
		code: 'VC',
		region: 'Piemonte',
		lat: '45.3255046',
		lon: '8.4229812'
	},
	{
		key: 'verona',
		name: 'Verona',
		code: 'VR',
		region: 'Veneto',
		lat: '45.4384958',
		lon: '10.9924122'
	},
	{
		key: 'vibo-valentia',
		name: 'Vibo Valentia',
		code: 'VV',
		region: 'Calabria',
		lat: '38.6725905',
		lon: '16.1047815'
	},
	{
		key: 'vicenza',
		name: 'Vicenza',
		code: 'VI',
		region: 'Veneto',
		lat: '45.5488306',
		lon: '11.5478825'
	},
	{
		key: 'viterbo',
		name: 'Viterbo',
		code: 'VT',
		region: 'Lazio',
		lat: '42.4168441',
		lon: '12.1051148'
	}
]
