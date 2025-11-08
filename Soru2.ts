// Soru 2: Tip Koruyucuları (Type Guards)

interface Car {
  type: 'car';
  doors: number;
}

interface Truck {
  type: 'truck';
  capacity: number;
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  if ('doors' in vehicle) {
    console.log(`Araba: ${vehicle.doors} kapılı`);
  } else if ('capacity' in vehicle) {
    console.log(`Kamyon: ${vehicle.capacity} ton kapasiteli`);
  }
}

// Test
const myCar: Car = { type: 'car', doors: 4 };
const myTruck: Truck = { type: 'truck', capacity: 10 };

useVehicle(myCar);   // Araba: 4 kapılı
useVehicle(myTruck); // Kamyon: 10 ton kapasiteli