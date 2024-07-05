export interface Boat {
    name: string;
    manufacturer: string;
    length: number;
    width: number;
    height: number;
    depth: number;
    image: any; // Typ hängt von Ihrem spezifischen Setup ab
}

export let boats: Boat[] = [
    {
        name: "pandoraaa",
        manufacturer: "Lima",
        length: 3,
        width: 6.5,
        height: 5,
        depth: 5,
        image: require('../assets/images/fahrradbrueckekonstanz.jpg'),
    },
];

