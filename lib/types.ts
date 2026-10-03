export interface FestivalScheduleItem {
  dayNumber: number;
  date: string;
  title: string;
  theme: string;
  venue: string;
  coordinatorContact?: string;
}

export interface TelemetryEvent {
  eventId: string;
  eventType: 'SCHEDULE_VIEW' | 'REGISTRATION_CLICK' | 'COORDINATOR_QUERY';
  targetDay?: number;
  timestamp: string;
  userAgent?: string;
}
