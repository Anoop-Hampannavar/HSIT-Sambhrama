import { TelemetryEvent } from './types';

export class FestivalTelemetryDispatcher {
  private endpoint: string;

  constructor(endpoint: string = '/api/telemetry') {
    this.endpoint = endpoint;
  }

  /**
   * Tracks attendee interactions across multi-day fest schedules
   */
  async recordEvent(event: Omit<TelemetryEvent, 'timestamp'>): Promise<void> {
    const payload: TelemetryEvent = {
      ...event,
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch(this.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn('Telemetry event buffering to fallback:', err);
    }
  }
}

export const telemetry = new FestivalTelemetryDispatcher();
