const majorScaleSchema = [
    {
        interval: 'PerfectUnison',
        function: "tonic",
    },
    {
        interval: 'MajorSecond',
        function: "supertonic",
    },
    {
        interval: 'MajorThird',
        function: "mediant",
    },
    {
        interval: 'PerfectFourth',
        function: "subdominant",
    },
    {
        interval: 'PerfectFifth',
        function: "dominant",
    },
    {
        interval: 'MajorSixth',
        function: "submediant",
    },
    {
        interval: 'MajorSeventh',
        function: "leading tone",
    },
]
const naturalHarmonicMinorScaleSchema = [
    {
        interval: 'PerfectUnison',
        function: "tonic",
    },
    {
        interval: 'MajorSecond',
        function: "supertonic",
    },
    {
        interval: 'MinorThird',
        function: "mediant",
    },
    {
        interval: 'PerfectFourth',
        function: "subdominant",
    },
    {
        interval: 'PerfectFifth',
        function: "dominant",
    },
    {
        interval: 'MinorSixth',
        function: "submediant",
    },
    {
        interval: 'MinorSeventh',
        function: "leading tone",
    },
]

export { majorScaleSchema, naturalHarmonicMinorScaleSchema }
