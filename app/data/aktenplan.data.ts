import { Aktenplan } from './aktenplan'

export const AKTENPLAN: Aktenplan[] = [
	{
		id: 0,
		aktenzeichen: '0',
		name: 'Allgemeine Verwaltung',
		sub:[
			{
				id: 10,
				aktenzeichen: '00',
				name: 'Staat und Staatsbürger, Übernationale Beziehungen',
				sub:[
					{
						id: 100,
						aktenzeichen: '000',
						name: 'Deutsches Reich und Gesamtdeutschland',
						sub:[
							{
								id: 1000,
								aktenzeichen: '000.0',
								name: 'Deutsche Staatsgeschichte und Verfassungsgeschichte',
								sub:[
									{
										id: 10000,
										aktenzeichen: '000.00',
										name: 'Allgemeines zur deutschen Staatsgeschichte und Verfassungsgeschichte'
									}
								]
							}
						]
					}
				]
			},
			{
				id: 20,
				aktenzeichen: '01',
				name: 'Landkreis',
				sub:[
					{
						id: 200,
						aktenzeichen: '010',
						name: 'Wirkungsgrundlagen zum Landkreis',
						sub:[
							{
								id: 2000,
								aktenzeichen: '010.0',
								name: 'Grundsätzliches zum Landkreis',
								sub:[
									{
										id: 20000,
										aktenzeichen: '010.00',
										name: 'Allgemeines, rechtsgeschichtliche Entwicklung der Landkreise'
									}
								]
							}
						]
					}
				]
			},
			{
				id: 30,
				aktenzeichen: '02',
				name: 'Gemeinde',
				sub:[
					{
						id: 300,
						aktenzeichen: '020',
						name: 'Wirkungsgrundlagen für die Gemeinde',
						sub:[
							{
								id: 3000,
								aktenzeichen: '020.0',
								name: 'Grundsätzliches zur Gemeinde',
								sub:[
									{
										id: 30000,
										aktenzeichen: '020.00',
										name: 'Allgemeines, rechtsgeschichtliche Entwicklung der Gemeinden'
									}
								]
							}
						]
					}
				]
			}
		]
	},
	{
		id: 1,
		aktenzeichen: '1',
		name: 'Öffentliche Sicherheit und Ordnung',
		sub:[
			{
				id: 11,
				aktenzeichen: '10',
				name: 'Allgemeine Polizei, Sicherheitsangelegenheiten und Ordnungsangelegenheiten',
				sub:[
					{
						id: 110,
						aktenzeichen: '100',
						name: 'Recht und Organisation der Polizei',
						sub:[
							{
								id: 1100,
								aktenzeichen: '100.0',
								name: 'Grundsätzliches zu Recht und Organisation der Polizei',
								sub:[
									{
										id: 11000,
										aktenzeichen: '100.00',
										name: 'Allgemeine Aufgaben der Polizei, Rechtsgrundlagen'
									}
								]
							}
						]
					}
				]
			},
			{
				id: 21,
				aktenzeichen: '11',
				name: 'Ordnung des Straßenverkehrs',
				sub:[
					{
						id: 210,
						aktenzeichen: '110',
						name: 'Allgemeine und zentrale Angelegenheiten des Straßenverkehrs',
						sub:[
							{
								id: 2100,
								aktenzeichen: '110.0',
								name: 'Grundprobleme und grundlegendes Verkehrsrecht',
								sub:[
									{
										id: 21000,
										aktenzeichen: '110.00',
										name: 'Allgemeines über Grundprobleme und grundlegendes Verkehrsrecht'
									}
								]
							}
						]
					}
				]
			},
			{
				id: 31,
				aktenzeichen: '12',
				name: 'Ordnungsaufgaben nach Gewerberecht',
				sub:[
					{
						id: 310,
						aktenzeichen: '120',
						name: 'Allgemeine Gewerberechtsangelegenheiten',
						sub:[
							{
								id: 3100,
								aktenzeichen: '120.0',
								name: 'Allgemeine Rechtsgrundlagen und Verwaltungsgrundlagen',
								sub:[
									{
										id: 31000,
										aktenzeichen: '120.00',
										name: 'Grundlegendes Gewerbeordnungsrecht'
									}
								]
							}
						]
					}
				]
			}
		]
	}
]