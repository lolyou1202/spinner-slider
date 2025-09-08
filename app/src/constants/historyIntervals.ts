export type HistoryInterval = {
	sort: number
	name: string
	interval: {
		start: number
		end: number
	}
	slides: {
		title: number
		description: string
	}[]
}

export const historyIntervals: HistoryInterval[] = [
	{
		sort: 0,
		name: 'Кино СССР',
		interval: {
			start: 1960,
			end: 1977,
		},
		slides: [
			{
				title: 1960,
				description:
					'Начало десятилетия, закладываются основы жанров.',
			},
			{
				title: 1963,
				description:
					'Пик популярности фильмов Леонида Гайдая.',
			},
			{
				title: 1966,
				description: 'Появление новых режиссёров и актеров.',
			},
			{
				title: 1970,
				description:
					'Фильмы Андрея Тарковского, влияние на мировое кино.',
			},
			{
				title: 1974,
				description:
					'Завершение периода расцвета советского кино.',
			},
		],
	},
	{
		sort: 1,
		name: 'Рок-музыка',
		interval: {
			start: 1970,
			end: 1979,
		},
		slides: [
			{
				title: 1970,
				description:
					'Pink Floyd, Genesis, Yes.  Более сложные композиции и концептуальные альбомы.',
			},
			{
				title: 1970,
				description:
					'Led Zeppelin, Deep Purple, Black Sabbath.  Более тяжелое звучание и мощная энергетика.',
			},
			{
				title: 1975,
				description:
					'Ramones, Sex Pistols.  Протестное и бунтарское настроение.',
			},
			{
				title: 1983,
				description:
					'The Police, Talking Heads.  Эксперименты со стилями и звучанием.',
			},
		],
	},
	{
		sort: 2,
		name: 'Космическая гонка',
		interval: {
			start: 1957,
			end: 1975,
		},
		slides: [
			{
				title: 1957,
				description:
					'Первый спутник (СССР), полёт Гагарина (СССР).',
			},
			{
				title: 1961,
				description:
					'Развитие космических программ в СССР и США.',
			},
			{
				title: 1966,
				description:
					'Программа "Аполлон" (США), высадка человека на Луну.',
			},
			{
				title: 1970,
				description: 'Новые космические станции и проекты.',
			},
			{
				title: 1973,
				description:
					'Начало сотрудничества между СССР и США в космосе.',
			},
		],
	},
	{
		sort: 3,
		name: 'Видеоигры',
		interval: {
			start: 1972,
			end: 1989,
		},
		slides: [
			{
				title: 1972,
				description:
					'Pong, Space Invaders.  Зарождение индустрии.',
			},
			{
				title: 1977,
				description: 'Pac-Man, Donkey Kong, Space Invaders.',
			},
			{
				title: 1982,
				description:
					'NES, Sega Master System.  Домашние игровые консоли.',
			},
			{
				title: 1986,
				description:
					'Появление новых жанров и игровых механик.',
			},
		],
	},
	{
		sort: 4,
		name: 'Персональные компьютеры',
		interval: {
			start: 1975,
			end: 1990,
		},
		slides: [
			{
				title: 1975,
				description:
					'Altair 8800, Apple II.  Начало персональной эры.',
			},
			{
				title: 1980,
				description:
					'Распространение IBM PC и клонов.  Стандартизация.',
			},
			{
				title: 1985,
				description:
					'Развитие графического интерфейса и операционных систем.',
			},
			{
				title: 1990,
				description:
					'Появление новых технологий и архитектур.',
			},
		],
	},
	{
		sort: 5,
		name: 'Мобильная связь',
		interval: {
			start: 1973,
			end: 2000,
		},
		slides: [
			{
				title: 1970,
				description:
					'Развитие первых сотовых сетей.  Аналоговые системы.',
			},
			{
				title: 1980,
				description:
					'Повсеместное внедрение аналоговых сотовых телефонов.',
			},
			{
				title: 1990,
				description:
					'Появление цифровых сетей GSM. Новые стандарты связи.',
			},
		],
	},
]
