export default interface EventInterface {
  imageUrl: string;
  title: string;
  isSold: boolean;
  description: string;
  initialTicketPrice: string;
  participants: string[];
  categories: string[];
  startDate: string;
  endDate: string;
  ticketsAvailableDate: string;
  location: string;
  lat: number;
  lng: number;
  organizedBy: string;
  allDay: boolean;
}
