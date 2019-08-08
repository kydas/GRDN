export default function NotificationStrings() {
  return {
    water: (a, b) => `Your ${a} in garden ${b} may need to be watered`,
    minTemp: (a, b) => `Your ${a} in garden ${b} may be below its minimum temperature`,
    indoorWater: (a, b) => `Your ${a} in indoor garden ${b} may need watering`
  }
}
