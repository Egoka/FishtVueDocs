export type Theme = 'fruits' | 'cars' | 'cities' | 'events' | 'hotels' | 'statistics' | 'users';

interface Fruit {
    id: string;
    name: string;
    color: string;
    weightGrams: number;
    isTropical: boolean;
    originCountry: string;
    pricePerKg: string;
}

interface Car {
    id: string;
    brand: string;
    model: string;
    year: number;
    fuel: string;
    color: string;
    mileageKm: number;
    priceUSD: number;
    isUsed: boolean;
}

interface City {
    id: string;
    name: string;
    country: string;
    population: number;
    areaKm2: number;
    climate: string;
    isCapital: boolean;
    region: string;
}

interface Hotel {
    id: string;
    name: string;
    country: string;
    stars: 1 | 2 | 3 | 4 | 5;
    isRecommended: boolean;
    roomsAvailable: number;
    pricePerNightUSD: number;
}

interface Event {
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
}

interface Statistics {
    id: string;
    name: string;
    totalUsers: number;
    activeUsers: number;
    newUsersToday: number;
    totalRevenue: number;
    averageRevenuePerUser: number;
    totalOrders: number;
    completedOrders: number;
    pendingOrders: number;
    averageOrderValue: number;
    customerSatisfaction: number;
}

interface User {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    role: 'admin' | 'user' | 'guest';
    age: number;
}

export type ThemeData = {
    fruits: Fruit;
    cars: Car;
    cities: City;
    hotels: Hotel;
    events: Event;
    statistics: Statistics;
    users: User;
};

// ===============================
// Вспомогательные функции
// ===============================
const getRandomItem = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const getRandomNumber = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomBool = (): boolean => Math.random() > 0.5;
const getRandomDate = (start: Date, end: Date): string => {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
};

// ===============================
// Генераторы по тематикам
// ===============================
const generators = {
    fruits: (): Fruit => {
        const names = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes', 'Peach', 'Strawberry', 'Kiwi', 'Watermelon'];
        const colors = ['Red', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink'];
        const origins = ['Brazil', 'India', 'China', 'Spain', 'Mexico', 'USA', 'Thailand'];

        return {
            id: crypto.randomUUID(),
            name: getRandomItem(names),
            color: getRandomItem(colors),
            weightGrams: getRandomNumber(50, 2000),
            isTropical: getRandomBool(),
            originCountry: getRandomItem(origins),
            pricePerKg: (Math.random() * 10).toFixed(2),
        };
    },

    cars: (): Car => {
        const brands = ['Toyota', 'BMW', 'Tesla', 'Ford', 'Honda', 'Mercedes', 'Audi', 'Kia'];
        const models = ['Corolla', 'Model S', 'Civic', 'A4', 'Mustang', 'Camry', 'X5', 'EV6'];
        const fuelTypes = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];
        const colors = ['Black', 'White', 'Blue', 'Silver', 'Red', 'Green'];

        return {
            id: crypto.randomUUID(),
            brand: getRandomItem(brands),
            model: getRandomItem(models),
            year: getRandomNumber(2000, 2025),
            fuel: getRandomItem(fuelTypes),
            color: getRandomItem(colors),
            mileageKm: getRandomNumber(10000, 200000),
            priceUSD: getRandomNumber(5000, 100000),
            isUsed: getRandomBool(),
        };
    },

    cities: (): City => {
        const cityNames = ['Tokyo', 'New York', 'Paris', 'London', 'Berlin', 'Moscow', 'Delhi', 'São Paulo', 'Sydney', 'Seoul'];
        const countries = ['Japan', 'USA', 'France', 'UK', 'Germany', 'Russia', 'India', 'Brazil', 'Australia', 'South Korea'];
        const climates = ['Temperate', 'Tropical', 'Arid', 'Continental', 'Polar'];
        const regions = ['Asia', 'Europe', 'America', 'Oceania'];

        return {
            id: crypto.randomUUID(),
            name: getRandomItem(cityNames),
            country: getRandomItem(countries),
            population: getRandomNumber(500000, 30000000),
            areaKm2: getRandomNumber(50, 15000),
            climate: getRandomItem(climates),
            isCapital: getRandomBool(),
            region: getRandomItem(regions),
        };
    },

    hotels: (): Hotel => {
        const names = ['Grand Palace', 'Ocean View', 'Mountain Lodge', 'City Center Inn', 'Skyline Hotel'];
        const countries = ['Italy', 'Japan', 'USA', 'Thailand', 'Germany', 'Canada'];

        return {
            id: crypto.randomUUID(),
            name: getRandomItem(names),
            country: getRandomItem(countries),
            stars: getRandomNumber(1, 5) as 1 | 2 | 3 | 4 | 5,
            isRecommended: getRandomBool(),
            roomsAvailable: getRandomNumber(10, 300),
            pricePerNightUSD: getRandomNumber(50, 1000),
        };
    },

    events: (): Event => {
        const names = ['Conference', 'Meeting', 'Workshop', 'Webinar', 'Exhibition', 'Festival', 'Concert', 'Sports Event'];
        const descriptions = [
            'Annual tech conference',
            'Team meeting to discuss project progress',
            'Workshop on new technologies',
            'Webinar on digital marketing',
            'Art exhibition showcasing local artists',
            'Music festival with various genres',
            'Concert featuring popular bands',
            'Sports event with multiple competitions'
        ];
        const startDate = new Date(2023, 0, 1);
        const endDate = new Date(2023, 11, 31);

        return {
            id: crypto.randomUUID(),
            name: getRandomItem(names),
            description: getRandomItem(descriptions),
            startDate: getRandomDate(startDate, endDate),
            endDate: getRandomDate(startDate, endDate),
            createdAt: getRandomDate(new Date(2022, 0, 1), new Date()),
            updatedAt: getRandomDate(new Date(2022, 0, 1), new Date()),
        };
    },

    statistics: (): Statistics => {
        const names = ['Monthly Report', 'Quarterly Analysis', 'Yearly Overview', 'Daily Statistics', 'Weekly Summary'];

        return {
            id: crypto.randomUUID(),
            name: getRandomItem(names),
            totalUsers: getRandomNumber(1000, 100000),
            activeUsers: getRandomNumber(100, 50000),
            newUsersToday: getRandomNumber(10, 1000),
            totalRevenue: getRandomNumber(10000, 1000000),
            averageRevenuePerUser: getRandomNumber(10, 100),
            totalOrders: getRandomNumber(100, 10000),
            completedOrders: getRandomNumber(50, 5000),
            pendingOrders: getRandomNumber(10, 1000),
            averageOrderValue: getRandomNumber(50, 500),
            customerSatisfaction: getRandomNumber(1, 10),
        };
    },

    users: (): User => {
        const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy'];
        const roles: User["role"][] = ['admin', 'user', 'guest'];
        const startDate = new Date(2022, 0, 1);
        const endDate = new Date();

        return {
            id: crypto.randomUUID(),
            name: getRandomItem(names),
            createdAt: getRandomDate(startDate, endDate),
            updatedAt: getRandomDate(startDate, endDate),
            isActive: getRandomBool(),
            role: getRandomItem<User["role"]>(roles),
            age: getRandomNumber(18, 65),
        };
    }
};

export default function generateData<T extends Theme, K extends keyof ThemeData[T]>(
    count: number,
    theme: T = 'fruits' as T,
    fields: K[] = [] as K[]
): Partial<ThemeData[T]>[] {
    const generator = generators[theme] as () => ThemeData[T];
    const data = Array.from({ length: count }, generator);

    if (fields.length === 0) {
        return data;
    }

    return data.map(item => {
        const filteredItem: Partial<ThemeData[T]> = {};
        fields.forEach(field => {
            if (field in item) {
                filteredItem[field] = item[field];
            }
        });
        return filteredItem;
    });
}

export const styleOne = reactive({
    gray: "m-1 text-xs bg-gray-100 text-gray-600 ring-gray-500/10 dark:bg-gray-950 dark:text-gray-400 dark:ring-gray-500/10",
    red: "m-1 text-xs bg-red-50 text-red-700 ring-red-600/10 dark:bg-red-950 dark:text-red-300 dark:ring-red-400/10",
    yellow: "m-1 text-xs bg-yellow-50 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-950 dark:text-yellow-200 dark:ring-yellow-400/20",
    green: "m-1 text-xs bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-950 dark:text-green-300 dark:ring-green-400/20",
    blue: "m-1 text-xs bg-blue-50 text-blue-700 ring-blue-700/10 dark:bg-blue-950 dark:text-blue-300 dark:ring-blue-300/10",
    indigo: "m-1 text-xs bg-indigo-50 text-indigo-700 ring-indigo-700/10 dark:bg-indigo-950 dark:text-indigo-300 dark:ring-indigo-300/10",
    purple: "m-1 text-xs bg-purple-50 text-purple-700 ring-purple-700/10 dark:bg-purple-950 dark:text-purple-300 dark:ring-purple-300/10",
    pink: "m-1 text-xs bg-pink-50 text-pink-700 ring-pink-700/10 dark:bg-pink-950 dark:text-pink-300 dark:ring-pink-300/10",
});
