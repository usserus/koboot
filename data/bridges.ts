export const bridges = [
    {
        url: "fahrradbrücke-konstanz",
        bridgeName: "Fahrradbrücke Konstanz",
        location: "Konstanz",
        refClearanceHeight: 6.5,
        image: require('../assets/images/fahrradbrueckekonstanz.jpg'),
    },
    {
        url: "schänzlebrücke-konstanz",
        bridgeName: "Schänzlebrücke Konstanz",
        location: "Konstanz",
        refClearanceHeight: 5.2, // value for test purposes with boat height 2,5m, correct value would be 10
        image: require('../assets/images/schaenzlebrueckekonstanz.jpg'),
    },
    {
        url: "alterheinbrücke-konstanz",
        bridgeName: "Alter Rheinbrücke Konstanz",
        location: "Konstanz",
        refClearanceHeight: [5.5, 6.0, 6.5], // Array statt Objekt
        image: require('../assets/images/alterheinbrueckekonstanz.jpg'),
    }
];