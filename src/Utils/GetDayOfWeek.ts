export function getDayOfWeek(dateString: string): string {
    // Create a new Date object from the date string
    const date = new Date(dateString);
    
    // Array of day names
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Get the day of the week as a number (0-6)
    const dayNumber = date.getDay();
    
    // Return the day name
    return daysOfWeek[dayNumber];
  }
